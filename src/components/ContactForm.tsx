/* =============================================================
   ContactForm — React island. Submits to Formspree via fetch
   (no custom backend). Handles loading / success / error states
   with Framer Motion feedback. Fully labelled & keyboard-friendly.
   ============================================================= */
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Labels {
  name: string
  email: string
  budget: string
  message: string
  send: string
  sending: string
  success: string
  error: string
}

interface Props {
  endpoint: string
  labels: Labels
  lang: "fa" | "en"
}

type Status = "idle" | "loading" | "success" | "error"

export default function ContactForm({ endpoint, labels }: Props) {
  const [status, setStatus] = useState<Status>("idle")

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    setStatus("loading")
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      })
      if (res.ok) {
        setStatus("success")
        form.reset()
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  const field =
    "w-full rounded-2xl border border-border bg-surface px-4 py-3 outline-none transition focus:border-brand-pink"

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm font-medium">{labels.name}</span>
          <input name="name" type="text" required autoComplete="name" className={field} />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-medium">{labels.email}</span>
          <input name="email" type="email" required autoComplete="email" className={field} />
        </label>
      </div>

      <label className="block">
        <span className="mb-2 block text-sm font-medium">{labels.budget}</span>
        <input name="budget" type="text" className={field} />
      </label>

      <label className="block">
        <span className="mb-2 block text-sm font-medium">{labels.message}</span>
        <textarea name="message" required rows={5} className={field} />
      </label>

      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-primary w-full disabled:opacity-60"
      >
        {status === "loading" ? labels.sending : labels.send}
      </button>

      <AnimatePresence>
        {(status === "success" || status === "error") && (
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            role="status"
            className={
              "rounded-2xl px-4 py-3 text-center text-sm " +
              (status === "success"
                ? "bg-green-500/15 text-green-500"
                : "bg-red-500/15 text-red-500")
            }
          >
            {status === "success" ? labels.success : labels.error}
          </motion.p>
        )}
      </AnimatePresence>
    </form>
  )
}
