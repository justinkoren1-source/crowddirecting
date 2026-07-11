import Link from 'next/link'
import Image from 'next/image'
import SocialLinks from './SocialLinks'

const footerLinks = [
  { href: '/', label: 'Home' },
  { href: '/articles', label: 'Articles' },
  { href: '/announcements', label: 'Announcements' },
  { href: '/about', label: 'About CrowdDirecting' },
  { href: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="border-t border-black/6 bg-white mt-24">
      <div className="max-w-7xl mx-auto px-5 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <p className="gradient-text font-bold text-lg mb-1">CrowdDirecting</p>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-gray-400 text-xs">A publication by</span>
              <Image
                src="/multimuse-wordmark-blue.svg"
                alt="MultiMuse"
                width={68}
                height={17}
                className="opacity-40"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              The editorial home for audience-powered storytelling — ideas, creator stories,
              and cultural commentary on CrowdDirecting.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-gray-400 text-xs font-semibold uppercase tracking-widest mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
              {footerLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-gray-400 text-sm hover:text-gray-700 transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-gray-400 text-xs font-semibold uppercase tracking-widest mb-4">
              Connect
            </h4>
            <a
              href="https://multimuse.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 text-sm hover:text-gray-700 transition-colors"
            >
              Visit MultiMuse
            </a>
            <SocialLinks className="mt-4" />
          </div>
        </div>

        <div className="border-t border-black/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-gray-300 text-xs">
            © {new Date().getFullYear()} CrowdDirecting.com — A MultiMuse Publication.
          </p>
          <p className="text-gray-300 text-xs">hello@multimuse.com</p>
        </div>
      </div>
    </footer>
  )
}
