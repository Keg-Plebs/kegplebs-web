const options = {
  reactStrictMode: true,
  images: {
    formats: ['image/webp'],
    domains: ['https://dspp4aqyru269.cloudfront.net'],
  },
  env: {
    SUPABASE_URL: process.env.SUPABASE_URL,
    SUPABASE_KEY: process.env.SUPABASE_KEY,
    JWT_SECRET: process.env.JWT_SECRET
  }
}

// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true'
// })

// module.exports = withBundleAnalyzer(options)
module.exports = options;