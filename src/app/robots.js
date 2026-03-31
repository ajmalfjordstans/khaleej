export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: '/admin',
      },
    ],
    sitemap: 'https://www.khaleejmandi.co.uk/sitemap.xml',
  }
}
