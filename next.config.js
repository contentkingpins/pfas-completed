/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  distDir: 'build',
  images: {
    unoptimized: true
  },
  trailingSlash: true
}

module.exports = nextConfig 