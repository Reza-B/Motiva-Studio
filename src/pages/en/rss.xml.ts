/* English RSS feed at /en/rss.xml */
import rss from "@astrojs/rss"
import type { APIContext } from "astro"
import { getBlogPosts, splitEntryId } from "@lib/blog"
import { ui } from "@i18n/ui"

export async function GET(context: APIContext) {
  const posts = await getBlogPosts("en")
  return rss({
    title: ui.en["site.name"] + " — " + ui.en["blog.title"],
    description: ui.en["blog.subtitle"],
    site: context.site ?? "https://motiva.studio",
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      categories: [post.data.category, ...post.data.tags],
      link: `/en/blog/${splitEntryId(post.id).slug}/`,
    })),
    customData: `<language>en-US</language>`,
  })
}
