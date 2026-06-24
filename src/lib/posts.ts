export type Post = {
  slug: string
  title: string
  excerpt: string
  category: string
  author: string
  date: string
  readTime: string
  featured: boolean
  image: string // gradient class or placeholder key
  body?: string
}

export const categories = [
  'Announcements',
  'Product Updates',
  'Creator Stories',
  'Culture',
  'Behind the Scenes',
  'CrowdDirecting 101',
  'Case Studies',
  'Press',
]

export const posts: Post[] = [
  {
    slug: 'why-crowddirecting-changes-the-relationship',
    title: 'Why CrowdDirecting Changes the Relationship Between Creators and Audiences',
    excerpt:
      'For decades, audiences watched from the sidelines. CrowdDirecting turns attention into participation — giving fans a real role in shaping creative decisions.',
    category: 'CrowdDirecting 101',
    author: 'The MultiMuse Team',
    date: 'June 20, 2026',
    readTime: '6 min read',
    featured: true,
    image: 'purple-blue',
    body: `
<p>There is a moment in every piece of content — a film, a series, a music video, an essay — where the creator makes a choice. A character turns left or right. A song goes soft or loud. An ending resolves or stays open.</p>

<p>For as long as storytelling has existed, that moment has belonged exclusively to the creator. The audience could react. They could love it or hate it. But they could not shape it.</p>

<p><strong>CrowdDirecting changes that moment.</strong></p>

<h2>From Broadcast to Dialogue</h2>

<p>We've been living in the broadcast era of content. Even as social media made creators more accessible, the fundamental relationship remained one-directional. You watch. You react. The creator moves on.</p>

<p>What MultiMuse is building — and what CrowdDirecting describes — is something fundamentally different. A feedback loop where audience participation isn't just tolerated, it's baked into the creative process itself.</p>

<blockquote>"The creator remains the director. But the crowd becomes part of the creative energy."</blockquote>

<p>This isn't about relinquishing control. A great director doesn't take orders from the audience. They listen, they feel the energy of a room, they read what resonates. CrowdDirecting gives creators a new instrument for doing that — at scale, in real time, with data that actually means something.</p>

<h2>Why Now?</h2>

<p>Three things converged to make this possible:</p>

<ul>
<li>Audiences are more participatory than ever — they expect to be part of the conversation</li>
<li>Creator tools have matured to the point where rapid iteration is possible</li>
<li>Social platforms have proven that engagement is a core human behavior, not a feature</li>
</ul>

<p>The creator economy proved that people want to support creators directly. CrowdDirecting goes one step further: people want to <em>participate</em> in the creative work itself.</p>

<h2>What This Means for the Future</h2>

<p>We're at the beginning of a new creative format. CrowdDirecting won't replace traditional content. But it will create a new category of entertainment — one where the line between creator and audience is deliberately blurred.</p>

<p>The creators who embrace this earliest will build something no algorithm can replicate: genuine co-ownership between themselves and their communities.</p>

<p>That's not a feature. That's a new kind of relationship.</p>
    `,
  },
  {
    slug: 'next-era-wont-be-scrolled-it-will-be-shaped',
    title: 'The Next Era Won\'t Be Scrolled — It Will Be Shaped',
    excerpt:
      'Scrolling is passive. The next generation of entertainment demands something more: active participation in the stories we love.',
    category: 'Culture',
    author: 'MultiMuse Editorial',
    date: 'June 18, 2026',
    readTime: '5 min read',
    featured: false,
    image: 'violet-pink',
    body: `
<p>Every major shift in entertainment has changed what the audience does with their hands.</p>

<p>Radio required you to gather. Television required you to sit. The internet required you to click. Social media required you to scroll.</p>

<p>The next era requires you to shape.</p>

<h2>The Attention Economy Is Running Out of Attention</h2>

<p>Platforms built on scrolling are facing a reckoning. When everything competes for a finite resource — human attention — the result is an escalating arms race for stimulation. Shorter clips. Louder hooks. More outrage. More noise.</p>

<p>CrowdDirecting offers a different path. Not less engagement, but deeper engagement. Not more content, but more meaningful participation in the content that already matters to people.</p>

<blockquote>"When you vote on what happens next, you don't just watch — you care."</blockquote>

<h2>Participation Changes the Experience</h2>

<p>There's a reason sports fans feel more alive in the stadium than on the couch. Participation — even the feeling of participation — transforms consumption into investment.</p>

<p>CrowdDirecting brings that energy to every creative format. The audience isn't just watching the story unfold. They're part of why it unfolded that way.</p>

<p>This changes what it means to be a fan. And it changes what it means to be a creator.</p>
    `,
  },
  {
    slug: 'from-passive-fans-to-creative-collaborators',
    title: 'From Passive Fans to Creative Collaborators',
    excerpt:
      'The most loyal communities are built not through consumption, but through creation. Here\'s how CrowdDirecting transforms fandom.',
    category: 'Creator Stories',
    author: 'MultiMuse Editorial',
    date: 'June 15, 2026',
    readTime: '4 min read',
    featured: false,
    image: 'blue-purple',
    body: `
<p>Fan communities have always been more than audiences. They write fan fiction. They create art. They theorize, debate, and imagine alternatives. The passion was always there. CrowdDirecting gives it a channel.</p>

<h2>The Collaboration Instinct</h2>

<p>Humans are fundamentally collaborative. We built civilization through shared effort. The entertainment industry spent a century building systems that made audiences passive recipients. But the instinct to participate never went away.</p>

<p>What changes when you give fans a real voice? Everything.</p>

<ul>
<li>Retention increases because fans are invested in outcomes they helped shape</li>
<li>Communities grow because shared decisions become shared stories</li>
<li>Creators get real signal — not just likes, but actual choices</li>
</ul>

<blockquote>"A vote isn't just data. It's a declaration: I care about this."</blockquote>
    `,
  },
  {
    slug: 'how-multimuse-turns-voting-into-storytelling',
    title: 'How MultiMuse Turns Voting Into Storytelling',
    excerpt:
      'A deep look at the mechanics behind CrowdDirecting — and why the vote itself is part of the narrative.',
    category: 'Product Updates',
    author: 'The MultiMuse Team',
    date: 'June 12, 2026',
    readTime: '7 min read',
    featured: false,
    image: 'pink-violet',
    body: `
<p>At first glance, it might seem simple: give the audience a choice, let them vote, reveal the result. But what MultiMuse has built goes much deeper than a poll.</p>

<h2>The Vote as Story Beat</h2>

<p>In traditional storytelling, a story beat is a meaningful unit of change. Something happens that shifts the state of the narrative. In CrowdDirecting, the vote itself is a story beat.</p>

<p>When an audience sees that 73% of viewers chose Option A, that number becomes part of the shared experience. The reveal is drama. The disagreement is texture. The result is canon.</p>

<blockquote>"The moment of the vote is as cinematic as anything that comes before or after it."</blockquote>

<h2>Creator Control</h2>

<p>Creators on MultiMuse decide what gets voted on, when it gets revealed, and how it shapes the content. The platform is built to preserve creative authority while opening a genuine channel for audience input.</p>

<p>This is the key distinction between CrowdDirecting and chaos. Structure enables freedom. The creator's vision remains the throughline — the audience shapes the texture.</p>
    `,
  },
  {
    slug: 'why-creators-need-better-feedback-loops',
    title: 'Why Creators Need Better Feedback Loops',
    excerpt:
      'Likes and view counts tell creators almost nothing. The future of creator tools is real signal from real audiences.',
    category: 'Culture',
    author: 'MultiMuse Editorial',
    date: 'June 8, 2026',
    readTime: '5 min read',
    featured: false,
    image: 'purple-blue',
    body: `
<p>Ask any creator what they actually want from their audience and they'll give you the same answer: honest feedback. What's working? What isn't? What do people actually care about?</p>

<p>Social media platforms have built enormous infrastructure to capture audience behavior. But almost none of it tells creators what they actually need to know.</p>

<h2>The Signal Problem</h2>

<p>Views tell you how many people started watching. Watch time tells you roughly how many stayed. Comments tell you what the most opinionated fraction of your audience thinks.</p>

<p>None of these tell you what your audience wanted to happen next.</p>

<p>CrowdDirecting creates a new category of signal: intentional input. When an audience member votes on a creative decision, they're communicating something no like or comment can capture — they're revealing what they care about.</p>

<blockquote>"Passive metrics describe what happened. Active votes reveal what matters."</blockquote>
    `,
  },
  {
    slug: 'rise-of-interactive-entertainment',
    title: 'The Rise of Interactive Entertainment',
    excerpt:
      'From choose-your-own-adventure books to Black Mirror: Bandersnatch — the history of interactive storytelling, and where CrowdDirecting fits.',
    category: 'CrowdDirecting 101',
    author: 'MultiMuse Editorial',
    date: 'June 5, 2026',
    readTime: '8 min read',
    featured: false,
    image: 'blue-pink',
    body: `
<p>Interactive storytelling is not new. Choose-your-own-adventure books gave readers agency in the 1970s. Video games built entire industries on it. Black Mirror: Bandersnatch proved Netflix audiences would engage with branching narrative.</p>

<p>But all of these are single-player experiences. One person, one set of choices, one path through the story.</p>

<h2>The Crowd Changes Everything</h2>

<p>CrowdDirecting is something different: collective interactive storytelling. Not one person choosing a path, but thousands of people shaping what happens next — together.</p>

<p>This creates dynamics that don't exist in any other format:</p>

<ul>
<li>The majority decision becomes the story, but the minority's preference creates tension</li>
<li>Communities form around shared decisions and outcomes</li>
<li>The act of voting becomes a social ritual</li>
</ul>

<blockquote>"It's not your story. It's not the creator's story. It's the community's story."</blockquote>

<h2>What CrowdDirecting Adds</h2>

<p>Where traditional interactive fiction isolates the player in their own path, CrowdDirecting creates shared narrative. Where algorithms decide what you see next, CrowdDirecting gives that power to the audience. Where engagement is measured in passive metrics, CrowdDirecting creates active participation.</p>

<p>This is the next evolution of interactive entertainment. And it's just beginning.</p>
    `,
  },
  {
    slug: 'building-the-first-crowddirecting-platform',
    title: 'Building the First CrowdDirecting Platform',
    excerpt:
      'A behind-the-scenes look at the vision, decisions, and design principles behind MultiMuse — and the new creative category it\'s defining.',
    category: 'Behind the Scenes',
    author: 'The MultiMuse Team',
    date: 'June 1, 2026',
    readTime: '6 min read',
    featured: false,
    image: 'violet-blue',
    body: `
<p>When we started building MultiMuse, we didn't have a name for what we were making. We knew what we wanted to feel: the energy of a live audience, the intimacy of a creator community, the structure of a narrative format, the feedback loop of a real-time platform.</p>

<p>CrowdDirecting is the word we landed on. And it's more than a product name — it's the description of a behavior that's always existed, just without a home.</p>

<h2>The Design Principles</h2>

<p>Every decision in MultiMuse comes back to three principles:</p>

<ul>
<li><strong>Creator control is sacred.</strong> The platform amplifies creative authority, never undermines it.</li>
<li><strong>Audience participation is meaningful.</strong> Every vote, signal, and reaction creates real impact on real content.</li>
<li><strong>The format is the feature.</strong> CrowdDirecting isn't a gimmick — it's a native creative behavior that changes what content can be.</li>
</ul>

<blockquote>"We're not building a better comment section. We're building a new creative format."</blockquote>

<h2>What Comes Next</h2>

<p>We're still early. The category of CrowdDirecting is new, and the creators who join first are defining what it means. Their experiments, their communities, their creative decisions will shape this platform more than any roadmap we could write.</p>

<p>That's not a bug. That's the whole point.</p>
    `,
  },
]

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug)
}

export function getFeaturedPost(): Post {
  return posts.find((p) => p.featured) ?? posts[0]
}

export function getLatestPosts(count?: number): Post[] {
  const nonFeatured = posts.filter((p) => !p.featured)
  return count ? nonFeatured.slice(0, count) : nonFeatured
}

export function getPostsByCategory(category: string): Post[] {
  return posts.filter((p) => p.category === category)
}

export const gradientMap: Record<string, string> = {
  'purple-blue': 'from-purple-900/50 via-blue-900/30 to-violet-900/40',
  'violet-pink': 'from-violet-900/50 via-purple-800/30 to-pink-900/40',
  'blue-purple': 'from-blue-900/50 via-violet-900/30 to-purple-900/40',
  'pink-violet': 'from-pink-900/40 via-violet-900/30 to-purple-900/50',
  'blue-pink': 'from-blue-900/40 via-purple-900/30 to-pink-900/40',
  'violet-blue': 'from-violet-900/50 via-blue-900/30 to-indigo-900/40',
}
