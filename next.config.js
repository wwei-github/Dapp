/** @type {import('next').NextConfig} */
// const withTM = require('next-transpile-modules')(['wagmi','@rainbow-me/rainbowkit']);
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

// module.exports = withTM(nextConfig)
module.exports = nextConfig
