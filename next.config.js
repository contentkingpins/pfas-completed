/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
  experimental: {
    // This is experimental but can be helpful for deployment issues
    esmExternals: 'loose'
  }
}

module.exports = nextConfig 