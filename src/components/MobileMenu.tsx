/* =============================================================
   MobileMenu — React island for the animated mobile nav.
   Uses Framer Motion for the slide/stagger micro-interactions.
   Keyboard accessible (Esc to close, focus trapped to overlay).

   NOTE: the overlay is rendered through a portal into <body>.
   The <header> gets `backdrop-blur-xl` once scrolled, and a
   backdrop-filter establishes a containing block for any
   position:fixed descendant. Without the portal, the fixed
   overlay would be clipped to the (short) header box and appear
   transparent/broken when opened after scrolling.
   ============================================================= */
import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { AnimatePresence, motion } from "framer-motion"
import type { Lang } from "@i18n/ui"

interface Item {
  href: string
  label: string
}

interface Props {
  lang: Lang
  items: Item[]
  labels: { open: string; close: string; cta: string; ctaHref: string }
}

export default function MobileMenu({ lang, items, labels }: Props) {
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const rtl = lang === "fa"

  // Only portal on the client (document is undefined during SSR).
  useEffect(() => setMounted(true), [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false)
    document.addEventListener("keydown", onKey)
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [open])

  const overlay = (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setOpen(false)}
        >
          <motion.nav
            dir={rtl ? "rtl" : "ltr"}
            aria-label="Mobile"
            className="absolute inset-y-0 end-0 flex w-[82%] max-w-sm flex-col gap-2 border-s border-border bg-bg p-6 shadow-2xl"
            initial={{ x: rtl ? "-100%" : "100%" }}
            animate={{ x: 0 }}
            exit={{ x: rtl ? "-100%" : "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label={labels.close}
              className="mb-4 grid h-10 w-10 place-items-center self-end rounded-full border border-border"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              </svg>
            </button>

            {items.map((item, i) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="rounded-2xl px-4 py-3 text-lg font-semibold text-fg transition hover:bg-bg-soft hover:text-brand-pink"
                initial={{ opacity: 0, x: rtl ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.08 + i * 0.05 }}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </motion.a>
            ))}

            <motion.a
              href={labels.ctaHref}
              className="btn-primary mt-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 + items.length * 0.05 }}
              onClick={() => setOpen(false)}
            >
              {labels.cta}
            </motion.a>
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  )

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={labels.open}
        aria-expanded={open}
        className="grid h-10 w-10 place-items-center rounded-full border border-border bg-surface/60 backdrop-blur transition hover:border-brand-pink"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2}>
          <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
        </svg>
      </button>

      {/* Portal to <body> so the fixed overlay is relative to the
          viewport, not the backdrop-filtered header. */}
      {mounted ? createPortal(overlay, document.body) : null}
    </div>
  )
}
