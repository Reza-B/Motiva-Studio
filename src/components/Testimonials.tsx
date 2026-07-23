/* =============================================================
   Testimonials — React island carousel with framer-motion.
   Auto-advances, pauses on hover/focus, RTL-aware, keyboard OK.
   (باگ جهت انیمیشن هنگام بازگشت به اسلاید اول اصلاح شد.)
   ============================================================= */
import { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import type { Testimonial } from "@data/content"

interface Props {
  items: Testimonial[]
}

export default function Testimonials({ items }: Props) {
  const [index, setIndex] = useState(0)
  const [dir, setDir] = useState(1)
  const [paused, setPaused] = useState(false)
  const timer = useRef<number | null>(null)

  const go = (next: number, direction?: number) => {
    const len = items.length
    const target = ((next % len) + len) % len
    // جهت حرکت را صریح پاس می‌دهیم تا هنگام wrap (آخر → اول) برعکس نشود.
    setDir(direction ?? (target > index ? 1 : -1))
    setIndex(target)
  }

  useEffect(() => {
    if (paused) return
    timer.current = window.setTimeout(() => go(index + 1, 1), 5200)
    return () => {
      if (timer.current) window.clearTimeout(timer.current)
    }
  }, [index, paused])

  const t = items[index]

  return (
    <div
      dir="rtl"
      className="relative mx-auto max-w-3xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="glass relative min-h-[270px] overflow-hidden p-8 sm:min-h-[230px] sm:p-10">
        {/* Decorative quote mark */}
        <span aria-hidden="true" className="absolute left-8 top-6 select-none text-7xl font-black leading-none text-brand-pink/20">
          ”
        </span>

        <AnimatePresence mode="wait" initial={false}>
          <motion.figure
            key={index}
            initial={{ opacity: 0, x: dir * 42 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: dir * -42 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <blockquote className="text-lg leading-9 text-fg sm:text-xl sm:leading-10">
              {t.quote}
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-[linear-gradient(120deg,#F7861E,#D81E77)] text-sm font-bold text-white">
                {t.name.trim().charAt(0)}
              </span>
              <span>
                <span className="block font-bold">{t.name}</span>
                <span className="block text-sm text-fg-muted">{t.role}</span>
              </span>
            </figcaption>
          </motion.figure>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          type="button"
          aria-label="نظر قبلی"
          onClick={() => go(index - 1, -1)}
          className="grid h-11 w-11 place-items-center rounded-full border border-border text-fg-muted transition hover:border-brand-pink hover:text-brand-pink"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 6l6 6-6 6" />
          </svg>
        </button>

        <div className="flex items-center gap-2" role="tablist" aria-label="انتخاب نظر">
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`نظر ${i + 1}`}
              onClick={() => go(i)}
              className={
                i === index
                  ? "h-2.5 w-8 rounded-full bg-[linear-gradient(120deg,#F7861E,#D81E77)] transition-all"
                  : "h-2.5 w-2.5 rounded-full bg-border transition-all hover:bg-fg-muted"
              }
            />
          ))}
        </div>

        <button
          type="button"
          aria-label="نظر بعدی"
          onClick={() => go(index + 1, 1)}
          className="grid h-11 w-11 place-items-center rounded-full border border-border text-fg-muted transition hover:border-brand-pink hover:text-brand-pink"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 6l-6 6 6 6" />
          </svg>
        </button>
      </div>
    </div>
  )
}
