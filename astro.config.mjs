// @ts-check
import { defineConfig } from "astro/config"
import tailwind from "@astrojs/tailwind"
import react from "@astrojs/react"
import mdx from "@astrojs/mdx"
import sitemap from "@astrojs/sitemap"

// The public production URL. Change this to your real domain before deploying.
// It is used for canonical URLs, sitemap, and RSS.
const SITE = "https://motiva.studio"

// https://astro.build/config
export default defineConfig({
  site: SITE,

  // Fully static output (SSG). No backend / server runtime required.
  output: "static",

  integrations: [
    // We disable base styles because we manage our own reset + tokens in
    // src/styles/global.css.
    tailwind({ applyBaseStyles: false }),
    react(),
    mdx(),
    sitemap(),
  ],

  // Prefetch links on hover/viewport for snappy navigation.
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "viewport",
  },

  image: {
    domains: ["images.unsplash.com"],
  },

  build: {
    inlineStylesheets: "auto",
  },
})
