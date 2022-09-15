import gql from 'graphql-tag'
import { ResolversMap } from '../../utils/resolvers'

export const typeDefs = gql`
  type User {
    name: String
    age: Int
  }

  type Query {
    users: [User]
  }
`

export const resolvers: ResolversMap = {
  Query: {
    users: (_, __, { dataSources }) => dataSources.user.all()
  }
}
