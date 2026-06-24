import Link from 'next/link'
import { Post, gradientMap } from '@/lib/posts'
import { Clock, ArrowRight } from 'lucide-react'

export default function PostCard({ post }: { post: Post }) {
  const gradient = gradientMap[post.image] ?? 'from-violet-900/50 to-purple-900/40'

  return (
    <Link
      href={`/articles/${post.slug}`}
      className="group block rounded-2xl overflow-hidden glow-border card-hover bg-[#0f0f1a]"
    >
      {/* Thumbnail */}
      <div
        className={`h-44 bg-gradient-to-br ${gradient} relative flex items-end p-4`}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f1a]/80 to-transparent" />
        <span className="relative z-10 text-xs font-semibold px-2.5 py-1 rounded-full bg-white/10 text-white/80 backdrop-blur-sm">
          {post.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-white font-bold text-base leading-snug mb-2 group-hover:text-violet-300 transition-colors line-clamp-2">
          {post.title}
        </h3>
        <p className="text-white/50 text-sm leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>
        <div className="flex items-center justify-between text-white/30 text-xs">
          <div className="flex items-center gap-1.5">
            <Clock size={12} />
            <span>{post.readTime}</span>
          </div>
          <div className="flex items-center gap-1 text-violet-400 group-hover:gap-2 transition-all">
            <span className="text-xs font-medium">Read</span>
            <ArrowRight size={12} />
          </div>
        </div>
      </div>
    </Link>
  )
}
