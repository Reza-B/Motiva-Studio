/* =============================================================
   Central UI string table for both locales.
   Persian (fa) is authored first as the primary language.
   Add a new key here and it is available via the t() helper
   returned by useTranslations() (see ./utils.ts).
   ============================================================= */

export const languages = {
  fa: "فارسی",
  en: "English",
} as const

export type Lang = keyof typeof languages
export const defaultLang: Lang = "fa"
export const showDefaultLang = false // fa lives at "/", not "/fa"

// Text direction per locale.
export const dir: Record<Lang, "rtl" | "ltr"> = {
  fa: "rtl",
  en: "ltr",
}

export const ui = {
  fa: {
    "site.name": "استودیو موتیوا",
    "site.tagline": "استودیوی تبلیغات ویدیویی",
    "site.description":
      "استودیو موتیوا — ساخت ویدیوی تبلیغاتی، موشن گرافیک و تیزر محصول برای برندهای جاه‌طلب.",

    "nav.home": "خانه",
    "nav.services": "خدمات",
    "nav.portfolio": "نمونه‌کارها",
    "nav.about": "درباره ما",
    "nav.blog": "بلاگ",
    "nav.contact": "تماس",
    "nav.cta": "شروع پروژه",

    "theme.toggle": "تغییر پوسته",
    "lang.switch": "تغییر زبان",
    "menu.open": "باز کردن منو",
    "menu.close": "بستن منو",

    "hero.badge": "استودیوی خلاق ویدیو",
    "hero.title.1": "ویدیویی که",
    "hero.title.2": "حرکت‌ساز است",
    "hero.subtitle":
      "ما برای برندها ویدیوی تبلیغاتی، تیزر محصول و موشن گرافیکی می‌سازیم که دیده می‌شود و فروش می‌آورد.",
    "hero.cta.primary": "شروع پروژه",
    "hero.cta.secondary": "تماشای نمونه‌کارها",
    "hero.scroll": "برای کشف اسکرول کنید",

    "services.title": "خدمات ما",
    "services.subtitle": "راهکارهای ویدیویی کامل برای رشد برند شما",
    "services.more": "مشاهده همه خدمات",

    "portfolio.title": "نمونه‌کارها",
    "portfolio.subtitle": "گزیده‌ای از پروژه‌های اخیر",
    "portfolio.all": "همه",
    "portfolio.view": "تماشا",
    "portfolio.more": "دیدن همه نمونه‌کارها",

    "process.title": "فرآیند کار ما",
    "process.subtitle": "از ایده تا تحویل نهایی",

    "pricing.title": "پکیج‌های قیمتی",
    "pricing.subtitle": "پلنی برای هر اندازه از کسب‌وکار",
    "pricing.popular": "پرطرفدارترین",
    "pricing.cta": "انتخاب پکیج",
    "pricing.from": "شروع از",

    "testimonials.title": "نظر مشتریان",
    "testimonials.subtitle": "اعتمادی که مایه افتخار ماست",

    "stats.title": "در یک نگاه",
    "stats.projects": "پروژه موفق",
    "stats.clients": "مشتری راضی",
    "stats.views": "بازدید (میلیون)",
    "stats.awards": "جایزه و تقدیر",

    "cta.title": "آماده‌اید ویدیوی بعدی‌تان را بسازیم؟",
    "cta.subtitle": "ایده‌تان را با ما در میان بگذارید و مشاوره رایگان بگیرید.",
    "cta.button": "تماس با ما",

    "blog.title": "بلاگ",
    "blog.subtitle": "مقاله‌ها، آموزش و بینش درباره تولید ویدیو",
    "blog.readmore": "ادامه مطلب",
    "blog.readingTime": "دقیقه مطالعه",
    "blog.all": "همه مقاله‌ها",
    "blog.categories": "دسته‌بندی‌ها",
    "blog.tags": "برچسب‌ها",
    "blog.published": "منتشر شده در",
    "blog.back": "بازگشت به بلاگ",

    "contact.title": "تماس با ما",
    "contact.subtitle": "پروژه‌ای در ذهن دارید؟ برایمان بنویسید.",
    "contact.name": "نام",
    "contact.email": "ایمیل",
    "contact.message": "پیام",
    "contact.budget": "بودجه تقریبی",
    "contact.send": "ارسال پیام",
    "contact.sending": "در حال ارسال…",
    "contact.success": "پیام شما ارسال شد. به‌زودی پاسخ می‌دهیم!",
    "contact.error": "خطایی رخ داد. دوباره تلاش کنید.",
    "contact.social": "ما را دنبال کنید",

    "footer.rights": "تمامی حقوق محفوظ است.",
    "footer.madeWith": "طراحی و ساخته شده در استودیو موتیوا",
    "footer.nav": "لینک‌ها",
    "footer.newsletter": "خبرنامه",
    "footer.newsletter.desc": "تازه‌ترین پروژه‌ها و مقاله‌ها را دریافت کنید.",

    "404.title": "صفحه پیدا نشد",
    "404.subtitle": "صفحه‌ای که دنبالش بودید وجود ندارد.",
    "404.home": "بازگشت به خانه",
  },

  en: {
    "site.name": "Motiva Studio",
    "site.tagline": "Video Advertising Studio",
    "site.description":
      "Motiva Studio — advertising videos, motion graphics, and product teasers for ambitious brands.",

    "nav.home": "Home",
    "nav.services": "Services",
    "nav.portfolio": "Portfolio",
    "nav.about": "About",
    "nav.blog": "Blog",
    "nav.contact": "Contact",
    "nav.cta": "Start a project",

    "theme.toggle": "Toggle theme",
    "lang.switch": "Switch language",
    "menu.open": "Open menu",
    "menu.close": "Close menu",

    "hero.badge": "Creative video studio",
    "hero.title.1": "Video that",
    "hero.title.2": "moves people",
    "hero.subtitle":
      "We craft advertising videos, product teasers, and motion graphics that get seen and drive sales for ambitious brands.",
    "hero.cta.primary": "Start a project",
    "hero.cta.secondary": "Watch our work",
    "hero.scroll": "Scroll to explore",

    "services.title": "Our Services",
    "services.subtitle": "End-to-end video solutions to grow your brand",
    "services.more": "See all services",

    "portfolio.title": "Portfolio",
    "portfolio.subtitle": "A selection of recent projects",
    "portfolio.all": "All",
    "portfolio.view": "View",
    "portfolio.more": "See all work",

    "process.title": "Our Process",
    "process.subtitle": "From idea to final delivery",

    "pricing.title": "Pricing Packages",
    "pricing.subtitle": "A plan for every size of business",
    "pricing.popular": "Most popular",
    "pricing.cta": "Choose plan",
    "pricing.from": "From",

    "testimonials.title": "What clients say",
    "testimonials.subtitle": "Trust that we are proud of",

    "stats.title": "At a glance",
    "stats.projects": "Projects delivered",
    "stats.clients": "Happy clients",
    "stats.views": "Views (millions)",
    "stats.awards": "Awards & mentions",

    "cta.title": "Ready to make your next video?",
    "cta.subtitle": "Tell us your idea and get a free consultation.",
    "cta.button": "Get in touch",

    "blog.title": "Blog",
    "blog.subtitle": "Articles, tutorials, and insights on video production",
    "blog.readmore": "Read more",
    "blog.readingTime": "min read",
    "blog.all": "All posts",
    "blog.categories": "Categories",
    "blog.tags": "Tags",
    "blog.published": "Published on",
    "blog.back": "Back to blog",

    "contact.title": "Contact us",
    "contact.subtitle": "Have a project in mind? Drop us a line.",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.message": "Message",
    "contact.budget": "Approx. budget",
    "contact.send": "Send message",
    "contact.sending": "Sending…",
    "contact.success": "Your message was sent. We'll reply soon!",
    "contact.error": "Something went wrong. Please try again.",
    "contact.social": "Follow us",

    "footer.rights": "All rights reserved.",
    "footer.madeWith": "Designed & built at Motiva Studio",
    "footer.nav": "Links",
    "footer.newsletter": "Newsletter",
    "footer.newsletter.desc": "Get our latest projects and articles.",

    "404.title": "Page not found",
    "404.subtitle": "The page you were looking for doesn't exist.",
    "404.home": "Back home",
  },
} as const

export type UIKey = keyof (typeof ui)[typeof defaultLang]
