import Link from 'next/link'
import { ArrowRight, ChevronRight, Users, Clapperboard, Zap, Sparkles } from 'lucide-react'
import PostCard from '@/components/PostCard'
import NewsletterForm from '@/components/NewsletterForm'
import { getFeaturedPost, getLatestPosts, categories, gradientMap } from '@/lib/posts'

export default function Home() {
  const featured = getFeaturedPost()
  const latestPosts = getLatestPosts(6)
  const featuredGradient = gradientMap[featured.image] ?? 'from-violet-900/50 to-purple-900/40'

  return (
    <>
      {/* Hero */}
      <section className="hero-bg relative overflow-hidden min-h-[92vh] flex items-center">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="orb-float orb-pulse absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-violet-600/10 blur-3xl" />
          <div
            className="orb-float orb-pulse absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-pink-600/8 blur-3xl"
            style={{ animationDelay: '3s' }}
          />
          <div
            className="orb-pulse absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-600/5 blur-3xl"
            style={{ animationDelay: '1.5s' }}
          />
          <div className="absolute top-20 right-20 w-32 h-20 rounded-2xl border border-violet-500/15 glass rotate-6 hidden lg:block" />
          <div className="absolute top-36 right-48 w-20 h-12 rounded-xl border border-pink-500/10 glass -rotate-3 hidden lg:block" />
          <div className="absolute bottom-32 left-20 w-24 h-16 rounded-xl border border-violet-500/12 glass rotate-3 hidden lg:block" />
          <div className="absolute bottom-56 left-40 w-40 h-8 rounded-full bg-violet-500/8 hidden lg:block" />
        </div>

        <div className="relative max-w-7xl mx-auto px-5 py-28 md:py-36">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-violet-500/25 bg-violet-500/8 text-violet-300 text-xs font-semibold uppercase tracking-widest mb-8">
              <Sparkles size={11} />
              A MultiMuse Publication
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tight mb-7">
              <span className="gradient-text">CrowdDirecting</span>
              <br />
              <span className="text-white">is the future of</span>
              <br />
              <span className="text-white/60">audience-powered</span>
              <br />
              <span className="text-white">storytelling.</span>
            </h1>

            <p className="text-white/55 text-lg md:text-xl leading-relaxed max-w-2xl mb-10">
              Explore the ideas, announcements, creator stories, and cultural shifts behind
              MultiMuse — the platform where audiences help shape what happens next.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/articles"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-pink-600 text-white font-semibold hover:opacity-90 transition-opacity text-sm"
              >
                Read the Latest
                <ArrowRight size={16} />
              </Link>
              <a
                href="https://multimuse.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/15 text-white/70 hover:text-white hover:border-white/30 transition-all font-semibold text-sm"
              >
                Visit MultiMuse
                <ChevronRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="max-w-7xl mx-auto px-5 py-20">
        <div className="mb-10">
          <p className="text-violet-400 text-xs font-semibold uppercase tracking-widest mb-2">
            Featured
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-white">Latest From the Team</h2>
        </div>

        <Link
          href={`/articles/${featured.slug}`}
          className="group block rounded-3xl overflow-hidden glow-border card-hover bg-[#0f0f1a]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-5">
            <div
              className={`lg:col-span-2 bg-gradient-to-br ${featuredGradient} relative min-h-[280px]`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0f0f1a]/40 hidden lg:block" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f1a]/60 to-transparent lg:hidden" />
              <div className="absolute inset-0 flex items-center justify-center opacity-20">
                <Clapperboard size={120} className="text-violet-300" />
              </div>
              <div className="absolute top-5 left-5">
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-violet-500/30 text-violet-200 border border-violet-500/30 backdrop-blur-sm">
                  {featured.category}
                </span>
              </div>
            </div>

            <div className="lg:col-span-3 p-8 md:p-10 flex flex-col justify-center">
              <div className="flex items-center gap-2 text-white/35 text-xs mb-4">
                <span>{featured.author}</span>
                <span>·</span>
                <span>{featured.date}</span>
                <span>·</span>
                <span>{featured.readTime}</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white leading-snug mb-4 group-hover:text-violet-200 transition-colors">
                {featured.title}
              </h3>
              <p className="text-white/50 leading-relaxed mb-6 text-base">{featured.excerpt}</p>
              <div className="inline-flex items-center gap-2 text-violet-400 font-semibold text-sm group-hover:gap-3 transition-all">
                Read article
                <ArrowRight size={16} />
              </div>
            </div>
          </div>
        </Link>
      </section>

      {/* What Is CrowdDirecting? */}
      <section className="max-w-7xl mx-auto px-5 py-12">
        <div className="text-center mb-12">
          <p className="text-violet-400 text-xs font-semibold uppercase tracking-widest mb-3">
            The Concept
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What is CrowdDirecting?
          </h2>
          <p className="text-white/45 max-w-xl mx-auto">
            A new creative format where audiences don&apos;t just watch — they help shape what
            happens next.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            {
              Icon: Users,
              title: 'Audience Participation',
              text: 'Fans vote, react, and help influence creative choices in real time.',
              accent: 'from-violet-500/20 to-violet-500/5',
              iconColor: 'text-violet-400',
            },
            {
              Icon: Clapperboard,
              title: 'Creator-Led Decisions',
              text: 'Creators stay in control while inviting their audience into the process.',
              accent: 'from-pink-500/20 to-pink-500/5',
              iconColor: 'text-pink-400',
            },
            {
              Icon: Zap,
              title: 'Shared Momentum',
              text: 'Every vote, reveal, and decision becomes part of the story itself.',
              accent: 'from-blue-500/20 to-blue-500/5',
              iconColor: 'text-blue-400',
            },
          ].map(({ Icon, title, text, accent, iconColor }) => (
            <div
              key={title}
              className={`rounded-2xl p-7 bg-gradient-to-b ${accent} border border-white/8 card-hover`}
            >
              <div
                className={`w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-5 ${iconColor}`}
              >
                <Icon size={20} />
              </div>
              <h3 className="text-white font-bold text-lg mb-3">{title}</h3>
              <p className="text-white/50 leading-relaxed text-sm">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-5 py-16">
        <h2 className="text-xl font-bold text-white mb-6">Browse by Category</h2>
        <div className="flex flex-wrap gap-3">
          {categories.map((cat) => (
            <Link
              key={cat}
              href={`/articles?category=${encodeURIComponent(cat)}`}
              className="px-4 py-2 rounded-full border border-white/10 text-white/55 text-sm hover:text-white hover:border-violet-500/40 hover:bg-violet-500/8 transition-all"
            >
              {cat}
            </Link>
          ))}
        </div>
      </section>

      {/* Latest Posts Grid */}
      <section className="max-w-7xl mx-auto px-5 py-8">
        <div className="flex items-center justify-between mb-10">
          <div>
            <p className="text-violet-400 text-xs font-semibold uppercase tracking-widest mb-2">
              Latest
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-white">From the Archive</h2>
          </div>
          <Link
            href="/articles"
            className="hidden md:flex items-center gap-2 text-violet-400 hover:text-violet-300 text-sm font-medium transition-colors"
          >
            All articles
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {latestPosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      {/* Creator Spotlight */}
      <section className="max-w-7xl mx-auto px-5 py-16">
        <div className="rounded-3xl glow-border bg-[#0f0f1a] p-8 md:p-12 overflow-hidden relative">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-violet-500/8 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-pink-500/6 blur-3xl" />
          </div>
          <div className="relative">
            <p className="text-violet-400 text-xs font-semibold uppercase tracking-widest mb-3">
              Creator Spotlights
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              The People Shaping the Category
            </h2>
            <p className="text-white/45 max-w-xl leading-relaxed mb-8">
              Stories from the filmmakers, influencers, artists, and builders inviting their
              audiences into the creative process.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {['Filmmaker', 'Podcast Host', 'Visual Artist'].map((role) => (
                <div
                  key={role}
                  className="rounded-2xl border border-white/8 bg-white/3 p-5 flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-600/40 to-pink-600/40 border border-white/10 shrink-0" />
                  <div>
                    <p className="text-white/25 text-xs mb-1">Coming Soon</p>
                    <p className="text-white/50 text-sm font-medium">{role}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/creator-stories"
              className="inline-flex items-center gap-2 text-violet-400 font-semibold text-sm hover:text-violet-300 transition-colors"
            >
              View Creator Stories
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="max-w-7xl mx-auto px-5 py-8">
        <div className="rounded-3xl overflow-hidden bg-gradient-to-r from-violet-900/60 via-purple-900/50 to-pink-900/40 border border-violet-500/20 relative p-10 md:p-14 text-center">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-1/4 w-64 h-32 bg-violet-500/10 blur-2xl" />
            <div className="absolute bottom-0 right-1/4 w-64 h-32 bg-pink-500/8 blur-2xl" />
          </div>
          <div className="relative">
            <p className="text-violet-300/80 text-xs font-semibold uppercase tracking-widest mb-4">
              Join the Movement
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight">
              Want to be part of the first
              <br />
              <span className="gradient-text">CrowdDirecting</span> movement?
            </h2>
            <p className="text-white/45 mb-8 max-w-lg mx-auto">
              The next era of entertainment is being built right now. Get involved early.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://multimuse.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-pink-600 text-white font-semibold hover:opacity-90 transition-opacity text-sm"
              >
                Join MultiMuse
                <ArrowRight size={16} />
              </a>
              <Link
                href="/articles"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/20 text-white/70 hover:text-white hover:border-white/35 transition-all font-semibold text-sm"
              >
                Follow Updates
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="max-w-7xl mx-auto px-5 py-16">
        <div className="max-w-xl">
          <p className="text-violet-400 text-xs font-semibold uppercase tracking-widest mb-3">
            Stay Informed
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Get the latest on CrowdDirecting.
          </h2>
          <p className="text-white/45 mb-7 leading-relaxed">
            Essays, product updates, creator stories, and launch announcements from the MultiMuse
            team — delivered to your inbox.
          </p>
          <NewsletterForm />
          <p className="text-white/25 text-xs mt-3">No spam. Unsubscribe anytime.</p>
        </div>
      </section>
    </>
  )
}
