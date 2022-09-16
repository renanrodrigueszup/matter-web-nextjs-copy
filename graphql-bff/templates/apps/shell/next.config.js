/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  output: 'standalone',
  images: {
    domains: [
    ]
  },
  experimental: {
    externalDir: true,
    outputFileTracingRoot: path.join(__dirname, '../../')
  },
  env: {
    NEXT_PUBLIC_GRAPHQL_URL: removeSuffix(
      process.env.NEXT_PUBLIC_GRAPHQL_URL,
      '/'
    ),
    ZONE_APOLLO_SERVER_URL: process.env.ZONE_APOLLO_SERVER_URL,
  },
  pageExtensions: [
    'page.tsx',
    'page.ts',
    'page.jsx',
    'page.js',
    'api.js',
    'api.ts'
  ],
  compiler: {
    styledComponents: true
  }
}

function removeSuffix(str, suffix) {
  if (!str) return
  return str.replace(new RegExp(`${suffix}+$`), '')
}


module.exports = nextConfig
