import type { Metadata } from 'next'
import { Mail, MessageSquare, Users, FileText } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with the CrowdDirecting and MultiMuse team.',
}

const reasons = [
  {
    icon: MessageSquare,
    title: 'Press & Media',
    desc: 'Covering CrowdDirecting or the creator economy? We\'d love to connect.',
    email: 'hello@multimuse.com',
  },
  {
    icon: Users,
    title: 'Creator Partnerships',
    desc: 'Want to bring CrowdDirecting to your audience? Apply for early access.',
    email: 'hello@multimuse.com',
  },
  {
    icon: FileText,
    title: 'Editorial & Contributions',
    desc: 'Have an essay, perspective, or story about audience-powered storytelling?',
    email: 'hello@multimuse.com',
  },
  {
    icon: Mail,
    title: 'General Inquiries',
    desc: 'Everything else — we read every email.',
    email: 'hello@multimuse.com',
  },
]

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="hero-bg relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-1/3 right-1/3 w-80 h-80 rounded-full bg-blue-600/7 blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-5 pt-16 pb-14">
          <p className="text-violet-400 text-xs font-semibold uppercase tracking-widest mb-5">
            Get in Touch
          </p>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Contact</h1>
          <p className="text-white/45 max-w-lg leading-relaxed">
            Whether you&apos;re a creator, journalist, investor, or just curious — we want to hear
            from you.
          </p>
        </div>
      </section>

      {/* Contact options */}
      <section className="max-w-4xl mx-auto px-5 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14">
          {reasons.map(({ icon: Icon, title, desc, email }) => (
            <a
              key={title}
              href={`mailto:${email}?subject=${encodeURIComponent(title)}`}
              className="group rounded-2xl glow-border bg-[#0f0f1a] p-7 hover:border-violet-500/40 transition-all card-hover block"
            >
              <div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center text-violet-400 mb-5 group-hover:bg-violet-500/20 transition-colors">
                <Icon size={18} />
              </div>
              <h2 className="text-white font-bold text-lg mb-2 group-hover:text-violet-200 transition-colors">
                {title}
              </h2>
              <p className="text-white/45 text-sm leading-relaxed mb-4">{desc}</p>
              <span className="text-violet-400 text-sm font-medium">{email}</span>
            </a>
          ))}
        </div>

        {/* Simple contact note */}
        <div className="rounded-2xl border border-white/6 bg-[#0f0f1a] p-8 text-center">
          <h3 className="text-white font-bold text-xl mb-3">
            The fastest way to reach us
          </h3>
          <p className="text-white/45 text-sm mb-5 max-w-sm mx-auto">
            Email us directly at{' '}
            <a
              href="mailto:hello@multimuse.com"
              className="text-violet-400 hover:text-violet-300 underline underline-offset-2"
            >
              hello@multimuse.com
            </a>
            . We read and respond to every message.
          </p>
          <p className="text-white/25 text-xs">
            For urgent press inquiries, please include &ldquo;PRESS&rdquo; in the subject line.
          </p>
        </div>
      </section>
    </>
  )
}
