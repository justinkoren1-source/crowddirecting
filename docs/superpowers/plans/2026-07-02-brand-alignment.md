# CrowdDirecting Blog Brand Alignment Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Align crowddirecting.com with the locked MultiMuse brand — Clash Display + Plus Jakarta Sans fonts, gradient `#315BFF → #7B2CFF → #F037FF`, canonical CrowdDirecting copy — on branch `brand-alignment`, production untouched.

**Architecture:** No structural changes. Three passes over the existing Next.js app: (1) brand tokens in `globals.css` + fonts in `layout.tsx`, (2) copy corrections (home hero, About, verb sweep), (3) mechanical color sweep `#2D59EC`-family → new palette across components and OG images.

**Tech Stack:** Existing app — Next.js 16 App Router, Tailwind v4, TypeScript.

## Global Constraints

- Repo: `~/projects/crowddirecting`, branch `brand-alignment` off `main`. **Never commit to `main`.**
- Spec: `~/projects/multimuse-landing-page/docs/superpowers/specs/2026-07-02-brand-alignment-rebuild-design.md` §2 (copy) and §4 (blog).
- Old accent `#2D59EC` → new blue `#315BFF`; old gradient `#2D59EC → #7c3aed → #a855f7 → #ec4899` → locked `#315BFF 0%, #7B2CFF 50%, #F037FF 100%` (135deg).
- Fonts: Clash Display for headings (`.font-display` utility / heading defaults), Plus Jakarta Sans for body. Same `<link>` sources as landing page (Fontshare + Google Fonts). Remove Geist.
- Banned copy: "future of storytelling", "help guide", any "future of X".
- Canonical strings (verbatim, from spec §2):
  - Definition: `CrowdDirecting is a new creative format where audiences don't just consume — they help direct what happens next.`
  - Hook: `This isn't social media — this is CrowdDirecting.`
  - Reassurance: `The creator remains the director — the crowd becomes part of the creative energy.`
  - Muse line: `You post a Muse — your audience CrowdDirects it.`
- Verification per task = `npm run build` passes (repo has no test framework).
- Heed `AGENTS.md`: this Next.js version has breaking changes — check `node_modules/next/dist/docs/` if any API looks unfamiliar.

---

### Task 1: Branch + fonts + brand tokens

**Files:**
- Modify: `src/app/layout.tsx` (font swap), `src/app/globals.css` (tokens, gradients)

**Interfaces:**
- Produces: CSS vars `--mm-blue: #315bff`, `--mm-purple: #7b2cff`, `--mm-pink: #f037ff`; updated `.gradient-text`; `.font-display` utility. Headings site-wide inherit Clash Display via a `h1,h2,h3` rule.

- [ ] **Step 1: Create branch**

Run: `cd ~/projects/crowddirecting && git checkout main && git pull && git checkout -b brand-alignment`
Expected: `Switched to a new branch 'brand-alignment'`

- [ ] **Step 2: Swap fonts in `src/app/layout.tsx`** — remove the Geist `next/font` import and its className usage; add inside `<html>` a `<head>` block with the two font `<link>`s (same hrefs as Global Constraints; include the two `preconnect` links for Google Fonts). Body keeps `antialiased`.

- [ ] **Step 3: Update `src/app/globals.css`** — add at top after the Tailwind import:

```css
:root {
  --mm-blue: #315bff;
  --mm-purple: #7b2cff;
  --mm-pink: #f037ff;
}

body {
  font-family: 'Plus Jakarta Sans', ui-sans-serif, system-ui, sans-serif;
}

h1, h2, h3, .font-display {
  font-family: 'Clash Display', 'Plus Jakarta Sans', sans-serif;
}
```

Then replace every gradient/color occurrence in this file:
- `.gradient-text` background → `linear-gradient(135deg, #315bff 0%, #7b2cff 50%, #f037ff 100%)`
- every `rgba(45, 89, 236, X)` → `rgba(49, 91, 255, X)` (`.hero-bg`, `.glow-border`, `.card-hover`)
- `.article-prose blockquote` border → `#7b2cff`

- [ ] **Step 4: Build** — `npm run build` → PASS. Visual check via dev server: headings render in Clash Display (inspect `font-family`).

- [ ] **Step 5: Commit** — `git add -A && git commit -m "feat: locked brand fonts and gradient tokens"`

---

### Task 2: Copy corrections (hero, About, verb sweep)

**Files:**
- Modify: `src/app/page.tsx`, `src/app/about/page.tsx`, `src/lib/posts.ts` (only if it contains banned phrases), `src/app/layout.tsx` (site metadata description)

**Interfaces:**
- Consumes: `.gradient-text` from Task 1.

- [ ] **Step 1: Home hero (`src/app/page.tsx`)** — replace the `<h1>` block and sub-paragraph:

```tsx
<h1 className="text-5xl md:text-7xl lg:text-[80px] font-semibold leading-[0.98] tracking-tight mb-7 max-w-4xl">
  <span className="text-gray-900">This isn&apos;t social media.</span>
  <br />
  <span className="text-gray-900">This is </span>
  <span className="gradient-text">CrowdDirecting</span>
  <span className="text-gray-900">.</span>
</h1>

<p className="text-gray-500 text-lg leading-relaxed max-w-xl mb-10">
  A new creative format where audiences don&apos;t just consume — they help direct what
  happens next. Ideas, creator stories, and the culture forming around MultiMuse.
</p>
```

