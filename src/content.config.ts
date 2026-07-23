/* =============================================================
   Astro Content Collections (Content Layer API).
   - `blog`: مقاله‌های MD/MDX فارسی.
   - `portfolio`: نمونه‌کارها.
   بدون CMS — همه‌چیز فایل‌محور است.
   ============================================================= */

import { defineCollection, z } from "astro:content"
import { glob } from "astro/loaders"

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      author: z.string().default("تیم موتیوا"),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      category: z.string(),
      tags: z.array(z.string()).default([]),
      draft: z.boolean().default(false),
    }),
})

const portfolio = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/portfolio" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      client: z.string().optional(),
      description: z.string().optional(),
      // دسته‌بندی فیلتر: social | teaser | motion | brand
      category: z.enum(["social", "teaser", "motion", "brand"]),
      thumbnail: image(),
      thumbnailAlt: z.string(),
      previewVideo: z.string().optional(),
      videoUrl: z.string(),
      order: z.number().default(0),
      featured: z.boolean().default(false),
      pubDate: z.coerce.date(),
    }),
})

export const collections = { blog, portfolio }
