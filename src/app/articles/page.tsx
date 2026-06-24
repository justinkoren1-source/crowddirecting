import type { Metadata } from 'next'
import Link from 'next/link'
import { Search } from 'lucide-react'
import PostCard from '@/components/PostCard'
import { posts, categories, getFeaturedPost, gradientMap } from '@/lib/posts'
import { ArrowRight, Clapperboard } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Articles',
  description:
    'Essays, creator stories, cultural commentary, and deep dives on CrowdDirecting and the future of audience-powered storytelling.',
}

export default function ArticlesPage({
  searchParams,
}: {
  searchParams: { category?: string }
}) {
  const activeCategory = searchParams.category ?? null
  const featured = getFeaturedPost()
  const featuredGradient = gradientMap[featured.image] ?? 'from-violet-900/50 to-purple-900/40'

  const filtered = activeCategory
    ? posts.filter((p) => p.category === activeCategory)
    : posts

  return (
    <>
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-5 pt-16 pb-8">
        <p className="text-violet-400 text-xs font-semibold uppercase tracking-widest mb-4">
          Publication
        </p>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-black text-white leading-tight mb-3">
              All Articles
            </h1>
            <p className="text-white/45 max-w-lg">
              Essays, creator stories, cultural commentary, and product updates on the new era
              of audience-powered storytelling.
            </p>
          </div>
          {/* Search placeholder */}
          <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/10 bg-white/3 text-white/30 text-sm min-w-[220px]">
            <Search size={15} />
            <span>Search articles…</span>
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="max-w-7xl mx-auto px-5 py-6 border-b border-white/5">
        <div className="flex flex-wrap gap-2">
          <Link
            href="/articles"
            className={`px-4 py-1.5 rounded-full text-sm transition-all ${
              !activeCategory
                ? 'bg-violet-600 text-white font-semibold'
                : 'border border-white/10 text-white/50 hover:text-white hover:border-violet-500/40'
            }`}
          >
            All
          </Link>
          {categories.map((cat) => (
            <Link
              key={cat}
              href={`/articles?category=${encodeURIComponent(cat)}`}
              className={`px-4 py-1.5 rounded-full text-sm transition-all ${
                activeCategory === cat
                  ? 'bg-violet-600 text-white font-semibold'
                  : 'border border-white/10 text-white/50 hover:text-white hover:border-violet-500/40'
              }`}
            >
              {cat}
            </Link>
          ))}
        </div>
      </section>

      {/* Featured (only when no category filter) */}
      {!activeCategory && (
        <section className="max-w-7xl mx-auto px-5 py-12">
          <p className="text-white/30 text-xs font-semibold uppercase tracking-widest mb-5">
            Featured
          </p>
          <Link
            href={`/articles/${featured.slug}`}
            className="group block rounded-3xl overflow-hidden glow-border card-hover bg-[#0f0f1a]"
          >
            <div className="grid grid-cols-1 lg:grid-cols-5">
              <div
                className={`lg:col-span-2 bg-gradient-to-br ${featuredGradient} relative min-h-[220px]`}
              >
                <div className="absolute inset-0 flex items-center justify-center opacity-20">
                  <Clapperboard size={100} className="text-violet-300" />
                </div>
                <div className="absolute top-5 left-5">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-violet-500/30 text-violet-200 border border-violet-500/30 backdrop-blur-sm">
                    {featured.category}
                  </span>
                </div>
              </div>
              <div className="lg:col-span-3 p-7 md:p-9 flex flex-col justify-center">
                <div className="flex items-center gap-2 text-white/35 text-xs mb-3">
                  <span>{featured.author}</span>
                  <span>·</span>
                  <span>{featured.date}</span>
                  <span>·</span>
                  <span>{featured.readTime}</span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-white leading-snug mb-3 group-hover:text-violet-200 transition-colors">
                  {featured.title}
                </h2>
                <p className="text-white/45 leading-relaxed mb-5 text-sm">{featured.excerpt}</p>
                <div className="inline-flex items-center gap-2 text-violet-400 font-semibold text-sm group-hover:gap-3 transition-all">
                  Read article <ArrowRight size={14} />
                </div>
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* Posts Grid */}
      <section className="max-w-7xl mx-auto px-5 py-8 pb-24">
        {activeCategory && (
          <h2 className="text-xl font-bold text-white mb-8">
            {activeCategory}
            <span className="text-white/30 font-normal ml-3 text-base">
              {filtered.length} {filtered.length === 1 ? 'article' : 'articles'}
            </span>
          </h2>
        )}
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-white/30">
            <p className="text-lg mb-2">No articles in this category yet.</p>
            <Link href="/articles" className="text-violet-400 text-sm hover:text-violet-300">
              View all articles →
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered
              .filter((p) => !(activeCategory === null && p.featured))
              .map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
          </div>
        )}
      </section>
    </>
  )
}
