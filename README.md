# Motiva Studio — استودیو موتیوا

A modern, animation-rich, **bilingual (Persian-first / English)** marketing website for a video advertising studio. Built with **Astro** (static output), **Tailwind CSS**, **GSAP + ScrollTrigger**, **Lenis**, and **Framer Motion** inside React islands.

---

## ✨ Features

- **Astro (SSG)** — zero backend, deploy anywhere static (Vercel / Netlify / Cloudflare Pages).
- **Bilingual i18n** — Persian (`fa`, default, RTL) at `/` and English (`en`, LTR) at `/en`, with a header language switcher that preserves the current path.
- **RTL-first design** — Persian typography tuned first (Vazirmatn), Inter for English, full logical-property layout (`start`/`end`).
- **Dark / light themes** — toggle persisted in `localStorage`, respects `prefers-color-scheme`, smooth cross-fade, and no flash of wrong theme (inline boot script).
- **Brand gradient** — warm orange `#F7861E` → magenta `#D81E77` used across accents, buttons, highlights, and hovers.
- **Rich animations** — animated hero with showreel video, scroll-reveal, parallax, animated counters, client-logo marquee, gradient blobs, hover-to-play portfolio previews, testimonials slider, animated mobile menu, sticky shrink-on-scroll header. All respect `prefers-reduced-motion`.
- **Content collections** — blog (MDX) + portfolio (Markdown), no CMS/database, with schema validation and reading time.
- **SEO** — per-page titles/descriptions in both languages, Open Graph + Twitter cards, canonical + `hreflang`, auto sitemap, `robots.txt`, per-locale RSS, and JSON-LD (Organization, LocalBusiness, Article, BreadcrumbList).
- **Accessible** — semantic HTML, heading hierarchy, aria labels, keyboard navigable, focus states.

---

## 🚀 Getting started

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in ./dist
npm run preview  # preview the production build
```

### Configure before launch

1. **`src/data/site.ts`** — set social links, contact email, and your **Formspree** form ID (`FORMSPREE_ID`).
2. **`astro.config.mjs`** — set your production `site` URL (used for canonical URLs, sitemap, RSS).
3. Replace the placeholder media in `public/media/` (`showreel.webm` / `showreel.mp4` / `hero-poster.jpg`) and the placeholder images in `src/assets/`.

---

## 📁 Project structure

```text
motiva-studio/
├─ astro.config.mjs         # Astro config: i18n, integrations (react, mdx, tailwind, sitemap), image
├─ tailwind.config.mjs      # Brand colors, fonts, keyframes/animations
├─ public/
│  ├─ robots.txt
│  ├─ favicon.svg
│  ├─ og-default.jpg        # Fallback social share image
│  └─ media/                # Showreel video + hero poster (replace placeholders)
└─ src/
   ├─ assets/               # Images processed by astro:assets (<Image>)
   │  ├─ blog/
   │  └─ portfolio/
   ├─ components/
   │  ├─ *.astro            # Static UI (Header, Footer, Hero, Pricing, …)
   │  ├─ *.tsx              # React islands (MobileMenu, PortfolioGallery, Testimonials, ContactForm)
   │  └─ pages/             # Locale-agnostic page bodies reused by fa + en routes
   ├─ content/
   │  ├─ config.ts          # Collection schemas (blog, portfolio)
   │  ├─ blog/{fa,en}/       # Blog posts (.mdx)
   │  └─ portfolio/{fa,en}/  # Portfolio items (.md)
   ├─ data/                 # site.ts (config) + content.ts (services, pricing, …)
   ├─ i18n/                 # ui.ts (string table) + utils.ts (locale helpers)
   ├─ layouts/              # BaseLayout.astro, BlogPost.astro
   ├─ lib/                  # animations.ts, lenis.ts, blog.ts, structuredData.ts
   ├─ styles/global.css     # Tailwind layers, theme CSS vars, utilities
   └─ pages/                # Routes. fa at root, en under /en
      ├─ index.astro / services.astro / portfolio.astro / about.astro / contact.astro
      ├─ blog/index.astro + blog/[...slug].astro
      ├─ rss.xml.ts
      ├─ 404.astro
      └─ en/ … (mirror of the above)
```

---

## ✍️ Adding a new blog post

1. Create an MDX file in the correct locale folder:
   - Persian: `src/content/blog/fa/my-post.mdx`
   - English: `src/content/blog/en/my-post.mdx`
2. Add frontmatter (validated by `src/content/config.ts`):

   ```mdx
   ---
   title: "عنوان مطلب"
   description: "خلاصه کوتاه برای سئو و کارت‌ها"
   pubDate: 2026-07-01
   author: "تیم موتیوا"
   cover: "../../../assets/blog/my-cover.jpg"   # relative to this file
   coverAlt: "توضیح تصویر"
   category: "استراتژی"
   tags: ["ویدیو", "برندینگ"]
   draft: false
   lang: "fa"
   ---

   محتوای مطلب شما اینجا…
   ```

3. Drop the cover image in `src/assets/blog/`. Reading time is calculated automatically.
4. The post appears at `/blog/my-post` (fa) or `/en/blog/my-post` (en) and in the RSS feed. The URL slug is the filename **minus** the locale folder.

> Tip: keep the same filename across `fa/` and `en/` so the two language versions share a clean slug.

---

## 🎬 Adding a new portfolio item

1. Create a Markdown file in the locale folder:
   - Persian: `src/content/portfolio/fa/my-project.md`
   - English: `src/content/portfolio/en/my-project.md`
2. Frontmatter:

   ```md
   ---
   title: "نام پروژه"
   client: "نام مشتری"
   category: "social"   # one of: social | teaser | motion | brand
   thumbnail: "../../../assets/portfolio/my-thumb.jpg"
   thumbnailAlt: "توضیح تصویر"
   previewVideo: "/media/previews/my-project.mp4"  # optional, hover-to-play (from /public)
   videoUrl: "https://www.youtube.com/embed/XXXXXXXXXXX"  # opens in the lightbox
   order: 10          # higher shows first
   featured: true
   pubDate: 2026-07-01
   lang: "fa"
   ---
   ```

3. Add the thumbnail to `src/assets/portfolio/`. `category` powers the filter chips on the portfolio grid; `videoUrl` (YouTube/Vimeo embed or an MP4) plays in the lightbox.

---

## 🎨 Theming & brand

- Colors, fonts, and keyframes live in `tailwind.config.mjs`; theme CSS variables (light/dark) live in `src/styles/global.css`.
- The gradient is exposed as the `bg-brand-gradient` utility and the `.text-gradient` helper.

## ⚙️ Animations

- Global scroll behavior (Lenis) and GSAP/ScrollTrigger setups live in `src/lib/`. They initialize on `astro:page-load` so they keep working across View Transitions, and they bail out under `prefers-reduced-motion`.
- Micro-interactions (mobile menu, portfolio lightbox, testimonials, contact form) are React islands hydrated only where needed (`client:load` / `client:visible`).

## 📦 Deployment

Run `npm run build` and deploy the `dist/` folder. On Vercel/Netlify/Cloudflare Pages, use build command `npm run build` and output directory `dist`. Set your real domain in `astro.config.mjs` → `site`.
