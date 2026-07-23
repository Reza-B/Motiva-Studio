/* =============================================================
   Helpers that build JSON-LD structured data objects.
   Used by the SEO component across pages.
   ============================================================= */

import { SITE_URL, social, business } from "@data/site"

const site = SITE_URL.replace(/\/$/, "")

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "استودیو موتیوا",
    url: site,
    logo: `${site}/logo.png`,
    sameAs: [social.instagram, social.telegram],
    email: social.email,
  }
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "استودیو موتیوا",
    image: `${site}/og-default.jpg`,
    url: site,
    email: social.email,
    telephone: social.phone,
    priceRange: business.priceRange,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.streetAddress,
      addressLocality: business.city,
      addressRegion: business.region,
      postalCode: business.postalCode,
      addressCountry: business.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: business.latitude,
      longitude: business.longitude,
    },
  }
}

export function articleSchema(opts: {
  title: string
  description: string
  url: string
  image?: string
  author: string
  pubDate: Date
  updatedDate?: Date
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.title,
    description: opts.description,
    image: opts.image ? [opts.image] : undefined,
    author: { "@type": "Organization", name: opts.author },
    publisher: {
      "@type": "Organization",
      name: "Motiva Studio",
      logo: { "@type": "ImageObject", url: `${site}/logo.png` },
    },
    datePublished: opts.pubDate.toISOString(),
    dateModified: (opts.updatedDate ?? opts.pubDate).toISOString(),
    mainEntityOfPage: opts.url,
  }
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  }
}
