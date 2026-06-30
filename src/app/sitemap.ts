import type { MetadataRoute } from 'next'
import { posts } from '@/lib/posts'

const siteUrl = 'https://crowddirecting.com'

const staticRoutes: MetadataRoute.Sitemap = [
  {
    url: siteUrl,
    lastModified: new Date('2026-06-29'),
    changeFrequency: 'weekly',
    priority: 1,
  },
  {
    url: `${siteUrl}/articles`,
    lastModified: new Date('2026-06-29'),
    changeFrequency: 'weekly',
    priority: 0.8,
  },
  {
    url: `${siteUrl}/announcements`,
    lastModified: new Date('2026-06-29'),
    changeFrequency: 'weekly',
    priority: 0.6,
  },
  {
    url: `${siteUrl}/about`,
    lastModified: new Date('2026-06-29'),
    changeFrequency: 'monthly',
    priority: 0.6,
  },
  {
    url: `${siteUrl}/creator-stories`,
    lastModified: new Date('2026-06-29'),
    changeFrequency: 'weekly',
    priority: 0.6,
  },
  {
    url: `${siteUrl}/contact`,
    lastModified: new Date('2026-06-29'),
    changeFrequency: 'monthly',
    priority: 0.4,
  },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const articleRoutes = posts.map((post) => ({
    url: `${siteUrl}/articles/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: post.featured ? 0.8 : 0.7,
  }))

  return [...staticRoutes, ...articleRoutes]
}
