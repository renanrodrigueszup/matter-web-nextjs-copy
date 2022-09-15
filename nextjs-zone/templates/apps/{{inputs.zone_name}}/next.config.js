/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  basePath: '/{{inputs.zone_base_path}}',
  images: {
    domains: []
  },
  output: 'standalone',
  experimental: {
    externalDir: true,
    outputFileTracingRoot: path.join(__dirname, '../../')
  },
  env: {},
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

module.exports = nextConfig
