import { ImageResponse } from 'next/og'
import { getPostBySlug } from '@/lib/posts'

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

type Props = { params: Promise<{ slug: string }> }

export default async function Image({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  const title = post?.title ?? 'CrowdDirecting'
  const category = post?.category ?? 'MultiMuse'

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: 'linear-gradient(135deg, #08112f 0%, #2D59EC 46%, #7c3aed 78%, #ec4899 100%)',
          color: 'white',
          padding: 72,
          fontFamily: 'Inter, Arial, sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            right: -120,
            top: -160,
            width: 520,
            height: 520,
            borderRadius: 520,
            background: 'rgba(255, 255, 255, 0.16)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            left: -160,
            bottom: -220,
            width: 620,
            height: 620,
            borderRadius: 620,
            background: 'rgba(255, 255, 255, 0.1)',
          }}
        />

        <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          <div
            style={{
              width: 58,
              height: 58,
              borderRadius: 18,
              background: 'rgba(255, 255, 255, 0.18)',
              border: '1px solid rgba(255, 255, 255, 0.24)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 30,
              fontWeight: 900,
            }}
          >
            M
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: 35, fontWeight: 900, letterSpacing: 0 }}>MultiMuse</div>
            <div style={{ fontSize: 20, opacity: 0.78 }}>CrowdDirecting</div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 26, maxWidth: 940 }}>
          <div
            style={{
              display: 'flex',
              width: 'auto',
              padding: '10px 18px',
              borderRadius: 999,
              background: 'rgba(255, 255, 255, 0.18)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              fontSize: 22,
              fontWeight: 700,
            }}
          >
            {category}
          </div>
          <div style={{ fontSize: 68, lineHeight: 0.94, fontWeight: 950, letterSpacing: -1 }}>
            {title}
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: 24, opacity: 0.78 }}>Audience-powered storytelling</div>
          <div style={{ fontSize: 24, fontWeight: 800 }}>crowddirecting.com</div>
        </div>
      </div>
    ),
    size
  )
}
