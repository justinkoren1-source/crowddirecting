import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Megaphone } from 'lucide-react'
import PostCard from '@/components/PostCard'
import { getPostsByCategory } from '@/lib/posts'

export const metadata: Metadata = {
  alternates: { canonical: '/announcements' },
  title: 'Announcements',
  description: 'Official announcements from the MultiMuse and CrowdDirecting team.',
}

const announcements = [
  {
    date: 'June 2026',
    title: 'CrowdDirecting.com is live.',
    body: "The editorial home for audience-powered storytelling is officially open. This is where we'll publish essays, product news, creator stories, and cultural commentary as the CrowdDirecting category grows.",
    tag: 'Launch',
  },
  {
    date: 'Coming Soon',
    title: 'MultiMuse Beta Access — Applications Open',
    body: "We're inviting the first wave of creators to build on the CrowdDirecting format. If you're a filmmaker, podcaster, visual artist, or content creator who wants to invite your audience into the creative process — we want to hear from you.",
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
        <div className="relative max-w-7xl mx-auto px-5 pt-16 pb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-100 bg-blue-50 text-[#315bff] text-xs font-semibold uppercase tracking-widest mb-6">
            <Megaphone size={11} />
            Official
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Announcements</h1>
          <p className="text-gray-500 max-w-lg leading-relaxed">
            News and updates from the MultiMuse team — product launches, milestones, and
            what&apos;s next.
          </p>
        </div>
      </section>

      {/* Announcements */}
      <section className="max-w-4xl mx-auto px-5 py-14">
        <div className="space-y-5">
          {announcements.map((ann) => (
            <div key={ann.title} className="rounded-2xl border border-black/6 bg-white p-7">
              <div className="flex items-start justify-between gap-4 mb-3">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-50 text-[#315bff] border border-blue-100">
                  {ann.tag}
                </span>
                <span className="text-gray-400 text-xs shrink-0">{ann.date}</span>
              </div>
              <h2 className="text-gray-900 font-bold text-xl mb-3">{ann.title}</h2>
              <p className="text-gray-500 leading-relaxed text-sm">{ann.body}</p>
            </div>
          ))}
        </div>
      </section>

      {announcementPosts.length > 0 && (
        <section className="max-w-7xl mx-auto px-5 py-8 border-t border-black/5">
          <h2 className="text-xl font-bold text-gray-900 mb-8">Announcement Articles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {announcementPosts.map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </div>
        </section>
      )}

      <section className="max-w-7xl mx-auto px-5 py-16">
        <div className="rounded-2xl border border-black/6 bg-white p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-gray-900 font-bold text-xl mb-2">
              Don&apos;t miss an announcement.
            </h3>
            <p className="text-gray-500 text-sm">Subscribe to get updates straight to your inbox.</p>
          </div>
          <Link
            href="/#newsletter"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#315bff] to-[#7b2cff] text-white font-semibold text-sm hover:opacity-90 transition-opacity shrink-0"
          >
            Subscribe
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </>
  )
}
