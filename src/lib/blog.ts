/* =============================================================
   Content-collection helpers for blog + portfolio (fa-only).
   ============================================================= */
import { getCollection, type CollectionEntry } from "astro:content"
import readingTimeFn from "reading-time"

/** Entry id without the file extension — used as the URL slug. */
export function entrySlug(id: string): string {
  return id.replace(/\.(md|mdx)$/, "")
}

export async function getBlogPosts() {
  const all = await getCollection("blog", ({ data }) => !data.draft)
  return all.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
}

export async function getPortfolioItems() {
  const all = await getCollection("portfolio")
  return all.sort((a, b) => b.data.order - a.data.order)
}

/** Reading time in whole minutes from raw markdown body. */
export function readingMinutes(entry: CollectionEntry<"blog">): number {
  return Math.max(1, Math.round(readingTimeFn(entry.body ?? "").minutes))
}

/** Unique category list for a set of posts. */
export function collectCategories(posts: CollectionEntry<"blog">[]): string[] {
  return Array.from(new Set(posts.map((p) => p.data.category)))
}
