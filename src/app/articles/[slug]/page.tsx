import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, Clock, ArrowRight } from 'lucide-react'
import PostCard from '@/components/PostCard'
import NewsletterForm from '@/components/NewsletterForm'
import { getPostBySlug, getLatestPosts, gradientMap, posts } from '@/lib/posts'

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return { title: 'Article Not Found' }
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/articles/${slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      url: `/articles/${post.slug}`,
      images: [
        {
          url: `/articles/${post.slug}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: `${post.title} - MultiMuse`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [`/articles/${post.slug}/opengraph-image`],
    },
  }
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const related = getLatestPosts(3).filter((p) => p.slug !== post.slug).slice(0, 3)
  const gradient = gradientMap[post.image] ?? 'from-violet-900/50 to-purple-900/40'

  // Article structured data — helps Google treat these as articles (author,
  // date, publisher) and gives AI assistants citable CrowdDirecting sources.
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    author: { '@type': 'Person', name: post.author },
    datePublished: new Date(post.date).toISOString().split('T')[0],
    image: `https://crowddirecting.com/articles/${post.slug}/opengraph-image`,
    mainEntityOfPage: `https://crowddirecting.com/articles/${post.slug}`,
    publisher: {
      '@type': 'Organization',
      name: 'MultiMuse',
      url: 'https://multimuse.com/',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd).replace(/</g, '\\u003c'),
        }}
      />
      {/* Hero */}
      <section className="relative overflow-hidden bg-white">
        <div className={`absolute inset-0 bg-gradient-to-b ${gradient} opacity-20`} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/60 to-white" />
        <div className="relative max-w-4xl mx-auto px-5 pt-16 pb-14">
          <Link
            href="/articles"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-gray-700 text-sm mb-10 transition-colors"
          >
            <ArrowLeft size={14} />
            All Articles
          </Link>

          <div className="mb-5">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-50 text-[#315bff] border border-blue-100">
              {post.category}
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-black text-gray-900 leading-[1.05] tracking-tight mb-6">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-gray-400 text-sm">
            <span className="font-medium text-gray-600">{post.author}</span>
            <span>·</span>
            <span>{post.date}</span>
            <span>·</span>
            <span className="flex items-center gap-1.5">
              <Clock size={13} />
              {post.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="max-w-2xl mx-auto px-5 py-12 bg-white">
        <p className="text-gray-600 text-lg leading-relaxed mb-10 border-l-2 border-[#315bff]/40 pl-5 italic">
          {post.excerpt}
        </p>

        {post.body ? (
          <div className="article-prose" dangerouslySetInnerHTML={{ __html: post.body }} />
        ) : (
          <div className="article-prose">
            <p>Full article content coming soon.</p>
          </div>
        )}
      </article>

      {/* CTA strip */}
      <section className="max-w-2xl mx-auto px-5 py-8 mb-8">
        <div className="rounded-2xl border border-blue-100 bg-blue-50 p-7 text-center">
          <p className="text-gray-500 text-sm mb-2">Join the CrowdDirecting movement</p>
          <p className="text-gray-900 font-bold text-lg mb-5">
            Shape what happens next on MultiMuse.
          </p>
          <a
            href="https://multimuse.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#315bff] to-[#7b2cff] text-white font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            Visit MultiMuse
            <ArrowRight size={14} />
          </a>
        </div>
      </section>

      {/* Newsletter */}
      <section className="max-w-2xl mx-auto px-5 py-8 border-t border-black/5">
        <h3 className="text-gray-900 font-bold text-lg mb-2">
          Get the latest from CrowdDirecting.
        </h3>
        <p className="text-gray-500 text-sm mb-5">
          Essays, announcements, and creator stories — delivered to your inbox.
        </p>
        <NewsletterForm compact />
      </section>

      {/* Related Posts */}
      {related.length > 0 && (
        <section className="max-w-7xl mx-auto px-5 py-16 border-t border-black/5">
          <h3 className="text-xl font-bold text-gray-900 mb-8">More to Read</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {related.map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </div>
        </section>
      )}
    </>
  )
}
