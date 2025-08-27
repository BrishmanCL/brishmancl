// app/robots.ts
import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            // disallow: '/admin',  // si quieres bloquear una ruta
        },
        sitemap: 'https://brishmancl.com/sitemap.xml',
    }
}
