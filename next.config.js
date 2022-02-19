const options = {
  reactStrictMode: true,
  images: {
    formats: ['image/webp'],
    domains: ['https://dspp4aqyru269.cloudfront.net'],
  },
}

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

module.exports = withBundleAnalyzer(options)