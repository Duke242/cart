const json5 = require('json5') 

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.json5$/i,
      parser: { parse: json5.parse },
      type: 'json',
    }) 
    return config
  }
}

module.exports = nextConfig
