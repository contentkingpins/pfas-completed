/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  distDir: 'build',
  images: {
    domains: ['localhost']
  },
  trailingSlash: true
}

module.exports = nextConfig 