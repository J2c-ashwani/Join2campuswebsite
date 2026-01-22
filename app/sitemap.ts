import { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/blog-data'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.join2campus.com'

    // Homepage - highest priority
    const homepage = {
        url: baseUrl,
        lastModified: new Date(),
        changeFrequency: 'daily' as const,
        priority: 1,
    }

    // Primary pages - high priority
    const primaryPages = [
        '/about',
        '/services',
        '/countries',
        '/contact',
        '/blog',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.85,
    }))

    // Secondary pages - medium priority
    const secondaryPages = [
        '/team',
        '/testimonials',
        '/indian-institute-of-ai',
        '/become-partner',
        '/student-profile',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }))

    // Legal pages - lower priority
    const legalPages = [
        '/privacy-policy',
        '/terms-of-service',
        '/refund-cancellation',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'yearly' as const,
        priority: 0.3,
    }))

    // Dynamic blog routes - high priority
    const posts = getAllPosts()
    const blogRoutes = posts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.publishedAt),
        changeFrequency: 'monthly' as const,
        priority: 0.9,
    }))

    return [homepage, ...primaryPages, ...blogRoutes, ...secondaryPages, ...legalPages]
}
