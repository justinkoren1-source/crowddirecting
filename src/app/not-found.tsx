import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-5 text-center">
      <p className="gradient-text font-black text-8xl mb-4">404</p>
      <h1 className="text-gray-900 text-2xl font-bold mb-3">Page not found</h1>
      <p className="text-gray-500 mb-8 max-w-sm">
        This page doesn&apos;t exist — but there&apos;s plenty more to explore.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#315bff] to-[#7b2cff] text-white font-semibold text-sm"
      >
        <ArrowLeft size={14} />
        Back to Home
      </Link>
    </div>
  )
}
