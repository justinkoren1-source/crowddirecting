import Link from 'next/link'

const footerLinks = [
  { href: '/', label: 'Home' },
  { href: '/articles', label: 'Articles' },
  { href: '/announcements', label: 'Announcements' },
  { href: '/about', label: 'About CrowdDirecting' },
  { href: '/creator-stories', label: 'Creator Stories' },
  { href: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#050508] mt-24">
      <div className="max-w-7xl mx-auto px-5 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-pink-600 flex items-center justify-center text-white font-black text-xs">
                CD
              </div>
              <span className="font-bold text-base gradient-text">CrowdDirecting</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              The editorial home for audience-powered storytelling. A MultiMuse publication.
            </p>
            <p className="text-white/25 text-xs mt-4">Powered by MultiMuse</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
              {footerLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-white/40 text-sm hover:text-white/70 transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social / External */}
          <div>
            <h4 className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-4">
              Connect
            </h4>
            <ul className="space-y-2">
              {[
                { label: 'Visit MultiMuse', href: 'https://multimuse.com' },
                { label: 'Twitter / X', href: '#' },
                { label: 'Instagram', href: '#' },
                { label: 'TikTok', href: '#' },
                { label: 'YouTube', href: '#' },
              ].map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target={s.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="text-white/40 text-sm hover:text-white/70 transition-colors"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/25 text-xs">
            © {new Date().getFullYear()} CrowdDirecting.com — A MultiMuse Publication. All rights reserved.
          </p>
          <p className="text-white/20 text-xs">
            hello@multimuse.com
          </p>
        </div>
      </div>
    </footer>
  )
}
