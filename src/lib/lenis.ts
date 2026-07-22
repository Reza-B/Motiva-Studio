/* =============================================================
   Lenis smooth-scroll bootstrap, synced with GSAP ScrollTrigger.
   Imported once per page from BaseLayout via a client script.
   Respects prefers-reduced-motion (skips smoothing entirely).
   Also re-initialises after Astro View Transitions swaps.
   ============================================================= */

import Lenis from "lenis"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

let lenis: Lenis | null = null

export function initLenis() {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
  if (reduce) return null

  // Avoid double init across view transitions.
  if (lenis) {
    lenis.destroy()
    lenis = null
  }

  lenis = new Lenis({
    duration: 1.1,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
  })

  // Drive Lenis from GSAP's ticker for perfectly synced animations.
  lenis.on("scroll", ScrollTrigger.update)
  gsap.ticker.add((time) => lenis?.raf(time * 1000))
  gsap.ticker.lagSmoothing(0)

  return lenis
}

export function getLenis() {
  return lenis
}
