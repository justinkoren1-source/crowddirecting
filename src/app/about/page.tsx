import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About CrowdDirecting',
  description:
    'CrowdDirecting is a new creative format where audiences help guide what happens next. Learn about the concept, the team, and the movement behind MultiMuse.',
}

const principles = [
  {
    number: '01',
    title: 'The Creator Remains the Director',
    body: 'CrowdDirecting never removes authority from the creator. They decide what gets voted on, when it gets revealed, and how it shapes the work. The crowd shapes the texture — the creator controls the throughline.',
  },
  {
    number: '02',
    title: 'Participation Is Meaningful',
    body: 'This isn\'t polling or commenting. Every vote, reaction, and decision in CrowdDirecting creates real impact on real creative content. When audiences participate, they see the results of their influence.',
  },
  {
    number: '03',
    title: 'The Moment Is Part of the Story',
    body: 'The reveal of a vote result, the tension before a decision, the momentum of audience consensus — these are narrative moments. CrowdDirecting treats participation itself as cinematic.',
  },
  {
    number: '04',
    title: 'Shared Ownership Builds Loyalty',
    body: 'When an audience helps shape something, they become invested in its success. CrowdDirecting creates a new kind of fandom — one built on co-creation, not just consumption.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-bg relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-violet-600/8 blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full bg-pink-600/6 blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-5 pt-16 pb-20">
          <p className="text-violet-400 text-xs font-semibold uppercase tracking-widest mb-5">
            The Concept
          </p>
          <h1 className="text-5xl md:text-6xl font-black text-white leading-[1.0] tracking-tight mb-6 max-w-3xl">
            What is{' '}
            <span className="gradient-text">CrowdDirecting</span>?
          </h1>
          <p className="text-white/50 text-lg md:text-xl leading-relaxed max-w-2xl">
            A new creative format where audiences help guide what happens next.
          </p>
        </div>
      </section>

      {/* Core definition */}
      <section className="max-w-3xl mx-auto px-5 py-16">
        <div className="space-y-6 text-white/60 text-lg leading-relaxed">
          <p>
            For decades, the relationship between creator and audience has been one-directional.
            A creator makes something. An audience experiences it. The feedback loop — if it
            existed at all — was slow, indirect, and rarely changed anything.
          </p>
          <p>
            <strong className="text-white">CrowdDirecting changes that dynamic.</strong>
          </p>
          <p>
            Instead of content being a one-way broadcast, CrowdDirecting creates a feedback loop
            between creators and their communities. Audiences vote, react, and help influence
            creative choices in real time. The creator remains the director — but the crowd
            becomes part of the creative energy.
          </p>
          <p>
            This isn&apos;t polling. It isn&apos;t a comment section. It&apos;s a new creative
            behavior where audiences help shape content, decisions, characters, outcomes, formats,
            and creative direction.
          </p>
          <blockquote className="border-l-2 border-violet-500 pl-5 py-1 text-violet-300 italic text-xl font-medium">
            &ldquo;The creator remains the director. But the crowd becomes part of the creative
            energy.&rdquo;
          </blockquote>
        </div>
      </section>

      {/* What it is NOT */}
      <section className="max-w-7xl mx-auto px-5 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="rounded-2xl border border-white/8 bg-[#0f0f1a] p-7">
            <h2 className="text-white font-bold text-xl mb-5">
              CrowdDirecting <span className="text-red-400">is not</span>…
            </h2>
            <ul className="space-y-3">
              {[
                'Just a poll or survey',
                'A comment section',
                'Removing creative control from the creator',
                'Crypto or web3',
                'A gimmick or engagement hack',
                'Choose-your-own-adventure for one person',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-white/40 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500/60 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-violet-500/20 bg-violet-500/5 p-7">
            <h2 className="text-white font-bold text-xl mb-5">
              CrowdDirecting <span className="text-violet-400">is</span>…
            </h2>
            <ul className="space-y-3">
              {[
                'A new creative format with real creative impact',
                'Collective interactive storytelling at scale',
                'A feedback loop with actual signal',
                'Participation that creates shared ownership',
                'A cultural moment — audiences shaping what they love',
                'The next evolution of creator-fan relationships',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-white/60 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-400 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="max-w-7xl mx-auto px-5 py-16">
        <div className="text-center mb-12">
          <p className="text-violet-400 text-xs font-semibold uppercase tracking-widest mb-3">
            The Foundation
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Principles of CrowdDirecting
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {principles.map((p) => (
            <div key={p.number} className="rounded-2xl glow-border bg-[#0f0f1a] p-7">
              <span className="gradient-text-violet font-black text-3xl block mb-4">
                {p.number}
              </span>
              <h3 className="text-white font-bold text-lg mb-3">{p.title}</h3>
              <p className="text-white/45 leading-relaxed text-sm">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About MultiMuse */}
      <section className="max-w-3xl mx-auto px-5 py-12 border-t border-white/5">
        <p className="text-violet-400 text-xs font-semibold uppercase tracking-widest mb-4">
          The Platform
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
          CrowdDirecting is powered by MultiMuse.
        </h2>
        <p className="text-white/50 leading-relaxed mb-5">
          MultiMuse is the platform that makes CrowdDirecting possible. Built for creators who
          want to invite their audiences into the creative process — it provides the tools,
          format, and community infrastructure to turn participation into storytelling.
        </p>
        <p className="text-white/50 leading-relaxed mb-8">
          This site — CrowdDirecting.com — is the editorial home for the ideas, culture, and
          conversations around the format. A MultiMuse publication.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="https://multimuse.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-pink-600 text-white font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            Visit MultiMuse
            <ArrowRight size={14} />
          </a>
          <Link
            href="/articles"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/15 text-white/60 hover:text-white hover:border-white/30 transition-all font-semibold text-sm"
          >
            Read the Articles
          </Link>
        </div>
      </section>
    </>
  )
}
