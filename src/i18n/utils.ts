/* =============================================================
   i18n helpers.
   - getLangFromUrl:  reads the active locale from the URL.
   - useTranslations: returns a typed t() function for a locale.
   - useTranslatedPath: builds locale-aware URLs (fa at "/", en at "/en").
   - getLocalizedPathname / getAlternateLinks: for hreflang + switcher.
   ============================================================= */

import { ui, defaultLang, showDefaultLang, languages, type Lang, type UIKey } from "./ui"

export function getLangFromUrl(url: URL): Lang {
  const [, seg] = url.pathname.split("/")
  if (seg in languages) return seg as Lang
  return defaultLang
}

export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return ui[lang][key] ?? ui[defaultLang][key] ?? key
  }
}

/**
 * Build a path for a given locale.
 * fa (default) => "/about"
 * en           => "/en/about"
 */
export function useTranslatedPath(lang: Lang) {
  return function translatePath(path: string, l: Lang = lang): string {
    const clean = "/" + path.replace(/^\/+/, "")
    if (!showDefaultLang && l === defaultLang) return clean
    return `/${l}${clean === "/" ? "" : clean}`
  }
}

/**
 * Given the current pathname, return the equivalent pathname in the other
 * locale (used by the language switcher and hreflang alternates).
 */
export function getLocalizedPathname(pathname: string, target: Lang): string {
  // Strip a leading "/en" if present to get the locale-agnostic path.
  let base = pathname
  for (const l of Object.keys(languages) as Lang[]) {
    if (l === defaultLang) continue
    if (base === `/${l}` || base.startsWith(`/${l}/`)) {
      base = base.slice(l.length + 1) || "/"
      break
    }
  }
  base = base || "/"
  if (target === defaultLang) return base
  return `/${target}${base === "/" ? "" : base}`
}

/** hreflang alternates for the SEO component. */
export function getAlternateLinks(pathname: string, site: string) {
  const clean = site.replace(/\/$/, "")
  return [
    { hreflang: "fa", href: clean + getLocalizedPathname(pathname, "fa") },
    { hreflang: "en", href: clean + getLocalizedPathname(pathname, "en") },
    { hreflang: "x-default", href: clean + getLocalizedPathname(pathname, "fa") },
  ]
}

export { defaultLang, languages, type Lang }
