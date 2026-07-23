/* =============================================================
   Mobile menu — React island with framer-motion.
   Full-screen overlay, staggered link reveal, focus-safe.
   ============================================================= */
import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { AnimatePresence, motion } from "framer-motion"

interface Props {
  links: { href: string; label: string }[]
}

export default function MobileMenu({ links }: Props) {
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  // Lock body scroll while the overlay is open.
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : ""
    return () => {
      document.documentElement.style.overflow = ""
    }
  }, [open])

  // Close with Escape.
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false)
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open])

  const overlay = (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[90] flex flex-col bg-bg/95 backdrop-blur-xl"
          dir="rtl"
        >
          <div className="flex items-center justify-between px-5 py-5">
            <span className="text-lg font-extrabold">استودیو موتیوا</span>
            <button
              type="button"
              aria-label="بستن منو"
              onClick={() => setOpen(false)}
              className="grid h-11 w-11 place-items-center rounded-full border border-border text-fg"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M6 6l12 12M18 6 6 18" />
              </svg>
            </button>
          </div>

          <nav className="flex flex-1 flex-col items-center justify-center gap-2" aria-label="منوی موبایل">
            {links.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 + i * 0.06, duration: 0.35 }}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-6 py-3 text-2xl font-bold text-fg transition-colors hover:text-transparent hover:[background:linear-gradient(120deg,#F7861E,#D81E77)] hover:[background-clip:text] hover:[-webkit-background-clip:text]"
              >
                {link.label}
              </motion.a>
            ))}
          </nav>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="pb-10 text-center text-sm text-fg-muted"
          >
            ویدیویی که دیده می‌شود، از اینجا شروع می‌شود.
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )

  return (
    <>
      <button
        type="button"
        aria-label="بازکردن منو"
        aria-expanded={open}
        onClick={() => setOpen(true)}
        className="grid h-11 w-11 place-items-center rounded-full border border-border text-fg"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M4 7h16M4 12h16M4 17h10" />
        </svg>
      </button>
      {/* Portal keeps the fixed overlay out of the header's transformed box. */}
      {mounted && createPortal(overlay, document.body)}
    </>
  )
}
