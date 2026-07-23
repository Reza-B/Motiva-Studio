/* =============================================================
   Animation engine — GSAP + ScrollTrigger + tiny helpers.
   Everything is opt-in via data-attributes / classes:

   .reveal [data-reveal-delay]   fade-slide-in on scroll
   [data-words]                  word-by-word hero reveal
   [data-parallax="0.2"]         scroll parallax (positive = slower)
   [data-counter="320"]          count-up number when visible
   [data-header]                 gets data-scrolled on scroll
   [data-timeline-progress]      vertical line that draws while scrolling
   [data-tilt]                   subtle 3D tilt on pointer move
   [data-spotlight]              pointer-following radial glow

   All effects respect prefers-reduced-motion.
   ============================================================= */

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches

/* ---- scroll reveal --------------------------------------- */
function initReveals() {
  const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"))
  if (els.length === 0) return

  if (prefersReducedMotion()) {
    els.forEach((el) => el.classList.add("is-visible"))
    return
  }

  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        const el = entry.target as HTMLElement
        const delay = Number(el.dataset.revealDelay ?? 0)
        window.setTimeout(() => el.classList.add("is-visible"), delay)
        io.unobserve(el)
      }
    },
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
  )
  els.forEach((el) => io.observe(el))
}

/* ---- hero word-by-word reveal ------------------------------ */
function initHeroWords() {
  const targets = document.querySelectorAll<HTMLElement>("[data-words]")
  targets.forEach((el) => {
    if (el.dataset.wordsDone) return
    el.dataset.wordsDone = "1"

    // Wrap each word: <span class="word"><span>...</span></span>
    const words = (el.textContent ?? "").trim().split(/\s+/)
    el.textContent = ""
    el.classList.add("word-reveal")
    words.forEach((w, i) => {
      const outer = document.createElement("span")
      outer.className = "word"
      const inner = document.createElement("span")
      inner.textContent = w
      outer.appendChild(inner)
      el.appendChild(outer)
      if (i < words.length - 1) el.appendChild(document.createTextNode(" "))
    })

    const inners = el.querySelectorAll<HTMLElement>(".word > span")
    if (prefersReducedMotion()) {
      inners.forEach((s) => (s.style.transform = "none"))
      return
    }
    gsap.to(inners, {
      y: 0,
      duration: 0.9,
      ease: "power4.out",
      stagger: 0.07,
      delay: 0.15,
    })
  })

  // Other hero elements fade in after the headline.
  const items = document.querySelectorAll<HTMLElement>("[data-hero-item]")
  if (items.length > 0 && !prefersReducedMotion()) {
    gsap.fromTo(
      items,
      { y: 26, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", stagger: 0.12, delay: 0.5 },
    )
  } else {
    items.forEach((el) => {
      el.style.opacity = "1"
      el.style.transform = "none"
    })
  }
}

/* ---- parallax --------------------------------------------- */
function initParallax() {
  if (prefersReducedMotion()) return
  document.querySelectorAll<HTMLElement>("[data-parallax]").forEach((el) => {
    const speed = Number(el.dataset.parallax || 0.2)
    gsap.to(el, {
      y: () => speed * -160,
      ease: "none",
      scrollTrigger: {
        trigger: el.parentElement ?? el,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    })
  })
}

/* ---- count-up numbers ------------------------------------- */
function initCounters() {
  const els = document.querySelectorAll<HTMLElement>("[data-counter]")
  if (els.length === 0) return

  const fmt = new Intl.NumberFormat("fa-IR")
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        const el = entry.target as HTMLElement
        io.unobserve(el)
        const target = Number(el.dataset.counter ?? 0)
        if (prefersReducedMotion()) {
          el.textContent = fmt.format(target)
          continue
        }
        const state = { v: 0 }
        gsap.to(state, {
          v: target,
          duration: 1.8,
          ease: "power2.out",
          onUpdate: () => {
            el.textContent = fmt.format(Math.round(state.v))
          },
        })
      }
    },
    { threshold: 0.6 },
  )
  els.forEach((el) => io.observe(el))
}

/* ---- sticky header state ----------------------------------- */
function initHeader() {
  const header = document.querySelector<HTMLElement>("[data-header]")
  if (!header) return
  const onScroll = () => {
    if (window.scrollY > 24) header.setAttribute("data-scrolled", "")
    else header.removeAttribute("data-scrolled")
  }
  onScroll()
  window.addEventListener("scroll", onScroll, { passive: true })
}

/* ---- process timeline draw --------------------------------- */
function initTimelineDraw() {
  const lines = document.querySelectorAll<HTMLElement>("[data-timeline-progress]")
  lines.forEach((line) => {
    if (prefersReducedMotion()) {
      line.style.transform = "scaleY(1)"
      return
    }
    gsap.fromTo(
      line,
      { scaleY: 0 },
      {
        scaleY: 1,
        transformOrigin: "top center",
        ease: "none",
        scrollTrigger: {
          trigger: line.parentElement ?? line,
          start: "top 75%",
          end: "bottom 45%",
          scrub: 0.6,
        },
      },
    )
  })
}

/* ---- subtle 3D tilt ---------------------------------------- */
function initTilt() {
  if (prefersReducedMotion()) return
  if (window.matchMedia("(hover: none)").matches) return

  document.querySelectorAll<HTMLElement>("[data-tilt]").forEach((card) => {
    if (card.dataset.tiltBound) return
    card.dataset.tiltBound = "1"
    const strength = 7
    let raf = 0

    card.addEventListener("pointermove", (e) => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const r = card.getBoundingClientRect()
        const px = (e.clientX - r.left) / r.width - 0.5
        const py = (e.clientY - r.top) / r.height - 0.5
        card.style.transform = `perspective(900px) rotateY(${px * strength}deg) rotateX(${-py * strength}deg) translateY(-4px)`
      })
    })
    card.addEventListener("pointerleave", () => {
      cancelAnimationFrame(raf)
      card.style.transform = ""
    })
  })
}

/* ---- pointer spotlight -------------------------------------- */
function initSpotlight() {
  if (prefersReducedMotion()) return
  document.querySelectorAll<HTMLElement>("[data-spotlight]").forEach((zone) => {
    if (zone.dataset.spotBound) return
    zone.dataset.spotBound = "1"
    const glow = zone.querySelector<HTMLElement>("[data-spotlight-glow]")
    if (!glow) return
    zone.addEventListener("pointermove", (e) => {
      const r = zone.getBoundingClientRect()
      glow.style.setProperty("--spot-x", `${e.clientX - r.left}px`)
      glow.style.setProperty("--spot-y", `${e.clientY - r.top}px`)
      glow.style.opacity = "1"
    })
    zone.addEventListener("pointerleave", () => {
      glow.style.opacity = "0"
    })
  })
}

/** Bootstraps every effect. Called on each astro:page-load. */
export function initAllAnimations() {
  // Kill stale triggers left over from the previous page (view transitions).
  ScrollTrigger.getAll().forEach((st) => st.kill())

  initReveals()
  initHeroWords()
  initParallax()
  initCounters()
  initHeader()
  initTimelineDraw()
  initTilt()
  initSpotlight()

  // Recalculate positions after images/layout settle.
  window.setTimeout(() => ScrollTrigger.refresh(), 300)
}
