/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  distDir: 'build',
  output: 'export',
  images: {
    domains: ['localhost'],
    unoptimized: true
  },
  trailingSlash: true
}

module.exports = nextConfig 