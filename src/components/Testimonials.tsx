/* =============================================================
   Testimonials — React island slider with Framer Motion.
   Auto-advances, pauses on hover, supports keyboard + dots.
   RTL-aware slide direction. Localized data passed from Astro.
   ============================================================= */
import { useCallback, useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

export interface TItem {
  name: string
  role: string
  quote: string
}

interface Props {
  items: TItem[]
  lang: "fa" | "en"
}

export default function Testimonials({ items, lang }: Props) {
  const rtl = lang === "fa"
  const [[index, dir], setState] = useState<[number, number]>([0, 0])
  const [paused, setPaused] = useState(false)

  const go = useCallback(
    (next: number) => {
      const total = items.length
      const clamped = (next + total) % total
      setState(([prev]) => [clamped, clamped > prev ? 1 : -1])
    },
    [items.length],
  )

  useEffect(() => {
    if (paused || items.length <= 1) return
    const id = setInterval(() => go(index + 1), 6000)
    return () => clearInterval(id)
  }, [index, paused, go, items.length])

  const current = items[index]
  const slide = (rtl ? -1 : 1) * dir

  return (
    <div
      className="relative mx-auto mt-14 max-w-3xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      role="region"
      aria-roledescription="carousel"
      aria-label="Testimonials"
    >
      <div className="glass relative overflow-hidden rounded-3xl p-8 md:p-12">
        <svg
          viewBox="0 0 24 24"
          className="mb-6 h-10 w-10 text-brand-pink"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M7 7h4v4c0 2.2-1.8 4-4 4v-2c1.1 0 2-.9 2-2H7V7zm8 0h4v4c0 2.2-1.8 4-4 4v-2c1.1 0 2-.9 2-2h-2V7z" />
        </svg>

        <div className="relative min-h-[9rem]">
          <AnimatePresence mode="wait" custom={slide}>
            <motion.blockquote
              key={index}
              custom={slide}
              initial={{ opacity: 0, x: slide * 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: slide * -40 }}
              transition={{ duration: 0.4 }}
            >
              <p className="text-xl font-medium leading-relaxed md:text-2xl">
                {current.quote}
              </p>
              <footer className="mt-6">
                <div className="font-bold text-gradient">{current.name}</div>
                <div className="text-sm text-fg-muted">{current.role}</div>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>
      </div>

      {/* Controls */}
      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => go(index - 1)}
          aria-label="Previous"
          className="grid h-10 w-10 place-items-center rounded-full border border-border transition hover:border-brand-pink hover:text-brand-pink"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5 rtl:rotate-180" fill="none" stroke="currentColor" strokeWidth={2}>
            <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div className="flex gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => go(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === index}
              className={
                "h-2 rounded-full transition-all " +
                (i === index ? "w-6 bg-brand-gradient" : "w-2 bg-border")
              }
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => go(index + 1)}
          aria-label="Next"
          className="grid h-10 w-10 place-items-center rounded-full border border-border transition hover:border-brand-pink hover:text-brand-pink"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5 rtl:rotate-180" fill="none" stroke="currentColor" strokeWidth={2}>
            <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  )
}
