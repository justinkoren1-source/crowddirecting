'use client'

import { useState } from 'react'
import { Mail, ArrowRight } from 'lucide-react'

export default function NewsletterForm({ compact = false }: { compact?: boolean }) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'success'>('idle')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setStatus('success')
    setEmail('')
  }

  if (status === 'success') {
    return (
      <div className="flex items-center gap-3 text-[#315bff]">
        <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center">
          <Mail size={16} />
        </div>
        <p className="text-sm font-medium">You&apos;re on the list. We&apos;ll be in touch.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={`flex gap-2 ${compact ? 'flex-row' : 'flex-col sm:flex-row'}`}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        required
        className="flex-1 bg-white border border-black/10 rounded-xl px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#315bff]/40 focus:ring-2 focus:ring-[#315bff]/10 transition-all"
      />
      <button
        type="submit"
        className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#315bff] to-[#7b2cff] text-white text-sm font-semibold hover:opacity-90 transition-opacity whitespace-nowrap"
      >
        Subscribe
        <ArrowRight size={14} />
      </button>
    </form>
  )
}
