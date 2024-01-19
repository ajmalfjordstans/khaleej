/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  images: {
    domains: ['<backend paths>','scontent.cdninstagram.com'],
    // unoptimized: true
    appDir: true,
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 'scontent.cdninstagram.com',
    //     pathname: '**',
    //   },
    // ],
  },
}

module.exports = nextConfig
