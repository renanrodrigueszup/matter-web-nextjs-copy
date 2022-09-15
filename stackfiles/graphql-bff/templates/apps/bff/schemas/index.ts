import { makeExecutableSchema } from '@graphql-tools/schema'
import * as user from './portal/user'
import { IResolvers } from '@graphql-tools/utils'
import { gql } from 'apollo-server-core'

const data = [
  user,
].reduce(
  (acc, s) => ({
    ...acc,
    typeDefs: acc.typeDefs.concat(s.typeDefs),
    resolvers: acc.resolvers.concat(s.resolvers as IResolvers)
  }),
  {
    typeDefs: [] as ReturnType<typeof gql>[],
    resolvers: [] as IResolvers[]
  }
)

export const schema = makeExecutableSchema({
  resolvers: data.resolvers,
  typeDefs: data.typeDefs
})
