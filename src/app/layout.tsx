import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://crowddirecting.com'),
  alternates: { canonical: '/' },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: '/apple-touch-icon.png',
  },
  title: {
    default: 'CrowdDirecting — Where Audiences Help Direct What Happens Next',
    template: '%s | CrowdDirecting',
  },
  description:
    'CrowdDirecting is a new creative format where audiences don\'t just consume — they help direct what happens next. Ideas, creator stories, and culture — a publication by MultiMuse.',
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
    title: 'CrowdDirecting — Where Audiences Help Direct What Happens Next',
    description:
      'CrowdDirecting is a new creative format where audiences don\'t just consume — they help direct what happens next. Ideas, creator stories, and culture — a publication by MultiMuse.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CrowdDirecting — Where Audiences Help Direct What Happens Next',
    description:
      'CrowdDirecting is a new creative format where audiences don\'t just consume — they help direct what happens next. Ideas, creator stories, and culture — a publication by MultiMuse.',
  },
}

// Structured data (JSON-LD) — identifies CrowdDirecting as a MultiMuse
// publication so Google and AI assistants connect the two brands as one entity.
const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://multimuse.com/#organization',
  name: 'MultiMuse',
  legalName: 'MultiMuse Media',
  url: 'https://multimuse.com/',
  email: 'hello@multimuse.com',
  sameAs: ['https://crowddirecting.com/'],
}

const webSiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://crowddirecting.com/#website',
  name: 'CrowdDirecting',
  url: 'https://crowddirecting.com/',
  description:
    'CrowdDirecting is a new creative format where audiences don’t just consume — they help direct what happens next. A publication by MultiMuse.',
  publisher: { '@id': 'https://multimuse.com/#organization' },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, '\\u003c'),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(webSiteJsonLd).replace(/</g, '\\u003c'),
          }}
        />
        <Nav />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
