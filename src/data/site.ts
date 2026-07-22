/* =============================================================
   Global site configuration & social links.
   Edit these values to rebrand / re-point the site.
   ============================================================= */

export const SITE_URL = "https://motiva.studio"

export const social = {
  instagram: "https://instagram.com/motiva.studio",
  telegram: "https://t.me/motivastudio",
  email: "hello@motiva.studio",
  phone: "+98 21 0000 0000",
}

/**
 * Formspree endpoint for the (backendless) contact form.
 * Create a free form at https://formspree.io and paste its ID here.
 */
export const FORMSPREE_ID = "xxxxxxxx" // e.g. "mvojabcd"
export const FORMSPREE_ENDPOINT = "https://formspree.io/f/" + FORMSPREE_ID

/** Address for LocalBusiness structured data. */
export const business = {
  legalName: "Motiva Studio",
  streetAddress: "Valiasr St.",
  city: "Tehran",
  region: "Tehran",
  postalCode: "0000000000",
  country: "IR",
  latitude: 35.7219,
  longitude: 51.3347,
  priceRange: "$$",
}

/** Client logos for the marquee (text-based to stay dependency-free). */
export const clients = [
  "Digikala",
  "Snapp",
  "Tapsi",
  "Filimo",
  "Divar",
  "Cafe Bazaar",
  "Alibaba",
  "Zarrin",
]

/** Homepage stats counters. Keys map to ui strings in i18n/ui.ts. */
export const stats = [
  { value: 320, suffix: "+", key: "stats.projects" as const },
  { value: 140, suffix: "+", key: "stats.clients" as const },
  { value: 85, suffix: "M", key: "stats.views" as const },
  { value: 24, suffix: "", key: "stats.awards" as const },
]
