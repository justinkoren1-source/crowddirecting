import type { Metadata } from 'next'
import Link from 'next/link'
import { Search, ArrowRight, Clapperboard } from 'lucide-react'
import PostCard from '@/components/PostCard'
import { posts, categories, getFeaturedPost, gradientMap } from '@/lib/posts'

export const metadata: Metadata = {
  title: 'Articles',
  description:
    'Essays, creator stories, cultural commentary, and deep dives on CrowdDirecting and the future of audience-powered storytelling.',
}

export default async function ArticlesPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>
}) {
  const { category } = await searchParams
  const activeCategory = category ?? null
  const featured = getFeaturedPost()
  const featuredGradient = gradientMap[featured.image] ?? 'from-violet-900/50 to-purple-900/40'

  const filtered = activeCategory
    ? posts.filter((p) => p.category === activeCategory)
    : posts

  return (
    <>
      {/* Page Header */}
      <section className="bg-white border-b border-black/5">
        <div className="max-w-7xl mx-auto px-5 pt-14 pb-8">
          <p className="text-[#315bff] text-xs font-semibold uppercase tracking-widest mb-4">
            Publication
          </p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-3">
                All Articles
              </h1>
              <p className="text-gray-500 max-w-lg">
                Essays, creator stories, cultural commentary, and product updates on the new era
                of audience-powered storytelling.
              </p>
            </div>
            <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-black/8 bg-gray-50 text-gray-400 text-sm min-w-[220px]">
              <Search size={15} />
              <span>Search articles…</span>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="bg-white border-b border-black/5 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-5 py-3 overflow-x-auto">
          <div className="flex gap-2 min-w-max">
            <Link
              href="/articles"
              className={`px-4 py-1.5 rounded-full text-sm transition-all whitespace-nowrap ${
                !activeCategory
                  ? 'bg-[#315bff] text-white font-semibold'
                  : 'border border-black/8 text-gray-500 hover:text-gray-800 hover:border-black/15 bg-white'
              }`}
            >
              All
            </Link>
            {categories.map((cat) => (
              <Link
                key={cat}
                href={`/articles?category=${encodeURIComponent(cat)}`}
                className={`px-4 py-1.5 rounded-full text-sm transition-all whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-[#315bff] text-white font-semibold'
                    : 'border border-black/8 text-gray-500 hover:text-gray-800 hover:border-black/15 bg-white'
                }`}
              >
                {cat}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured (only when no category filter) */}
      {!activeCategory && (
        <section className="max-w-7xl mx-auto px-5 py-12">
          <p className="text-gray-400 text-xs font-semibold uppercase tracking-widest mb-5">
            Featured
          </p>
          <Link
            href={`/articles/${featured.slug}`}
            className="group block rounded-2xl overflow-hidden border border-black/6 card-hover bg-white"
          >
            <div className="grid grid-cols-1 lg:grid-cols-5">
              <div className={`lg:col-span-2 bg-gradient-to-br ${featuredGradient} relative min-h-[220px]`}>
                <div className="absolute inset-0 flex items-center justify-center opacity-15">
                  <Clapperboard size={100} className="text-white" />
                </div>
                <div className="absolute top-5 left-5">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/20 text-white backdrop-blur-sm border border-white/20">
                    {featured.category}
                  </span>
                </div>
              </div>
              <div className="lg:col-span-3 p-7 md:p-9 flex flex-col justify-center">
                <div className="flex items-center gap-2 text-gray-400 text-xs mb-3">
                  <span>{featured.author}</span>
                  <span>·</span>
                  <span>{featured.date}</span>
                  <span>·</span>
                  <span>{featured.readTime}</span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 leading-snug mb-3 group-hover:text-[#315bff] transition-colors">
                  {featured.title}
                </h2>
                <p className="text-gray-500 leading-relaxed mb-5 text-sm">{featured.excerpt}</p>
                <div className="inline-flex items-center gap-2 text-[#315bff] font-semibold text-sm group-hover:gap-3 transition-all">
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
          <h2 className="text-xl font-bold text-gray-900 mb-8">
            {activeCategory}
            <span className="text-gray-400 font-normal ml-3 text-base">
              {filtered.length} {filtered.length === 1 ? 'article' : 'articles'}
            </span>
          </h2>
        )}
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            <p className="text-lg mb-2">No articles in this category yet.</p>
            <Link href="/articles" className="text-[#315bff] text-sm hover:opacity-80">
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
