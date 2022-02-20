const options = {
  reactStrictMode: true,
  images: {
    formats: ['image/webp'],
    domains: ['https://dspp4aqyru269.cloudfront.net'],
  },
  env: {
    ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
    S3_BUCKET: process.env.AWS_S3_BUCKET,
    SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY
  }
}

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

module.exports = withBundleAnalyzer(options)