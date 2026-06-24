import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Megaphone } from 'lucide-react'
import PostCard from '@/components/PostCard'
import { getPostsByCategory } from '@/lib/posts'

export const metadata: Metadata = {
  title: 'Announcements',
  description: 'Official announcements from the MultiMuse and CrowdDirecting team.',
}

const announcements = [
  {
    date: 'June 2026',
    title: 'CrowdDirecting.com is live.',
    body: 'The editorial home for audience-powered storytelling is officially open. This is where we\'ll publish essays, product news, creator stories, and cultural commentary as the CrowdDirecting category grows.',
    tag: 'Launch',
  },
  {
    date: 'Coming Soon',
    title: 'MultiMuse Beta Access — Applications Open',
    body: 'We\'re inviting the first wave of creators to build on the CrowdDirecting format. If you\'re a filmmaker, podcaster, visual artist, or content creator who wants to invite your audience into the creative process — we want to hear from you.',
    tag: 'Beta',
  },
  {
    date: 'Coming Soon',
    title: 'The CrowdDirecting Format Guide',
    body: 'A comprehensive resource for creators who want to understand how to design CrowdDirecting experiences — when to invite participation, how to structure decisions, and what to do with the results.',
    tag: 'Resource',
  },
]

export default function AnnouncementsPage() {
  const announcementPosts = getPostsByCategory('Announcements')

  return (
    <>
      {/* Header */}
      <section className="hero-bg relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-violet-600/8 blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-5 pt-16 pb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-500/20 bg-violet-500/8 text-violet-300 text-xs font-semibold uppercase tracking-widest mb-6">
            <Megaphone size={11} />
            Official
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Announcements</h1>
          <p className="text-white/45 max-w-lg">
            News and updates from the MultiMuse team — product launches, milestones, and what&apos;s next.
          </p>
        </div>
      </section>

      {/* Featured announcements */}
      <section className="max-w-4xl mx-auto px-5 py-14">
        <div className="space-y-5">
          {announcements.map((ann) => (
            <div key={ann.title} className="rounded-2xl glow-border bg-[#0f0f1a] p-7">
              <div className="flex items-start justify-between gap-4 mb-3">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-violet-500/15 text-violet-300 border border-violet-500/20">
                  {ann.tag}
                </span>
                <span className="text-white/30 text-xs shrink-0">{ann.date}</span>
              </div>
              <h2 className="text-white font-bold text-xl mb-3">{ann.title}</h2>
              <p className="text-white/50 leading-relaxed text-sm">{ann.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* From the blog */}
      {announcementPosts.length > 0 && (
        <section className="max-w-7xl mx-auto px-5 py-8 border-t border-white/5">
          <h2 className="text-xl font-bold text-white mb-8">Announcement Articles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {announcementPosts.map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-5 py-16">
        <div className="rounded-2xl border border-white/8 bg-[#0f0f1a] p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-white font-bold text-xl mb-2">Don&apos;t miss an announcement.</h3>
            <p className="text-white/40 text-sm">Subscribe to get updates straight to your inbox.</p>
          </div>
          <Link
            href="/#newsletter"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-pink-600 text-white font-semibold text-sm hover:opacity-90 transition-opacity shrink-0"
          >
            Subscribe
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </>
  )
}
