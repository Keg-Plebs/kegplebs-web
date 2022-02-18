// module.exports = {
//   reactStrictMode: true,
//   images: {
//     formats: ['image/webp'],
//   },
// }

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

module.exports = withBundleAnalyzer({})

// const path = require('path');
// module.exports = {
//   resolve: {
//     alias: {
//       // Forward all three imports to our exports file
//       three$: path.resolve("./build/three-exports.js"),
//     },
//   },
// };
