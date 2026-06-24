import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ChevronRight } from 'lucide-react'
import PostCard from '@/components/PostCard'
import NewsletterForm from '@/components/NewsletterForm'
import { getFeaturedPost, getLatestPosts, gradientMap } from '@/lib/posts'
import { Clapperboard } from 'lucide-react'

export default function Home() {
  const featured = getFeaturedPost()
  const latestPosts = getLatestPosts(6)
  const featuredGradient = gradientMap[featured.image] ?? 'from-violet-900/50 to-purple-900/40'

  return (
    <>
      {/* Hero */}
      <section className="hero-bg relative overflow-hidden min-h-[85vh] flex items-center">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="orb-float orb-pulse absolute top-1/3 left-1/5 w-[500px] h-[500px] rounded-full bg-[#2D59EC]/8 blur-3xl" />
          <div
            className="orb-float orb-pulse absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-purple-600/7 blur-3xl"
            style={{ animationDelay: '3s' }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-5 py-24 md:py-32">
          {/* MultiMuse attribution */}
          <div className="flex items-center gap-2 mb-8">
            <span className="text-white/30 text-xs">A publication by</span>
            <Image
              src="/multimuse-wordmark-white.svg"
              alt="MultiMuse"
              width={80}
              height={20}
              className="opacity-40"
            />
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-[86px] font-black leading-[0.93] tracking-tight mb-7 max-w-4xl">
            <span className="gradient-text">CrowdDirecting</span>
            <br />
            <span className="text-white">is the future</span>
            <br />
            <span className="text-white/50">of storytelling.</span>
          </h1>

          <p className="text-white/50 text-lg leading-relaxed max-w-xl mb-10">
            The ideas, creator stories, and cultural commentary behind MultiMuse — the platform
            where audiences help shape what happens next.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/articles"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#2D59EC] to-[#7c3aed] text-white font-semibold hover:opacity-90 transition-opacity text-sm"
            >
              Read the Latest
              <ArrowRight size={16} />
            </Link>
            <a
              href="https://multimuse.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/12 text-white/60 hover:text-white hover:border-white/25 transition-all font-semibold text-sm"
            >
              Visit MultiMuse
              <ChevronRight size={15} />
            </a>
          </div>
        </div>
      </section>

      {/* What Is CrowdDirecting? — compact, always visible */}
      <section className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-5 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 rounded-2xl overflow-hidden">
            {[
              {
                title: 'Audience Participation',
                text: 'Fans vote, react, and help influence creative choices in real time.',
              },
              {
                title: 'Creator-Led',
                text: 'Creators stay in control while inviting their audience into the process.',
              },
              {
                title: 'Shared Momentum',
                text: 'Every vote, reveal, and decision becomes part of the story itself.',
              },
            ].map((card, i) => (
              <div
                key={card.title}
                className="bg-[#0a0a12] px-7 py-8"
              >
                <span className="text-[#2D59EC] font-black text-2xl">0{i + 1}</span>
                <h3 className="text-white font-bold text-base mt-3 mb-2">{card.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{card.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-5 text-center">
            <Link
              href="/about"
              className="text-white/35 text-sm hover:text-white/60 transition-colors"
            >
              Learn more about CrowdDirecting →
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="max-w-7xl mx-auto px-5 py-16">
        <p className="text-white/30 text-xs font-semibold uppercase tracking-widest mb-6">
          Featured
        </p>

        <Link
          href={`/articles/${featured.slug}`}
          className="group block rounded-2xl overflow-hidden glow-border card-hover bg-[#0f0f1a]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-5">
            <div
              className={`lg:col-span-2 bg-gradient-to-br ${featuredGradient} relative min-h-[240px]`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0f0f1a]/50 hidden lg:block" />
              <div className="absolute inset-0 flex items-center justify-center opacity-15">
                <Clapperboard size={100} className="text-white" />
              </div>
              <div className="absolute top-5 left-5">
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/10 text-white/80 backdrop-blur-sm border border-white/10">
                  {featured.category}
                </span>
              </div>
            </div>

            <div className="lg:col-span-3 p-8 md:p-10 flex flex-col justify-center">
              <div className="flex items-center gap-2 text-white/30 text-xs mb-4">
                <span>{featured.author}</span>
                <span>·</span>
                <span>{featured.date}</span>
                <span>·</span>
                <span>{featured.readTime}</span>
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-white leading-snug mb-4 group-hover:text-[#6ea3ff] transition-colors">
                {featured.title}
              </h2>
              <p className="text-white/45 leading-relaxed mb-6 text-sm">{featured.excerpt}</p>
              <div className="inline-flex items-center gap-2 text-[#6ea3ff] font-semibold text-sm group-hover:gap-3 transition-all">
                Read article <ArrowRight size={14} />
              </div>
            </div>
          </div>
        </Link>
      </section>

      {/* Latest Posts Grid */}
      <section className="max-w-7xl mx-auto px-5 py-4 pb-16">
        <div className="flex items-center justify-between mb-8">
          <p className="text-white/30 text-xs font-semibold uppercase tracking-widest">Latest</p>
          <Link
            href="/articles"
            className="text-white/35 hover:text-white/60 text-sm transition-colors"
          >
            All articles →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {latestPosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-5 py-14">
          <div className="max-w-md">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/multimuse-wordmark-white.svg"
                alt="MultiMuse"
                width={70}
                height={17}
                className="opacity-35"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">
              Stay up to date on CrowdDirecting.
            </h2>
            <p className="text-white/40 text-sm mb-6 leading-relaxed">
              Essays, product updates, and creator stories — roughly once a week, from the
              MultiMuse team.
            </p>
            <NewsletterForm />
            <p className="text-white/20 text-xs mt-3">No spam. Unsubscribe anytime.</p>
          </div>
        </div>
      </section>
    </>
  )
}
