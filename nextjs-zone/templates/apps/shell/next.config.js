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
  },
  async rewrites() {
    return [
      
    ]
  }
}

module.exports = nextConfig
