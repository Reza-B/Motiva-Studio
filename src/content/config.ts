/* =============================================================
   Astro Content Collections.
   - `blog`: MDX posts, one folder per locale (fa/, en/).
   - `portfolio`: MD/MDX entries describing showreel items,
      also split by locale.
   No CMS / database — everything is file-based.
   ============================================================= */

import { defineCollection, z } from "astro:content"

const blog = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      // Author name; defaults handled in templates.
      author: z.string().default("Motiva Studio"),
      // Cover image is optional; supports optimized <Image>.
      cover: image().optional(),
      coverAlt: z.string().optional(),
      category: z.string(),
      tags: z.array(z.string()).default([]),
      draft: z.boolean().default(false),
      // Locale is inferred from the folder, but stored for convenience.
      lang: z.enum(["fa", "en"]).default("fa"),
    }),
})

const portfolio = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      client: z.string().optional(),
      description: z.string().optional(),
      // Filter category, e.g. social | teaser | motion | brand.
      category: z.enum(["social", "teaser", "motion", "brand"]),
      // Poster / thumbnail image.
      thumbnail: image(),
      thumbnailAlt: z.string(),
      // Preview clip (mp4/webm) for hover-play; optional.
      previewVideo: z.string().optional(),
      // Full video URL for the lightbox (YouTube/Vimeo/mp4).
      videoUrl: z.string(),
      // Higher = shown earlier.
      order: z.number().default(0),
      featured: z.boolean().default(false),
      pubDate: z.coerce.date(),
      lang: z.enum(["fa", "en"]).default("fa"),
    }),
})

export const collections = { blog, portfolio }
