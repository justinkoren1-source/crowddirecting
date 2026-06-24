'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '/articles', label: 'Articles' },
  { href: '/announcements', label: 'Announcements' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-nav border-b border-white/5">
      <div className="max-w-7xl mx-auto px-5 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <span className="font-bold text-[15px] tracking-tight gradient-text">
            CrowdDirecting
          </span>
          <span className="text-white/20 text-xs hidden sm:block">by</span>
          {/* MultiMuse wordmark */}
          <Image
            src="/multimuse-wordmark-white.svg"
            alt="MultiMuse"
            width={72}
            height={18}
            className="opacity-30 group-hover:opacity-50 transition-opacity hidden sm:block"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-white/55 hover:text-white transition-colors duration-200"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://multimuse.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm px-4 py-1.5 rounded-full bg-gradient-to-r from-[#2D59EC] to-[#7c3aed] text-white font-semibold hover:opacity-90 transition-opacity"
          >
            Visit MultiMuse
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white/70 hover:text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden glass-nav border-t border-white/5 px-5 py-4 flex flex-col gap-3">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm text-white/70 hover:text-white transition-colors py-1"
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://multimuse.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 text-sm px-4 py-2 rounded-full bg-gradient-to-r from-[#2D59EC] to-[#7c3aed] text-white font-semibold text-center"
          >
            Visit MultiMuse
          </a>
        </div>
      )}
    </header>
  )
}