- [ ] **Step 2: Explainer cards (`src/app/page.tsx`)** — in the "What is CrowdDirecting?" cards array, update card 1 text to `Fans vote, react, and help direct creative choices in real time.` (help influence → help direct). Cards 2–3 unchanged.

- [ ] **Step 3: About page (`src/app/about/page.tsx`)**
  - Hero sub-paragraph → the canonical definition (verbatim, with `&apos;`/`&mdash;` as needed):
    `CrowdDirecting is a new creative format where audiences don't just consume — they help direct what happens next.`
  - `metadata.description` → same sentence.
  - In the core-definition prose, sentence `Audiences vote, react, and help influence creative choices in real time.` → `Audiences vote, react, and help direct creative choices in real time.`
  - After the existing blockquote, append two paragraphs:

```tsx
<p>
  On MultiMuse it works like this: <strong className="text-gray-900">you post a Muse — your
  audience CrowdDirects it</strong>. A Muse is an interactive, bite-sized prompt: a decision
  to influence, a challenge to join, a moment to shape.
</p>
<p>
  Most platforms are a stage — MultiMuse is a studio. CrowdDirecting is what gets built there.
</p>
```

- [ ] **Step 4: Site-wide banned-phrase sweep**

Run: `grep -rn "help guide\|future of storytelling\|help influence" src/`
Fix every hit (article body text in `src/lib/posts.ts` counts — update "help guide/influence" verbs there too, but do NOT otherwise rewrite the article). Re-run grep → zero hits.
Check `src/app/layout.tsx` root metadata description for banned phrasing; if present, replace with the canonical definition sentence.

- [ ] **Step 5: Build** — `npm run build` → PASS.

- [ ] **Step 6: Commit** — `git add -A && git commit -m "feat: canonical CrowdDirecting copy — hero, about, verb sweep"`

---

### Task 3: Color sweep + OG images + verification

**Files:**
- Modify (mechanical `#2D59EC` → `#315BFF`, old gradient stops → locked stops): `src/components/Nav.tsx`, `src/components/Footer.tsx`, `src/components/PostCard.tsx`, `src/components/NewsletterForm.tsx`, `src/app/page.tsx`, `src/app/about/page.tsx`, `src/app/articles/page.tsx`, `src/app/articles/[slug]/page.tsx`, `src/app/announcements/page.tsx`, `src/app/creator-stories/page.tsx`, `src/app/contact/page.tsx`, `src/app/not-found.tsx`, `src/app/opengraph-image.tsx`, `src/app/articles/[slug]/opengraph-image.tsx`, `src/lib/posts.ts` (gradientMap if it references old hexes)

**Interfaces:** none new.

- [ ] **Step 1: Mechanical sweep**

```bash
grep -rln '2D59EC\|2d59ec' src/ | xargs sed -i '' 's/2D59EC/315BFF/g; s/2d59ec/315bff/g'
grep -rln '7c3aed' src/ | xargs sed -i '' 's/7c3aed/7B2CFF/g'
```

Then hand-fix gradients that list 3–4 stops (`from-[#315BFF] to-[#7B2CFF]` Tailwind pairs are fine as-is; CSS `linear-gradient(...)` strings in the two `opengraph-image.tsx` files must become `#315BFF 0%, #7B2CFF 50%, #F037FF 100%`; drop `#a855f7`/`#ec4899` stops everywhere).

Run: `grep -rn 'a855f7\|ec4899\|2D59EC\|2d59ec\|7c3aed' src/` → only hits allowed are decorative orb colors if intentionally kept; default is zero hits.

- [ ] **Step 2: OG image copy** — in `src/app/opengraph-image.tsx`, tagline under "CrowdDirecting" → `Audiences don't just consume — they help direct what happens next.` and `alt` stays. Article OG (`articles/[slug]/opengraph-image.tsx`) needs no copy change.

- [ ] **Step 3: Build** — `npm run build` → PASS.

- [ ] **Step 4: Browser verification** — `preview_start`; then:
  - `preview_snapshot` home: new hero strings exact; About: definition + Muse paragraphs present
  - `preview_inspect` on `h1`: `font-family` starts with `Clash Display`; on `.gradient-text`: background-image contains `49, 91, 255` or `#315bff`
  - `preview_console_logs` level=error: none
  - `preview_resize` mobile: hero wraps cleanly (the two-line hook is longer than the old headline — if it overflows at 375px, reduce mobile size to `text-4xl`)
  - `preview_screenshot` home + About for the review message

- [ ] **Step 5: Commit + push** — `git add -A && git commit -m "feat: locked palette sweep and OG alignment" && git push -u origin brand-alignment` → Vercel preview URL. **Do not merge.** Report preview URL + screenshots to Justin.

---

### Post-approval follow-ups (not part of this plan's execution)

After Justin approves BOTH previews and merges happen: update `~/Documents/Obsidian Vault/MultiMuse Design System.md` §1 (canonical definition), §8 (copy library additions: reassurance line, blog hero), §9 (mark continuity fixes done); update memory files. These are recorded in the spec §5.
