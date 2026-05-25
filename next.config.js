/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/blog/top-10-arabic-yemeni-dishes-leicester',
        destination: '/top-arabic-yemeni-dishes-leicester',
        permanent: true,
      },
      {
        source: '/blog/top-arabic-yemeni-dishes-leicester',
        destination: '/top-arabic-yemeni-dishes-leicester',
        permanent: true,
      },
    ]
  },
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
