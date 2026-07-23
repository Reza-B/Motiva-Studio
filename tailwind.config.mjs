/** @type {import('tailwindcss').Config} */
import typography from "@tailwindcss/typography"

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Brand gradient endpoints (from the Motiva logo).
        brand: {
          orange: "#F7861E",
          pink: "#D81E77",
          violet: "#7C3AED",
        },
        // Semantic tokens driven by CSS variables (see global.css).
        bg: "rgb(var(--bg) / <alpha-value>)",
        "bg-soft": "rgb(var(--bg-soft) / <alpha-value>)",
        surface: "rgb(var(--surface) / <alpha-value>)",
        fg: "rgb(var(--fg) / <alpha-value>)",
        "fg-muted": "rgb(var(--fg-muted) / <alpha-value>)",
        border: "rgb(var(--border) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["'Vazirmatn Variable'", "Vazirmatn", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(120deg, #F7861E 0%, #D81E77 100%)",
        "brand-gradient-soft":
          "linear-gradient(120deg, rgba(247,134,30,0.14) 0%, rgba(216,30,119,0.14) 100%)",
        "hero-glow":
          "radial-gradient(60% 60% at 70% 20%, rgba(216,30,119,0.22) 0%, transparent 70%), radial-gradient(50% 50% at 20% 80%, rgba(247,134,30,0.16) 0%, transparent 70%)",
      },
      boxShadow: {
        glow: "0 0 60px -15px rgba(216, 30, 119, 0.5)",
        "glow-orange": "0 0 60px -15px rgba(247, 134, 30, 0.5)",
        soft: "0 10px 40px -12px rgba(0, 0, 0, 0.45)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px) scale(1)" },
          "50%": { transform: "translateY(-26px) scale(1.04)" },
        },
        "gradient-pan": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(1)", opacity: "0.6" },
          "100%": { transform: "scale(1.9)", opacity: "0" },
        },
        "spin-slow": {
          to: { transform: "rotate(360deg)" },
        },
        shine: {
          "0%": { transform: "translateX(-120%) skewX(-18deg)" },
          "100%": { transform: "translateX(240%) skewX(-18deg)" },
        },
      },
      animation: {
        marquee: "marquee 32s linear infinite",
        float: "float 9s ease-in-out infinite",
        "gradient-pan": "gradient-pan 6s ease infinite",
        "pulse-ring": "pulse-ring 2.2s cubic-bezier(0.22,1,0.36,1) infinite",
        "spin-slow": "spin-slow 14s linear infinite",
      },
    },
  },
  plugins: [typography],
}
