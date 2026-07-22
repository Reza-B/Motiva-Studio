/* =============================================================
   Reusable GSAP + ScrollTrigger animation helpers.
   These are called from a client-side <script> in BaseLayout so
   they run after hydration and re-run after View Transitions.
   Everything is a no-op when prefers-reduced-motion is set.
   ============================================================= */

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const prefersReduced = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches

/** Scroll-reveal for any element with the `.reveal` class or [data-reveal]. */
export function initScrollReveal() {
  if (prefersReduced()) {
    document
      .querySelectorAll<HTMLElement>(".reveal, [data-reveal]")
      .forEach((el) => el.classList.add("is-visible"))
    return
  }

  const items = gsap.utils.toArray<HTMLElement>(".reveal, [data-reveal]")
  items.forEach((el) => {
    const delay = Number(el.dataset.revealDelay ?? 0)
    ScrollTrigger.create({
      trigger: el,
      start: "top 85%",
      once: true,
      onEnter: () =>
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay,
          ease: "power3.out",
          onStart: () => el.classList.add("is-visible"),
        }),
    })
  })
}

/** Parallax for elements with [data-parallax="<speed>"] (e.g. 0.2). */
export function initParallax() {
  if (prefersReduced()) return
  gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
    const speed = parseFloat(el.dataset.parallax || "0.2")
    gsap.to(el, {
      yPercent: -speed * 100,
      ease: "none",
      scrollTrigger: {
        trigger: el,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    })
  })
}

/** Animated number counters for [data-counter="<target>"]. */
export function initCounters() {
  gsap.utils.toArray<HTMLElement>("[data-counter]").forEach((el) => {
    const target = parseFloat(el.dataset.counter || "0")
    if (prefersReduced()) {
      el.textContent = String(target)
      return
    }
    const obj = { val: 0 }
    ScrollTrigger.create({
      trigger: el,
      start: "top 90%",
      once: true,
      onEnter: () =>
        gsap.to(obj, {
          val: target,
          duration: 2,
          ease: "power2.out",
          onUpdate: () => {
            el.textContent = Math.round(obj.val).toLocaleString(
              document.documentElement.lang === "fa" ? "fa-IR" : "en-US",
            )
          },
        }),
    })
  })
}

/** Hero intro timeline: staggered fade/slide of [data-hero] children. */
export function initHero() {
  const hero = document.querySelector<HTMLElement>("[data-hero]")
  if (!hero) return
  const targets = hero.querySelectorAll<HTMLElement>("[data-hero-item]")
  if (prefersReduced()) {
    gsap.set(targets, { opacity: 1, y: 0 })
    return
  }
  gsap.fromTo(
    targets,
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.12,
      ease: "power3.out",
      delay: 0.15,
    },
  )
}

/** Sticky header: shrink + add background after scrolling down. */
export function initHeaderShrink() {
  const header = document.querySelector<HTMLElement>("[data-header]")
  if (!header) return
  const onScroll = () => {
    if (window.scrollY > 40) header.setAttribute("data-scrolled", "true")
    else header.removeAttribute("data-scrolled")
  }
  onScroll()
  window.addEventListener("scroll", onScroll, { passive: true })
}

/** Initialise everything for the current page. */
export function initAllAnimations() {
  initHero()
  initScrollReveal()
  initParallax()
  initCounters()
  initHeaderShrink()
  ScrollTrigger.refresh()
}
