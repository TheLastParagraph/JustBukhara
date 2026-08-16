import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/cart', '/checkout'], // Prevent indexing of cart and checkout states
    },
    sitemap: 'https://justbukhara.isbest.org/sitemap.xml',
  }
}
