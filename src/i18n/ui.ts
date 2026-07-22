/* =============================================================
   Central UI string table for both locales.
   Persian (fa) is authored first as the primary language.
   Add a new key here and it is available via the t() helper
   returned by useTranslations() (see ./utils.ts).

   Copy voice: warm, confident, modern, punchy — benefit-driven
   (more sales, more engagement, a stronger brand). SEO keywords
   are woven naturally into headings and descriptions.
   ============================================================= */

export const languages = {
	fa: "فارسی",
	en: "English",
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = "fa";
export const showDefaultLang = false; // fa lives at "/", not "/fa"

// Text direction per locale.
export const dir: Record<Lang, "rtl" | "ltr"> = {
	fa: "rtl",
	en: "ltr",
};

export const ui = {
	fa: {
		"site.name": "استودیو موتیوا",
		"site.tagline": "استودیوی تبلیغات ویدیویی",
		"site.description":
			"استودیو موتیوا — ساخت ویدیوی تبلیغاتی، تیزر محصول و موشن گرافیک که دیده می‌شود و فروش می‌آورد.",

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
		"hero.title.2": "فروش می‌سازد",
		"hero.subtitle":
			"ما ویدیوی تبلیغاتی، تیزر محصول و موشن گرافیک می‌سازیم که اسکرول را متوقف می‌کند، دیده می‌شود و مشتری می‌آورد.",
		"hero.cta.primary": "شروع پروژه",
		"hero.cta.secondary": "تماشای نمونه‌کارها",
		"hero.scroll": "برای کشف اسکرول کنید",

		"services.title": "خدمات ما",
		"services.subtitle":
			"از ریلز تا فیلم برند — راهکار ویدیویی کامل برای رشد کسب‌وکار شما",
		"services.more": "مشاهده همه خدمات",
		"services.included": "چه چیزی شامل می‌شود",

		"why.title": "چرا موتیوا؟",
		"why.subtitle": "خلاقیت جوان، اجرای حرفه‌ای، نتیجه‌ی قابل اندازه‌گیری",

		"portfolio.title": "نمونه‌کارها",
		"portfolio.subtitle": "گزیده‌ای از پروژه‌های اخیر",
		"portfolio.intro":
			"هر پروژه یک هدف داشته: دیده شدن بیشتر، تعامل بالاتر و فروش واقعی. گزیده‌ای از ویدیوهایی که برای کافه‌ها، فروشگاه‌های آنلاین، کلینیک‌ها و برندهای املاک ساختیم را ببینید.",
		"portfolio.all": "همه",
		"portfolio.view": "تماشا",
		"portfolio.more": "دیدن همه نمونه‌کارها",

		"process.title": "فرآیند کار ما",
		"process.subtitle": "از ایده تا تحویل نهایی، شفاف و بدون استرس",

		"pricing.title": "پکیج‌های قیمتی",
		"pricing.subtitle": "پلانی برای هر اندازه از کسب‌وکار",
		"pricing.popular": "پرطرفدارترین",
		"pricing.cta": "انتخاب پکیج",
		"pricing.from": "شروع از",
		"pricing.note":
			"هر کسب‌وکار متفاوت است. برای پروژه‌های سفارشی پیام بدهید تا یک پیشنهاد قیمت اختصاصی برایتان آماده کنیم.",

		"testimonials.title": "نظر مشتریان",
		"testimonials.subtitle": "اعتمادی که مایه افخار ماست",
		"testimonials.note": " (نمونه — نظرات نمایشی برای قالب است)",

		"stats.title": "در یک نگاه",
		"stats.projects": "پروژه موفق",
		"stats.clients": "مشتری راضی",
		"stats.views": "بازدید (میلیون)",
		"stats.awards": "جایزه و تقدیر",

		"cta.title": "آماده‌اید ویدیوی بعدی‌تان را بسازیم؟",
		"cta.subtitle": "ایده‌تان را با ما در میان بگذارید و مشاوره رایگان بگیرید.",
		"cta.button": "تماس با ما",

		"blog.title": "بلاگ",
		"blog.subtitle": "مقاله‌ها، آموزش و بینش درباره بازاریابی ویدیویی",
		"blog.readmore": "ادامه مطلب",
		"blog.readingTime": "دقیقه مطالعه",
		"blog.all": "همه مقاله‌ها",
		"blog.categories": "دسته‌بندی‌ها",
		"blog.tags": "برچسب‌ها",
		"blog.published": "منتشر شده در",
		"blog.back": "بازگشت به بلاگ",

		"contact.title": "بیایید یک ویدیوی عالی بسازیم",
		"contact.subtitle":
			"پروژه‌ای در ذهن دارید؟ فرم زیر را پر کنید؛ در کمتر از یک روز کاری پاسخ می‌دهیم.",
		"contact.name": "نام",
		"contact.email": "ایمیل",
		"contact.message": "درباره پروژه‌تان بگویید",
		"contact.budget": "بودجه تقریبی",
		"contact.send": "ارسال پیام",
		"contact.sending": "در حال ارسال…",
		"contact.success": "پیام شما ارسال شد. به‌زودی پاسخ می‌دهیم!",
		"contact.error": "خطایی رخ داد. دوباره تلاش کنید.",
		"contact.social": "ما را دنبال کنید",

		"footer.tagline": "ویدیویی که دیده می‌شود و فروش می‌آورد.",
		"footer.rights": "تمامی حقوق محفوظ است.",
		"footer.madeWith": "طراحی و ساخته شده در استودیو موتیوا",
		"footer.nav": "لینک‌ها",
		"footer.newsletter": "خبرنامه",
		"footer.newsletter.desc": "تازه‌ترین پروژه‌ها و مقاله‌ها را دریافت کنید.",

		"404.title": "صفحه پیدا نشد",
		"404.subtitle": "صفحه‌ای که دنبالش بودید وجود ندارد.",
		"404.home": "بازگشت به خانه",

		/* ---- Per-page SEO (title ≤ ~60 chars, description ≤ ~155) ---- */
		"seo.home.title": "استودیو موتیوا | ساخت ویدیوی تبلیغاتی و موشن گرافیک",
		"seo.home.desc":
			"ساخت ویدیوی تبلیغاتی، تیزر محصول، موشن گرافیک و تدوین ویدیو اینستاگرام در استودیو موتیوا — ویدیویی که دیده می‌شود و فروش می‌آورد.",
		"seo.home.keywords":
			"ساخت ویدیوی تبلیغاتی, تیزر تبلیغاتی, موشن گرافیک, تدوین ویدیو اینستاگرام, استودیو ویدیو",

		"seo.services.title": "خدمات ساخت ویدیوی تبلیغاتی | استودیو موتیوا",
		"seo.services.desc":
			"ویدیوی شبکه‌های اجتماعی، تیزر محصول، موشن گرافیک و فیلم برند؛ راهکار ویدیویی کامل برای رشد کسب‌وکار شما.",
		"seo.services.keywords":
			"خدمات ویدیویی, ساخت ریلز, تیزر محصول, موشن گرافیک, فیلم برند",

		"seo.portfolio.title": "نمونه‌کارها و شوریل | استودیو موتیوا",
		"seo.portfolio.desc":
			"نمونه‌کارهای ساخت ویدیوی تبلیغاتی، تیزر محصول و موشن گرافیک موتیوا برای کافه، فروشگاه آنلاین، کلینیک و املاک.",
		"seo.portfolio.keywords":
			"نمونه کار ویدیو, شوریل, تیزر تبلیغاتی, ویدیوی اینستاگرام, موشن گرافیک",

		"seo.about.title": "درباره استودیو موتیوا | تیم خلاق ویدیو",
		"seo.about.desc":
			"موتیوا یک استودیوی خلاق ساخت ویدیوی تبلیغاتی است که به برندها کمک می‌کند دیده شوند، به یاد بمانند و بفروشند.",
		"seo.about.keywords":
			"استودیو ویدیو, تیم تولید ویدیو, کارگردانی تبلیغ, موتیوا, موشن گرافیک",

		"seo.contact.title": "تماس با استودیو موتیوا | مشاوره رایگان ویدیو",
		"seo.contact.desc":
			"پروژه ویدیوی تبلیغاتی خود را با موتیوا شروع کنید. فرم را پر کنید یا در اینستاگرام پیام بدهید تا مشاوره رایگان بگیرید.",
		"seo.contact.keywords":
			"تماس استودیو ویدیو, سفارش ویدیوی تبلیغاتی, مشاوره ویدیو, قیمت تیزر",

		"seo.blog.title": "بلاگ بازاریابی ویدیویی | استودیو موتیوا",
		"seo.blog.desc":
			"آموزش و بینش درباره بازاریابی ویدیویی، ساخت ریلز، تیزر تبلیغاتی و تدوین ویدیو برای کسب‌وکارها.",
		"seo.blog.keywords":
			"بازاریابی ویدیویی, ساخت ریلز, تیزر تبلیغاتی, تدوین ویدیو, محتوای اینستاگرام",
	},

	en: {
		"site.name": "Motiva Studio",
		"site.tagline": "Video Advertising Studio",
		"site.description":
			"Motiva Studio — advertising videos, product teasers, and motion graphics that get seen and drive sales for ambitious brands.",

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
		"hero.title.2": "drives sales",
		"hero.subtitle":
			"We craft social videos, product teasers, and motion graphics that stop the scroll, get seen, and turn views into customers.",
		"hero.cta.primary": "Start a project",
		"hero.cta.secondary": "Watch our work",
		"hero.scroll": "Scroll to explore",

		"services.title": "Our Services",
		"services.subtitle":
			"From Reels to brand films — end-to-end video solutions to grow your business",
		"services.more": "See all services",
		"services.included": "What's included",

		"why.title": "Why Motiva?",
		"why.subtitle":
			"Young creativity, professional execution, measurable results",

		"portfolio.title": "Portfolio",
		"portfolio.subtitle": "A selection of recent projects",
		"portfolio.intro":
			"Every project has one job: more views, more engagement, real sales. Explore a selection of videos we've made for cafes, online shops, clinics, and real-estate brands.",
		"portfolio.all": "All",
		"portfolio.view": "View",
		"portfolio.more": "See all work",

		"process.title": "Our Process",
		"process.subtitle": "From idea to final delivery — clear and stress-free",

		"pricing.title": "Pricing Packages",
		"pricing.subtitle": "A plan for every size of business",
		"pricing.popular": "Most popular",
		"pricing.cta": "Choose plan",
		"pricing.from": "From",
		"pricing.note":
			"Every business is different. Message us for custom projects and we'll prepare a tailored quote for you.",

		"testimonials.title": "What clients say",
		"testimonials.subtitle": "Trust that we are proud of",
		"testimonials.note": " (Sample — placeholder reviews for this template)",

		"stats.title": "At a glance",
		"stats.projects": "Projects delivered",
		"stats.clients": "Happy clients",
		"stats.views": "Views (millions)",
		"stats.awards": "Awards & mentions",

		"cta.title": "Ready to make your next video?",
		"cta.subtitle": "Tell us your idea and get a free consultation.",
		"cta.button": "Get in touch",

		"blog.title": "Blog",
		"blog.subtitle": "Articles, tutorials, and insights on video marketing",
		"blog.readmore": "Read more",
		"blog.readingTime": "min read",
		"blog.all": "All posts",
		"blog.categories": "Categories",
		"blog.tags": "Tags",
		"blog.published": "Published on",
		"blog.back": "Back to blog",

		"contact.title": "Let's make a video that works",
		"contact.subtitle":
			"Have a project in mind? Fill out the form below — we reply within one business day.",
		"contact.name": "Name",
		"contact.email": "Email",
		"contact.message": "Tell us about your project",
		"contact.budget": "Approx. budget",
		"contact.send": "Send message",
		"contact.sending": "Sending…",
		"contact.success": "Your message was sent. We'll reply soon!",
		"contact.error": "Something went wrong. Please try again.",
		"contact.social": "Follow us",

		"footer.tagline": "Video that gets seen and drives sales.",
		"footer.rights": "All rights reserved.",
		"footer.madeWith": "Designed & built at Motiva Studio",
		"footer.nav": "Links",
		"footer.newsletter": "Newsletter",
		"footer.newsletter.desc": "Get our latest projects and articles.",

		"404.title": "Page not found",
		"404.subtitle": "The page you were looking for doesn't exist.",
		"404.home": "Back home",

		/* ---- Per-page SEO (title ≤ ~60 chars, description ≤ ~155) ---- */
		"seo.home.title": "Motiva Studio | Video Ad Production & Motion Graphics",
		"seo.home.desc":
			"Motiva Studio makes advertising videos, product teasers, motion graphics, and Instagram video editing that get seen and drive sales.",
		"seo.home.keywords":
			"video ad production, product teaser, motion graphics, Instagram video editing, brand video",

		"seo.services.title": "Video Production Services | Motiva Studio",
		"seo.services.desc":
			"Social media videos, product teasers, motion graphics, and brand films — end-to-end video solutions to grow your business.",
		"seo.services.keywords":
			"video production services, reels production, product teaser, motion graphics, brand video",

		"seo.portfolio.title": "Portfolio & Showreel | Motiva Studio",
		"seo.portfolio.desc":
			"Explore Motiva Studio's advertising videos, product teasers, and motion graphics for cafes, online shops, clinics, and real estate.",
		"seo.portfolio.keywords":
			"video portfolio, showreel, product teaser, Instagram video, motion graphics",

		"seo.about.title": "About Motiva Studio | Creative Video Team",
		"seo.about.desc":
			"Motiva Studio is a creative advertising-video studio that helps brands get seen, be remembered, and sell. Meet the team behind the work.",
		"seo.about.keywords":
			"video studio, video production team, ad direction, Motiva, motion graphics",

		"seo.contact.title": "Contact Motiva Studio | Free Video Consult",
		"seo.contact.desc":
			"Start your advertising video project with Motiva. Fill out the form or DM us on Instagram for a free consultation and a custom quote.",
		"seo.contact.keywords":
			"contact video studio, order advertising video, video consultation, teaser pricing",

		"seo.blog.title": "Video Marketing Blog | Motiva Studio",
		"seo.blog.desc":
			"Tips and insights on video marketing, Reels production, ad teasers, and video editing for restaurants, shops, clinics, and real estate.",
		"seo.blog.keywords":
			"video marketing, reels production, ad teaser, video editing, Instagram content",
	},
} as const;

export type UIKey = keyof (typeof ui)[typeof defaultLang];
