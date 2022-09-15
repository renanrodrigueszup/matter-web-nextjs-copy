import {
    ApolloClient,
    InMemoryCache,
    from
  } from '@apollo/client'
import { BatchHttpLink } from '@apollo/client/link/batch-http'

const cache = new InMemoryCache()

export function createClient() {
    const link = new BatchHttpLink({
      uri: `${process.env.NEXT_PUBLIC_GRAPHQL_URL}/api/graphql`
    })
  
    const client = new ApolloClient({
      queryDeduplication: true,
      ssrMode: !!global.window,
      link: from([link]),
      credentials: 'include',
      cache,
      connectToDevTools: true
    })
  
    return client
}