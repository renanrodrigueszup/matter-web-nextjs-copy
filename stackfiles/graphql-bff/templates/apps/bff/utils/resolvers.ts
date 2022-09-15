/* eslint-disable @typescript-eslint/no-explicit-any */
import { createDataSources } from '../data-sources'

interface Context {
  dataSources: ReturnType<typeof createDataSources>
}

type ResolverField = Record<
  string,
  (parent: any, params: any, ctx: Context) => any
>

export type ResolversMap = Record<string, ResolverField>
