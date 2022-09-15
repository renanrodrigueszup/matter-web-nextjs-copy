import { ApolloServer } from 'apollo-server'
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core'
import { createDataSources } from './data-sources'
import { errorHandler } from './errorHandler'
import { schema } from './schemas'
import { nanoid } from 'nanoid'
import logger from '@{{global_computed_inputs.shell_project_name}}/shared/utils/logger'

const isDevelopment = process.env.NODE_ENV === 'development'
const plugins = []

if (isDevelopment) {
  plugins.push(ApolloServerPluginLandingPageGraphQLPlayground())
}

plugins.push(errorHandler)

const server = new ApolloServer({
  debug: true,
  schema: schema,
  introspection: true,
  dataSources: createDataSources,
  context: async () => ({
    ['request_id']: nanoid()
  }),
  plugins
})

server.listen({ port: 4000 }).then(({ url }) => {
  logger.debug({
    '[APOLLO_SERVER]': `🚀 Apollo ${
      isDevelopment ? 'Dev ' : ''
    }Server ready at ${url}`
  })
  logger.debug({
    '[APOLLO_SERVER] ': `🚀 ENVIRONMENT ${process.env.ENVIRONMENT}`
  })
})
