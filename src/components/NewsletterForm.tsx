'use client'

import { useState } from 'react'
import { Mail, ArrowRight } from 'lucide-react'

export default function NewsletterForm({ compact = false }: { compact?: boolean }) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    // Placeholder — wire to Mailchimp or similar
    setStatus('success')
    setEmail('')
  }

  if (status === 'success') {
    return (
      <div className="flex items-center gap-3 text-violet-400">
        <div className="w-8 h-8 rounded-full bg-violet-500/20 flex items-center justify-center">
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
        className={`flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-violet-500/50 focus:bg-white/8 transition-all ${compact ? '' : ''}`}
      />
      <button
        type="submit"
        className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-pink-600 text-white text-sm font-semibold hover:opacity-90 transition-opacity whitespace-nowrap"
      >
        Subscribe
        <ArrowRight size={14} />
      </button>
    </form>
  )
}
