/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    domains: ['<backend paths>'],
    // unoptimized: true
  },
}

module.exports = nextConfig
