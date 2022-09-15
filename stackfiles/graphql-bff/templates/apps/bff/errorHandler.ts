import { Request } from 'apollo-server-env'
import type {
  BaseContext,
  GraphQLRequestContext,
  GraphQLRequestContextDidEncounterErrors
} from 'apollo-server-types'
import logger from '@{{global_computed_inputs.shell_project_name}}/shared/utils/logger'

const getHeader = (
  http: Pick<Request, 'url' | 'method' | 'headers'> | undefined
) => {
  const headers: { [key: string]: string | null } = {}
  if (http?.headers) {
    for (const [key, value] of http.headers) {
      if (key !== 'token') headers[key] = value
    }
  }
  return headers
}

export const errorHandler = {
  async requestDidStart(requestContext: GraphQLRequestContext) {
    const operationName = requestContext.request.operationName
    const query = requestContext?.request?.query
    const kind = requestContext.operation?.operation
    const headers = getHeader(requestContext?.request?.http)

    logger.debug({
      requestId: requestContext.context['request_id'],
      operationName,
      query,
      kind,
      headers
    })

    return {
      async didEncounterErrors({
        logger,
        errors
      }: GraphQLRequestContextDidEncounterErrors<BaseContext>) {
        for (const error of errors) {
          let parsedError
          try {
            parsedError = JSON.stringify(error)
          } catch {
            parsedError = error
          }
          logger.error({
            requestId: requestContext.context['request_id'],
            error: parsedError
          })
        }
      }
    }
  }
}
