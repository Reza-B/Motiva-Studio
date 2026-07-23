/* =============================================================
   Portfolio gallery — filterable grid + video lightbox.
   framer-motion layout animations make filtering feel alive.
   ============================================================= */
import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

export interface PortfolioItem {
  slug: string
  title: string
  client?: string
  category: string
  thumbnail: string
  thumbnailAlt: string
  previewVideo?: string
  videoUrl: string
}

interface Props {
  items: PortfolioItem[]
  filters: { id: string; label: string }[]
}

const categoryLabel: Record<string, string> = {
  social: "شبکهٔ اجتماعی",
  teaser: "تیزر",
  motion: "موشن گرافیک",
  brand: "فیلم برند",
}

export default function PortfolioGallery({ items, filters }: Props) {
  const [active, setActive] = useState("all")
  const [lightbox, setLightbox] = useState<PortfolioItem | null>(null)

  const visible = active === "all" ? items : items.filter((i) => i.category === active)

  // Close lightbox with Escape + lock scroll while open.
  useEffect(() => {
    if (!lightbox) return
    document.documentElement.style.overflow = "hidden"
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setLightbox(null)
    window.addEventListener("keydown", onKey)
    return () => {
      document.documentElement.style.overflow = ""
      window.removeEventListener("keydown", onKey)
    }
  }, [lightbox])

  return (
    <div dir="rtl">
      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-2.5" role="tablist" aria-label="فیلتر نمونه‌کارها">
        {filters.map((f) => (
          <button
            key={f.id}
            type="button"
            role="tab"
            aria-selected={active === f.id}
            onClick={() => setActive(f.id)}
            className={
              active === f.id
                ? "rounded-full bg-[linear-gradient(120deg,#F7861E,#D81E77)] px-5 py-2.5 text-sm font-bold text-white shadow-glow transition"
                : "rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-medium text-fg-muted transition hover:border-brand-pink hover:text-fg"
            }
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.ul layout className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((item) => (
            <motion.li
              key={item.slug}
              layout
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <button
                type="button"
                onClick={() => setLightbox(item)}
                className="group relative block w-full overflow-hidden rounded-[1.75rem] border border-border text-right"
                aria-label={`پخش ویدیوی ${item.title}`}
              >
                <img
                  src={item.thumbnail}
                  alt={item.thumbnailAlt}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
                />
                {/* Gradient scrim */}
                <span className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" aria-hidden="true" />

                {/* Play badge */}
                <span className="absolute left-4 top-4 grid h-12 w-12 place-items-center rounded-full bg-white/15 text-white backdrop-blur transition duration-300 group-hover:bg-[linear-gradient(120deg,#F7861E,#D81E77)] group-hover:shadow-glow" aria-hidden="true">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
                </span>

                <span className="absolute inset-x-0 bottom-0 p-5">
                  <span className="block text-xs font-medium text-white/70">
                    {categoryLabel[item.category] ?? item.category}
                    {item.client ? ` · ${item.client}` : ""}
                  </span>
                  <span className="mt-1 block text-lg font-extrabold text-white">{item.title}</span>
                </span>
              </button>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>

      {visible.length === 0 && (
        <p className="mt-12 text-center text-fg-muted">در این دسته هنوز نمونه‌ای منتشر نکرده‌ایم.</p>
      )}

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[95] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
            onClick={() => setLightbox(null)}
            role="dialog"
            aria-modal="true"
            aria-label={lightbox.title}
          >
            <motion.div
              initial={{ scale: 0.92, y: 24 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 24 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mb-3 flex items-center justify-between text-white">
                <p className="font-bold">{lightbox.title}</p>
                <button
                  type="button"
                  onClick={() => setLightbox(null)}
                  aria-label="بستن ویدیو"
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/25 transition hover:bg-white/10"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M6 6l12 12M18 6 6 18" />
                  </svg>
                </button>
              </div>
              <div className="aspect-video overflow-hidden rounded-2xl border border-white/10 bg-black shadow-soft">
                <iframe
                  src={lightbox.videoUrl + "?autoplay=1"}
                  title={lightbox.title}
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
