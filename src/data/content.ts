/* =============================================================
   Bilingual structured content for the marketing sections
   (services, process, pricing, testimonials).
   Kept in code (not a CMS) so it ships as static data.
   Each entry carries `fa` and `en` fields.
   ============================================================= */

import type { Lang } from "@i18n/utils"

export type Localized<T = string> = Record<Lang, T>

export interface Service {
  id: string
  icon: string // inline SVG path data (24x24 viewBox)
  title: Localized
  description: Localized
  features: Localized<string[]>
}

export const services: Service[] = [
  {
    id: "social",
    icon: "M4 4h16v12H5.17L4 17.17V4m0-2a2 2 0 0 0-2 2v18l4-4h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4z",
    title: { fa: "ویدیوی شبکه‌های اجتماعی", en: "Social Media Videos" },
    description: {
      fa: "ویدیوهای کوتاه و وایرال برای اینستاگرام، ریلز و استوری که مخاطب را درگیر می‌کند.",
      en: "Short, scroll-stopping videos for Instagram Reels, Stories, and TikTok that boost engagement.",
    },
    features: {
      fa: ["ریلز و استوری", "زیرنویس حرفه‌ای", "بهینه‌سازی برای هر پلتفرم"],
      en: ["Reels & Stories", "Pro captions", "Per-platform optimization"],
    },
  },
  {
    id: "teaser",
    icon: "M8 5v14l11-7z",
    title: { fa: "تیزر محصول", en: "Product Teasers" },
    description: {
      fa: "تیزرهای محصول سینمایی که ارزش محصول شما را در چند ثانیه به نمایش می‌گذارند.",
      en: "Cinematic product teasers that communicate your value in seconds and spark demand.",
    },
    features: {
      fa: ["فیلمبرداری محصول", "نورپردازی استودیویی", "تدوین ریتمیک"],
      en: ["Product cinematography", "Studio lighting", "Rhythmic editing"],
    },
  },
  {
    id: "motion",
    icon: "M12 2 2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
    title: { fa: "موشن گرافیک", en: "Motion Graphics" },
    description: {
      fa: "انیمیشن و موشن گرافیک حرفه‌ای برای توضیح ایده‌های پیچیده به زبان ساده.",
      en: "Professional animation and motion graphics that explain complex ideas simply and beautifully.",
    },
    features: {
      fa: ["انیمیشن دو‌بعدی و سه‌بعدی", "اینفوگرافیک متحرک", "لوگو موشن"],
      en: ["2D & 3D animation", "Animated infographics", "Logo motion"],
    },
  },
  {
    id: "brand",
    icon: "M12 2l2.4 7.4H22l-6 4.6 2.3 7.4-6.3-4.6L5.7 21 8 14 2 9.4h7.6z",
    title: { fa: "ویدیوی برند", en: "Brand Videos" },
    description: {
      fa: "روایت داستان برند شما در قالب ویدیویی احساسی و ماندگار.",
      en: "Telling your brand story through emotional, memorable films that build lasting connection.",
    },
    features: {
      fa: ["فیلمنامه و کارگردانی", "تصویربرداری سینمایی", "موسیقی اختصاصی"],
      en: ["Script & direction", "Cinematic shooting", "Original score"],
    },
  },
]

export interface ProcessStep {
  step: string
  title: Localized
  description: Localized
}

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: { fa: "کشف و ایده‌پردازی", en: "Discovery & Ideation" },
    description: {
      fa: "اهداف، مخاطب و پیام برند شما را می‌فهمیم و کانسپت خلاق می‌سازیم.",
      en: "We understand your goals, audience, and message, then craft a creative concept.",
    },
  },
  {
    step: "02",
    title: { fa: "پیش‌تولید", en: "Pre-production" },
    description: {
      fa: "فیلمنامه، استوری‌بورد و برنامه‌ریزی کامل اجرا.",
      en: "Script, storyboard, and full production planning.",
    },
  },
  {
    step: "03",
    title: { fa: "تولید", en: "Production" },
    description: {
      fa: "فیلمبرداری حرفه‌ای با تجهیزات روز و تیم متخصص.",
      en: "Professional shooting with modern gear and an expert crew.",
    },
  },
  {
    step: "04",
    title: { fa: "پس‌تولید و تحویل", en: "Post & Delivery" },
    description: {
      fa: "تدوین، اصلاح رنگ، صدا و تحویل در فرمت‌های دلخواه.",
      en: "Editing, color grading, sound design, and delivery in every format you need.",
    },
  },
]

