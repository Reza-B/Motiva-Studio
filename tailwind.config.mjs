/** @type {import('tailwindcss').Config} */
import typography from "@tailwindcss/typography"

export default {
  darkMode: "class", // theme is toggled by adding/removing `.dark` on <html>
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Brand gradient endpoints (from the Motiva logo).
        brand: {
          orange: "#F7861E",
          pink: "#D81E77",
        },
        // Semantic tokens driven by CSS variables (see global.css) so they
        // react to the light/dark theme automatically.
        bg: "rgb(var(--bg) / <alpha-value>)",
        "bg-soft": "rgb(var(--bg-soft) / <alpha-value>)",
        surface: "rgb(var(--surface) / <alpha-value>)",
        fg: "rgb(var(--fg) / <alpha-value>)",
        "fg-muted": "rgb(var(--fg-muted) / <alpha-value>)",
        border: "rgb(var(--border) / <alpha-value>)",
      },
      fontFamily: {
        // `--font-sans` is swapped per-locale in global.css (Vazirmatn for fa,
        // Inter for en) so utility classes stay identical across languages.
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        fa: ["'Vazirmatn Variable'", "Vazirmatn", "system-ui", "sans-serif"],
        en: ["'Inter Variable'", "Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "brand-gradient":
          "linear-gradient(135deg, #F7861E 0%, #D81E77 100%)",
        "brand-gradient-soft":
          "linear-gradient(135deg, rgba(247,134,30,0.15) 0%, rgba(216,30,119,0.15) 100%)",
      },
      boxShadow: {
        glow: "0 0 60px -15px rgba(216, 30, 119, 0.45)",
        "glow-orange": "0 0 60px -15px rgba(247, 134, 30, 0.45)",
        soft: "0 10px 40px -12px rgba(0, 0, 0, 0.25)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-rtl": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-24px)" },
        },
        "gradient-pan": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        "marquee-rtl": "marquee-rtl 30s linear infinite",
        float: "float 8s ease-in-out infinite",
        "gradient-pan": "gradient-pan 8s ease infinite",
        "fade-up": "fade-up 0.7s ease forwards",
      },
    },
  },
  plugins: [typography],
}
