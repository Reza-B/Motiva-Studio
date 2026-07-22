/* =============================================================
   PortfolioGallery — React island for the filterable video grid
   with hover-to-play previews and a lightbox.
   - Framer Motion powers the layout/filter + lightbox transitions.
   - Hover plays a muted preview clip; leaving pauses & resets.
   - Click opens an accessible lightbox (Esc / backdrop to close).
   Data is passed in from Astro (already localized).
   ============================================================= */
import { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

export interface PortfolioItem {
  slug: string
  title: string
  client?: string
  category: "social" | "teaser" | "motion" | "brand"
  thumbnail: string
  thumbnailAlt: string
  previewVideo?: string
  videoUrl: string
}

interface Props {
  items: PortfolioItem[]
  filters: { id: string; label: string }[]
  lang: "fa" | "en"
  viewLabel: string
}

function VideoCard({
  item,
  onOpen,
  viewLabel,
}: {
  item: PortfolioItem
  onOpen: () => void
  viewLabel: string
}) {
  const videoRef = useRef<HTMLVideoElement>(null)

  const play = () => {
    const v = videoRef.current
    if (v) void v.play().catch(() => {})
  }
  const stop = () => {
    const v = videoRef.current
    if (v) {
      v.pause()
      v.currentTime = 0
    }
  }

  return (
    <motion.button
      layout
      type="button"
      onClick={onOpen}
      onMouseEnter={play}
      onMouseLeave={stop}
      onFocus={play}
      onBlur={stop}
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.3 }}
      className="group relative aspect-video w-full overflow-hidden rounded-3xl border border-border bg-surface text-start"
      aria-label={`${viewLabel}: ${item.title}`}
    >
      <img
        src={item.thumbnail}
        alt={item.thumbnailAlt}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
      />
      {item.previewVideo && (
        <video
          ref={videoRef}
          src={item.previewVideo}
          muted
          loop
          playsInline
          preload="none"
          className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
        <div>
          {item.client && (
            <p className="text-xs font-medium text-white/70">{item.client}</p>
          )}
          <h3 className="text-lg font-bold text-white">{item.title}</h3>
        </div>
        <span className="grid h-11 w-11 flex-none place-items-center rounded-full bg-brand-gradient text-white shadow-glow transition group-hover:scale-110">
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      </div>
    </motion.button>
  )
}

function Lightbox({
  item,
  onClose,
}: {
  item: PortfolioItem
  onClose: () => void
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose()
    document.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [onClose])

  const isEmbed = /youtube|vimeo/.test(item.videoUrl)

  return (
    <motion.div
      className="fixed inset-0 z-[80] grid place-items-center bg-black/85 p-4 backdrop-blur"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
    >
      <motion.div
        className="relative aspect-video w-full max-w-5xl overflow-hidden rounded-2xl bg-black shadow-2xl"
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        onClick={(e) => e.stopPropagation()}
      >
        {isEmbed ? (
          <iframe
            src={item.videoUrl}
            title={item.title}
            className="h-full w-full"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <video src={item.videoUrl} className="h-full w-full" controls autoPlay playsInline />
        )}
      </motion.div>
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute end-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white/20"
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2}>
          <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
        </svg>
      </button>
    </motion.div>
  )
}

export default function PortfolioGallery({ items, filters, viewLabel }: Props) {
  const [active, setActive] = useState<string>("all")
  const [selected, setSelected] = useState<PortfolioItem | null>(null)

  const visible =
    active === "all" ? items : items.filter((i) => i.category === active)

  return (
    <div>
      {/* Filter chips */}
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {filters.map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => setActive(f.id)}
            aria-pressed={active === f.id}
            className={
              "relative rounded-full px-5 py-2 text-sm font-medium transition " +
              (active === f.id
                ? "text-white"
                : "border border-border text-fg-muted hover:text-fg")
            }
          >
            {active === f.id && (
              <motion.span
                layoutId="filter-pill"
                className="absolute inset-0 -z-10 rounded-full bg-brand-gradient"
                transition={{ type: "spring", damping: 30, stiffness: 300 }}
              />
            )}
            {f.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((item) => (
            <VideoCard
              key={item.slug}
              item={item}
              viewLabel={viewLabel}
              onOpen={() => setSelected(item)}
            />
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {selected && (
          <Lightbox item={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </div>
  )
}
