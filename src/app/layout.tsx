import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

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
    <html lang="en" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@200,300,400,500,600,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#050508] text-white antialiased">
        <Nav />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
