import rss from "@astrojs/rss"
import type { APIContext } from "astro"
import { getBlogPosts, entrySlug } from "@lib/blog"

export async function GET(context: APIContext) {
  const posts = await getBlogPosts()
  return rss({
    title: "بلاگ استودیو موتیوا",
    description:
      "مقاله‌های کاربردی دربارهٔ ویدیو مارکتینگ، ریلز و موشن گرافیک از تیم موتیوا.",
    site: context.site!,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/blog/${entrySlug(post.id)}/`,
    })),
    customData: "<language>fa</language>",
  })
}
