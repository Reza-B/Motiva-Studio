/* =============================================================
   پیکربندی کلی سایت و لینک‌های اجتماعی.
   برای تغییر برند یا آدرس‌ها فقط همین فایل را ویرایش کنید.
   ============================================================= */

export const SITE_URL = "https://motiva.studio"

export const social = {
  instagram: "https://instagram.com/motiva.studio",
  telegram: "https://t.me/motivastudio",
  email: "hello@motiva.studio",
  phone: "+98 21 0000 0000",
}

/**
 * Endpoint فرم تماس (Formspree، بدون بک‌اند).
 * یک فرم رایگان در https://formspree.io بسازید و شناسه‌اش را اینجا بگذارید.
 * تا وقتی شناسه واقعی نگذاشته‌اید، فرم پیام خطا نشان می‌دهد.
 */
export const FORMSPREE_ID = "xxxxxxxx" // مثلاً "mvojabcd"
export const FORMSPREE_ENDPOINT = "https://formspree.io/f/" + FORMSPREE_ID

/** نشانی برای دادهٔ ساخت‌یافتهٔ LocalBusiness. */
export const business = {
  legalName: "Motiva Studio",
  streetAddress: "Valiasr St.",
  city: "Tehran",
  region: "Tehran",
  postalCode: "0000000000",
  country: "IR",
  latitude: 35.7219,
  longitude: 51.3347,
  priceRange: "$$",
}

/**
 * صنایعی که برایشان ویدیو می‌سازیم — در نوار متحرک صفحهٔ اصلی نمایش داده
 * می‌شود. (به‌جای لوگوی مشتریانِ فرضی، حوزه‌های کاری واقعی را می‌گوییم.)
 */
export const industries = [
  "کافه و رستوران",
  "فروشگاه آنلاین",
  "کلینیک زیبایی",
  "املاک و مستغلات",
  "استارتاپ و اپلیکیشن",
  "پوشاک و مد",
  "آموزش آنلاین",
  "سلامت و ورزش",
]

/**
 * شمارنده‌های صفحهٔ اصلی.
 * ⚠️ این اعداد را با آمار واقعی کسب‌وکارتان جایگزین کنید.
 */
export const stats = [
  { value: 320, suffix: "+", label: "پروژهٔ تحویل‌شده" },
  { value: 140, suffix: "+", label: "مشتری همراه" },
  { value: 85, suffix: "M", label: "بازدید ویدیوها (میلیون)" },
  { value: 24, suffix: "", label: "جایزه و تقدیر" },
]
