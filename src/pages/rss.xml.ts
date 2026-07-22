/* Persian RSS feed at /rss.xml */
import rss from "@astrojs/rss"
import type { APIContext } from "astro"
import { getBlogPosts, splitEntryId } from "@lib/blog"
import { ui } from "@i18n/ui"

export async function GET(context: APIContext) {
  const posts = await getBlogPosts("fa")
  return rss({
    title: ui.fa["site.name"] + " — " + ui.fa["blog.title"],
    description: ui.fa["blog.subtitle"],
    site: context.site ?? "https://motiva.studio",
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      categories: [post.data.category, ...post.data.tags],
      link: `/blog/${splitEntryId(post.id).slug}/`,
    })),
    customData: `<language>fa-IR</language>`,
  })
}
