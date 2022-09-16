import {
  Request,
  RequestOptions,
  Response,
  RESTDataSource
} from 'apollo-datasource-rest'
import { UserInputError } from 'apollo-server'
import logger from '@{{global_computed_inputs.shell_project_name}}/shared/utils/logger'

const REGEX_TO_PARSE_BACKEND_VALIDATION_MESSAGE = /(.+?): (.+)/

type ValidationError = {
  description: string
  details?: string[]
}

class Api extends RESTDataSource {
  constructor() {
    super()
  }

  willSendRequest(request: RequestOptions) {
    logger.info({
      from: '[API_REQUEST]',
      requestId: this.context['request_id'],
      endpoint: `${this.baseURL}/${request.path}`,
      method: request.method,
      params: request.params
    })
  }

  async didReceiveResponse(response: Response, request: Request) {
    if (response.status === 400 || response.status === 422) {
      const body = await super.parseBody(response)

      const fields = this.parseValidationError(body as ValidationError)

      throw new UserInputError(`${response.status}: Invalid Argument Values`, {
        fields
      })
    }

    return super.didReceiveResponse(response, request)
  }

  private parseValidationError(errors: ValidationError) {
    if (errors.details) {
      const parsedErrors = errors.details.reduce(
        (acc: Record<string, string>, value: string) => {
          const match = value.match(REGEX_TO_PARSE_BACKEND_VALIDATION_MESSAGE)

          if (!match) {
            throw new Error(`Error message cannot be processed: ${value}`)
          }

          const [, key, message] = match

          return { ...acc, [key]: message }
        },
        {}
      )
      return { ...parsedErrors, message: errors.description }
    } else if (errors.description) {
      return {
        message: errors.description
      }
    } else {
      return errors
    }
  }
}

export default Api
