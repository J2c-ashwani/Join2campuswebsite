import { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/blog-data'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://join2campus.com'

    // Static routes
    const routes = [
        '',
        '/about',
        '/team',
        '/services',
        '/countries',
        '/testimonials',
        '/indian-institute-of-ai',
        '/blog',
        '/contact',
        '/become-partner',
        '/student-profile',
        '/privacy-policy',
        '/terms-of-service',
        '/refund-cancellation',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }))

    // Dynamic blog routes
    const posts = getAllPosts()
    const blogRoutes = posts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.publishedAt),
        changeFrequency: 'monthly' as const,
        priority: 0.9,
    }))

    return [...routes, ...blogRoutes]
}
