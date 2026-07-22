// @ts-check
import { defineConfig } from "astro/config"
import tailwind from "@astrojs/tailwind"
import react from "@astrojs/react"
import mdx from "@astrojs/mdx"
import sitemap from "@astrojs/sitemap"

// The public production URL. Change this to your real domain before deploying.
// It is used for canonical URLs, hreflang tags, sitemap, and RSS.
const SITE = "https://motiva.studio"

// https://astro.build/config
export default defineConfig({
  site: SITE,

  // Fully static output (SSG). No backend / server runtime required.
  output: "static",

  // Bilingual routing.
  // - Persian (fa) is the PRIMARY language and is served at the root: "/".
  // - English (en) is served under the "/en" prefix.
  i18n: {
    defaultLocale: "fa",
    locales: ["fa", "en"],
    routing: {
      // fa lives at "/" (no prefix); en lives at "/en/...".
      prefixDefaultLocale: false,
    },
  },

  integrations: [
    // We disable base styles because we manage our own reset + tokens in
    // src/styles/global.css.
    tailwind({ applyBaseStyles: false }),
    react(),
    mdx(),
    sitemap({
      i18n: {
        defaultLocale: "fa",
        locales: {
          fa: "fa-IR",
          en: "en-US",
        },
      },
    }),
  ],

  // Prefetch links on hover/viewport for snappy navigation.
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "viewport",
  },

  image: {
    // Allow remote showreel/portfolio thumbnails to be optimized if needed.
    domains: ["images.unsplash.com"],
  },

  build: {
    inlineStylesheets: "auto",
  },
})
