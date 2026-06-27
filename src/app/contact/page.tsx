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
    desc: "Covering CrowdDirecting or the creator economy? We'd love to connect.",
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
        <div className="relative max-w-7xl mx-auto px-5 pt-16 pb-14">
          <p className="text-[#2D59EC] text-xs font-semibold uppercase tracking-widest mb-5">
            Get in Touch
          </p>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Contact</h1>
          <p className="text-gray-500 max-w-lg leading-relaxed">
            Whether you&apos;re a creator, journalist, investor, or just curious — we want to
            hear from you.
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
              className="group rounded-2xl border border-black/6 bg-white p-7 hover:border-blue-200 hover:shadow-sm transition-all card-hover block"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-[#2D59EC] mb-5 group-hover:bg-blue-100 transition-colors">
                <Icon size={18} />
              </div>
              <h2 className="text-gray-900 font-bold text-lg mb-2 group-hover:text-[#2D59EC] transition-colors">
                {title}
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{desc}</p>
              <span className="text-[#2D59EC] text-sm font-medium">{email}</span>
            </a>
          ))}
        </div>

        <div className="rounded-2xl border border-black/6 bg-white p-8 text-center">
          <h3 className="text-gray-900 font-bold text-xl mb-3">The fastest way to reach us</h3>
          <p className="text-gray-500 text-sm mb-5 max-w-sm mx-auto">
            Email us directly at{' '}
            <a
              href="mailto:hello@multimuse.com"
              className="text-[#2D59EC] hover:opacity-80 underline underline-offset-2"
            >
              hello@multimuse.com
            </a>
            . We read and respond to every message.
          </p>
          <p className="text-gray-400 text-xs">
            For urgent press inquiries, include &ldquo;PRESS&rdquo; in the subject line.
          </p>
        </div>
      </section>
    </>
  )
}
