/* =============================================================
   Content-collection helpers for blog + portfolio.
   Entries live in locale folders (blog/fa, blog/en, etc). The
   locale is the first path segment of the entry id/slug; the
   remainder is the locale-agnostic slug used in URLs.
   ============================================================= */
import { getCollection, type CollectionEntry } from "astro:content"
import type { Lang } from "@i18n/utils"
import readingTimeFn from "reading-time"

/** "fa/my-post" -> { lang: "fa", slug: "my-post" } */
export function splitEntryId(id: string): { lang: Lang; slug: string } {
  const [maybeLang, ...rest] = id.replace(/\.(md|mdx)$/, "").split("/")
  if (maybeLang === "fa" || maybeLang === "en") {
    return { lang: maybeLang, slug: rest.join("/") }
  }
  return { lang: "fa", slug: id }
}

export async function getBlogPosts(lang: Lang) {
  const all = await getCollection("blog", ({ data }) => !data.draft)
  return all
    .filter((e) => splitEntryId(e.id).lang === lang)
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
}

export async function getPortfolioItems(lang: Lang) {
  const all = await getCollection("portfolio")
    return all
    .filter((e) => splitEntryId(e.id).lang === lang)
    .sort((a, b) => b.data.order - a.data.order)
}

/** Reading time in whole minutes from raw markdown body. */
export function readingMinutes(entry: CollectionEntry<"blog">): number {
  return Math.max(1, Math.round(readingTimeFn(entry.body).minutes))
}

/** Unique category list for a set of posts. */
export function collectCategories(posts: CollectionEntry<"blog">[]): string[] {
  return Array.from(new Set(posts.map((p) => p.data.category)))
}
