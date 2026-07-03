import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Film, Mic, Palette, Music, Camera, PenLine } from 'lucide-react'
import PostCard from '@/components/PostCard'
import { getPostsByCategory } from '@/lib/posts'

export const metadata: Metadata = {
  title: 'Creator Stories',
  description:
    'Stories from the filmmakers, influencers, artists, and builders inviting their audiences into the creative process.',
}

const creatorTypes = [
  { icon: Film, label: 'Filmmakers', desc: 'Directors inviting audiences into the story' },
  { icon: Mic, label: 'Podcasters', desc: 'Hosts letting listeners shape the conversation' },
  { icon: Palette, label: 'Visual Artists', desc: 'Artists guided by community decisions' },
  { icon: Music, label: 'Musicians', desc: 'Artists co-creating with their fanbase' },
  { icon: Camera, label: 'Content Creators', desc: 'Influencers evolving through audience input' },
  { icon: PenLine, label: 'Writers', desc: 'Authors shaping narratives with readers' },
]

export default function CreatorStoriesPage() {
  const posts = getPostsByCategory('Creator Stories')

  return (
    <>
      {/* Header */}
      <section className="hero-bg relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-5 pt-16 pb-16">
          <p className="text-[#315bff] text-xs font-semibold uppercase tracking-widest mb-5">
            Creator Spotlights
          </p>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 max-w-2xl">
            The People Shaping the Category
          </h1>
          <p className="text-gray-500 max-w-lg leading-relaxed">
            Stories from the filmmakers, influencers, artists, and builders inviting their
            audiences into the creative process.
          </p>
        </div>
      </section>

      {/* Creator type grid */}
      <section className="max-w-7xl mx-auto px-5 py-14">
        <p className="text-gray-400 text-xs font-semibold uppercase tracking-widest mb-7">
          Who&apos;s CrowdDirecting
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {creatorTypes.map(({ icon: Icon, label, desc }) => (
            <div
              key={label}
              className="rounded-2xl border border-black/6 bg-white p-5 text-center hover:border-blue-200 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-[#315bff] mx-auto mb-3">
                <Icon size={18} />
              </div>
              <p className="text-gray-900 text-sm font-semibold mb-1">{label}</p>
              <p className="text-gray-400 text-xs leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Placeholder profiles */}
      <section className="max-w-7xl mx-auto px-5 py-8">
        <h2 className="text-xl font-bold text-gray-900 mb-8">Featured Creators</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          {['Independent Filmmaker', 'Podcast Host', 'Visual Artist'].map((role) => (
            <div key={role} className="rounded-2xl border border-black/6 bg-white p-7">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#315bff]/20 to-purple-200 border border-black/6 mb-5" />
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-50 text-[#315bff] border border-blue-100 mb-3 inline-block">
                {role}
              </span>
              <h3 className="text-gray-900 font-bold text-lg mb-2 mt-2">Coming Soon</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We&apos;re working with creators to tell their CrowdDirecting stories. Check back
                soon.
              </p>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-blue-100 bg-blue-50 p-7 text-center">
          <h3 className="text-gray-900 font-bold text-xl mb-3">
            Are you a creator using CrowdDirecting?
          </h3>
          <p className="text-gray-500 text-sm mb-6 max-w-md mx-auto">
            We want to hear your story. If you&apos;re experimenting with audience participation
            in your creative process, we&apos;d love to feature you.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#315bff] to-[#7b2cff] text-white font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            Get in Touch
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {posts.length > 0 && (
        <section className="max-w-7xl mx-auto px-5 py-14 border-t border-black/5 mt-8">
          <h2 className="text-xl font-bold text-gray-900 mb-8">Creator Story Articles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {posts.map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </div>
        </section>
      )}
    </>
  )
}
