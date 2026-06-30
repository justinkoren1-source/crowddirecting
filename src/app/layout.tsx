import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const geist = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://crowddirecting.com'),
  title: {
    default: 'CrowdDirecting — The Future of Audience-Powered Storytelling',
    template: '%s | CrowdDirecting',
  },
  description:
    'CrowdDirecting is a new creative format where audiences help shape what happens next. Explore ideas, creator stories, and the movement behind MultiMuse.',
  keywords: [
    'CrowdDirecting',
    'interactive storytelling',
    'audience participation',
    'MultiMuse',
    'creator economy',
    'interactive entertainment',
  ],
  openGraph: {
    type: 'website',
    siteName: 'CrowdDirecting',
    title: 'CrowdDirecting — The Future of Audience-Powered Storytelling',
    description:
      'Explore the ideas, announcements, and creator stories behind CrowdDirecting — the new creative format where audiences help shape what happens next.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CrowdDirecting — The Future of Audience-Powered Storytelling',
    description:
      'A new creative format where audiences help shape what happens next. A MultiMuse publication.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-[#050508] text-white antialiased">
        <Nav />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