export interface PricingPlan {
  id: string
  name: Localized
  price: Localized
  popular?: boolean
  features: Localized<string[]>
}

export const pricing: PricingPlan[] = [
  {
    id: "basic",
    name: { fa: "پایه", en: "Basic" },
    price: { fa: "۱۵ میلیون تومان", en: "$490" },
    features: {
      fa: ["یک ویدیوی ۳۰ ثانیه‌ای", "تدوین پایه", "۲ بازنگری", "تحویل ۴ک"],
      en: ["One 30s video", "Basic editing", "2 revisions", "4K delivery"],
    },
  },
  {
    id: "pro",
    name: { fa: "حرفه‌ای", en: "Pro" },
    price: { fa: "۴۵ میلیون تومان", en: "$1,290" },
    popular: true,
    features: {
      fa: [
        "تا ۳ ویدیو",
        "موشن گرافیک و زیرنویس",
        "اصلاح رنگ حرفه‌ای",
        "۵ بازنگری",
        "موسیقی اختصاصی",
      ],
      en: [
        "Up to 3 videos",
        "Motion graphics & captions",
        "Pro color grading",
        "5 revisions",
        "Licensed music",
      ],
    },
  },
  {
    id: "premium",
    name: { fa: "پرمیوم", en: "Premium" },
    price: { fa: "تماس بگیرید", en: "Custom" },
    features: {
      fa: [
        "کمپین ویدیویی کامل",
        "کارگردانی و فیلمنامه",
        "تیم اختصاصی",
        "بازنگری نامحدود",
        "مدیریت پروژه اختصاصی",
      ],
      en: [
        "Full video campaign",
        "Direction & scriptwriting",
        "Dedicated crew",
        "Unlimited revisions",
        "Dedicated project manager",
      ],
    },
  },
]

export interface Testimonial {
  name: Localized
  role: Localized
  quote: Localized
}

export const testimonials: Testimonial[] = [
  {
    name: { fa: "سارا محمدی", en: "Sara Mohammadi" },
    role: { fa: "مدیر بازاریابی، دیجی‌کالا", en: "Marketing Lead, Digikala" },
    quote: {
      fa: "تیم موتیوا کاملاً فراتر از انتظار عمل کرد. ویدیوی ما بیش از ۳ میلیون بازدید گرفت.",
      en: "The Motiva team far exceeded expectations. Our video hit over 3 million views.",
    },
  },
  {
    name: { fa: "علی رضایی", en: "Ali Rezaei" },
    role: { fa: "بنیانگذار، استارت‌آپ زرین", en: "Founder, Zarrin" },
    quote: {
      fa: "کیفیت سینمایی و خلاقیت بی‌نظیر. دقیقاً همان حسی که می‌خواستیم.",
      en: "Cinematic quality and unmatched creativity. Exactly the feeling we wanted.",
    },
  },
  {
    name: { fa: "مریم کریمی", en: "Maryam Karimi" },
    role: { fa: "مدیر برند، فیلیمو", en: "Brand Manager, Filimo" },
    quote: {
      fa: "فرآیند حرفه‌ای، تحویل به‌موقع و نتیجه‌ای که فروش ما را بالا برد.",
      en: "Professional process, on-time delivery, and results that lifted our sales.",
    },
  },
]
