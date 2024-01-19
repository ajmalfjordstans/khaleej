/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  images: {
    // domains: ['<backend paths>','scontent.cdninstagram.com'],
    // unoptimized: true
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        pathname: '**',
      },
    ],
  },
}

module.exports = nextConfig
