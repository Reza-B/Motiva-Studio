/* =============================================================
   Contact form — React island posting to Formspree (no backend).
   Client-side validation + honest error handling. If the
   Formspree ID is still the placeholder, we show a helpful
   fallback message with a direct email link instead of failing
   silently.
   ============================================================= */
import { useState } from "react"
import { motion } from "framer-motion"

interface Props {
  endpoint: string
  email: string
}

type Status = "idle" | "sending" | "success" | "error" | "unconfigured"

const budgets = [
  "زیر ۱۰ میلیون تومان",
  "۱۰ تا ۳۰ میلیون تومان",
  "۳۰ تا ۱۰۰ میلیون تومان",
  "بالای ۱۰۰ میلیون تومان",
  "هنوز نمی‌دانم",
]

export default function ContactForm({ endpoint, email }: Props) {
  const [status, setStatus] = useState<Status>("idle")

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget

    // Placeholder guard — tells the owner what to configure.
    if (endpoint.includes("xxxxxxxx")) {
      setStatus("unconfigured")
      return
    }

    setStatus("sending")
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      })
      if (!res.ok) throw new Error(String(res.status))
      form.reset()
      setStatus("success")
    } catch {
      setStatus("error")
    }
  }

  const inputCls =
    "w-full rounded-2xl border border-border bg-bg-soft px-5 py-3.5 text-fg placeholder:text-fg-muted/60 " +
    "outline-none transition focus:border-brand-pink focus:ring-2 focus:ring-brand-pink/30"

  return (
    <form onSubmit={onSubmit} dir="rtl" noValidate={false}>
      <h2 className="text-xl font-extrabold">فرم شروع پروژه</h2>
      <p className="mt-1.5 text-sm leading-7 text-fg-muted">
        چند خط بنویسید؛ حداکثر تا یک روز کاری بعد جواب می‌دهیم.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium">نام و نام خانوادگی</span>
          <input name="name" required autoComplete="name" className={inputCls} placeholder="مثلاً سارا محمدی" />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium">ایمیل</span>
          <input type="email" name="email" required autoComplete="email" dir="ltr" className={inputCls + " text-left"} placeholder="you@email.com" />
        </label>
      </div>

      <label className="mt-4 block">
        <span className="mb-1.5 block text-sm font-medium">حدود بودجه</span>
        <select name="budget" className={inputCls} defaultValue={budgets[4]}>
          {budgets.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>
      </label>

      <label className="mt-4 block">
        <span className="mb-1.5 block text-sm font-medium">دربارهٔ پروژه</span>
        <textarea
          name="message"
          required
          rows={5}
          className={inputCls + " resize-y"}
          placeholder="چه کسب‌وکاری دارید؟ چه ویدیویی در ذهنتان است؟ چه زمانی مد نظرتان است؟"
        />
      </label>

      <button type="submit" disabled={status === "sending"} className="btn-primary mt-6 w-full disabled:opacity-60">
        {status === "sending" ? "در حال ارسال…" : "ارسال درخواست"}
      </button>

      {status === "success" && (
        <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="mt-4 rounded-2xl border border-green-500/30 bg-green-500/10 px-5 py-3.5 text-sm leading-7 text-green-300" role="status">
          پیامتان رسید ✅ خیلی زود از طرف موتیوا خبری می‌شنوید.
        </motion.p>
      )}
      {status === "error" && (
        <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="mt-4 rounded-2xl border border-red-500/30 bg-red-500/10 px-5 py-3.5 text-sm leading-7 text-red-300" role="alert">
          ارسال نشد 😓 لطفاً دوباره تلاش کنید یا مستقیم به{" "}
          <a href={`mailto:${email}`} className="font-bold underline" dir="ltr">{email}</a>{" "}
          ایمیل بزنید.
        </motion.p>
      )}
      {status === "unconfigured" && (
        <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="mt-4 rounded-2xl border border-amber-500/30 bg-amber-500/10 px-5 py-3.5 text-sm leading-7 text-amber-300" role="alert">
          فرم هنوز به سرویس ارسال متصل نشده (شناسهٔ Formspree در <code dir="ltr">src/data/site.ts</code> را تنظیم کنید).
          فعلاً می‌توانید به{" "}
          <a href={`mailto:${email}`} className="font-bold underline" dir="ltr">{email}</a>{" "}
          ایمیل بزنید.
        </motion.p>
      )}
    </form>
  )
}
