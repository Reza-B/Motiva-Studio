/* =============================================================
   Bilingual structured content for the marketing sections
   (services, value props, process, pricing, testimonials).
   Kept in code (not a CMS) so it ships as static data.
   Each entry carries `fa` (primary) and `en` fields.

   Voice: warm, confident, modern, punchy — benefit-driven.
   Pricing uses placeholders (“قیمت بر اساس پروژه”), never invented numbers.
   ============================================================= */

import type { Lang } from "@i18n/utils";

export type Localized<T = string> = Record<Lang, T>;

export interface Service {
	id: string;
	icon: string; // inline SVG path data (24x24 viewBox)
	title: Localized;
	description: Localized;
	features: Localized<string[]>;
}

export const services: Service[] = [
	{
		id: "social",
		icon: "M4 4h16v12H5.17L4 17.17V4m0-2a2 2 0 0 0-2 2v18l4-4h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4z",
		title: { fa: "ویدیوی شبکه‌های اجتماعی", en: "Social Media Videos" },
		description: {
			fa: "ریلز، استوری و ویدیوی کوتاهی که اسکرول را متوقف می‌کند. محتوایی می‌سازیم که دیده می‌شود، ذخیره می‌شود و به فروش می‌رسد. مناسب کافه، فروشگاه آنلاین و کلینیک.",
			en: "Reels, Stories, and shorts that stop the scroll. We craft content that gets seen, saved, and converts — perfect for cafes, online shops, and clinics.",
		},
		features: {
			fa: [
				"ریلز و استوری",
				"زیرنویس حرفه‌ای",
				"قلاب در ثانیه‌ی اول",
				"بهینه‌سازی برای هر پلتفرم",
			],
			en: [
				"Reels & Stories",
				"Pro captions",
				"First-second hook",
				"Per-platform optimization",
			],
		},
	},
	{
		id: "teaser",
		icon: "M8 5v14l11-7z",
		title: { fa: "تیزر تبلیغاتی محصول", en: "Product Teasers" },
		description: {
			fa: "تیزرهای محصول سینمایی که ارزش محصول شما را در چند ثانیه نشان می‌دهند. تصویر درجه‌یک و تدوین ریتمیک که مشتری را به خرید ترغیب می‌کند.",
			en: "Cinematic product teasers that show your value in seconds. Premium visuals and rhythmic editing that spark demand and move people to buy.",
		},
		features: {
			fa: [
				"فیلمبرداری محصول",
				"نورپردازی استودیویی",
				"تدوین ریتمیک",
				"نسخه‌ی عمودی و افقی",
			],
			en: [
				"Product cinematography",
				"Studio lighting",
				"Rhythmic editing",
				"Vertical & landscape cuts",
			],
		},
	},
	{
		id: "motion",
		icon: "M12 2 2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
		title: { fa: "موشن گرافیک", en: "Motion Graphics" },
		description: {
			fa: "انیمیشن و موشن گرافیک حرفه‌ای که ایده‌های پیچیده را ساده می‌کند. برای توضیح خدمات، معرفی اپلیکیشن یا جان دادن به لوگوی برند.",
			en: "Professional animation that makes complex ideas simple. Ideal for explaining services, launching apps, or bringing your logo to life.",
		},
		features: {
			fa: [
				"انیمیشن دوبعدی و سه‌بعدی",
				"اینفوگرافیک متحرک",
				"لوگو موشن",
				"طراحی صدا",
			],
			en: [
				"2D & 3D animation",
				"Animated infographics",
				"Logo motion",
				"Sound design",
			],
		},
	},
	{
		id: "brand",
		icon: "M12 2l2.4 7.4H22l-6 4.6 2.3 7.4-6.3-4.6L5.7 21 8 14 2 9.4h7.6z",
		title: { fa: "فیلم برند", en: "Brand Videos" },
		description: {
			fa: "داستان برند شما را در قالب یک فیلم احساسی و ماندگار روایت می‌کنیم. فیلمی که اعتماد می‌سازد و برند شما را متمایز می‌کند.",
			en: "We tell your brand story through an emotional, memorable film — the kind that builds trust and sets you apart from everyone else.",
		},
		features: {
			fa: [
				"فیلمنامه و کارگردانی",
				"تصویربرداری سینمایی",
				"موسیقی اختصاصی",
				"اصلاح رنگ حرفه‌ای",
			],
			en: [
				"Script & direction",
				"Cinematic shooting",
				"Original score",
				"Pro color grading",
			],
		},
	},
];

/* ---- Why Motiva / value props (icon title + one sentence) ---- */
export interface ValueProp {
	icon: string;
	title: Localized;
	description: Localized;
}

export const valueProps: ValueProp[] = [
	{
		icon: "M13 2 3 14h7l-1 8 10-12h-7z",
		title: { fa: "تحویل سریع", en: "Fast Delivery" },
		description: {
			fa: "زمان‌بندی شفاف و تحویل سروقت؛ بدون معطلی و بدون دردسر.",
			en: "Clear timelines and on-time delivery — no delays, no headaches.",
		},
	},
	{
		icon: "M12 5c-7 0-10 7-10 7s3 7 10 7 10-7 10-7-3-7-10-7zm0 11a4 4 0 1 1 0-8 4 4 0 0 1 0 8z",
		title: { fa: "خلاقیت اسکرول‌ایست", en: "Scroll-Stopping Creativity" },
		description: {
			fa: "ایده‌هایی که در ثانیه‌ی اول مخاطب را میخکوب می‌کند.",
			en: "Ideas that grab attention in the very first second.",
		},
	},
	{
		icon: "M3 3v18h18M7 15l4-4 3 3 5-6",
		title: { fa: "داده‌محور", en: "Data-Driven" },
		description: {
			fa: "تصمیم‌ها براساس عدد، ترند و رفتار مخاطب گرفته می‌شود.",
			en: "Decisions guided by numbers, trends, and real audience behavior.",
		},
	},
	{
		icon: "M12 2 2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
		title: { fa: "سرویس کامل", en: "Full-Service" },
		description: {
			fa: "از ایده تا اکران؛ همه‌ی مراحل را یکجا برعهده می‌گیریم.",
			en: "From idea to launch — we handle every stage under one roof.",
		},
	},
	{
		icon: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 4a6 6 0 1 0 0 12 6 6 0 0 0 0-12zm0 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4z",
		title: { fa: "آشنا با بازار ایران", en: "Built for Your Market" },
		description: {
			fa: "محتوایی متناسب با فرهنگ و مخاطب بازار ایران و فراتر از آن.",
			en: "Content tuned to Iran's audience and culture — and beyond.",
		},
	},
	{
		icon: "M12 2 4 5v6c0 5 3.4 8.5 8 10 4.6-1.5 8-5 8-10V5l-8-3zm-1 13-3-3 1.4-1.4L11 12.2l4.6-4.6L17 9z",
		title: { fa: "شفاف و بدون استرس", en: "Transparent & Stress-Free" },
		description: {
			fa: "قیمت و مراحل کار از اول روشن است؛ بدون هزینه‌ی پنهان.",
			en: "Pricing and steps are clear from day one — no hidden costs.",
		},
	},
];

export interface ProcessStep {
	step: string;
	title: Localized;
	description: Localized;
}

export const processSteps: ProcessStep[] = [
	{
		step: "01",
		title: { fa: "بریف و کشف", en: "Brief & Discovery" },
		description: {
			fa: "هدف، مخاطب و پیام برند شما را می‌فهمیم و مسیر پروژه را مشخص می‌کنیم.",
			en: "We learn your goal, audience, and message, then map out the project.",
		},
	},
	{
		step: "02",
		title: { fa: "فیلمنامه و استوری‌بورد", en: "Script & Storyboard" },
		description: {
			fa: "کانسپت خلاق، فیلمنامه و استوری‌بورد را می‌سازیم تا قبل از ضبط، نتیجه روشن باشد.",
			en: "We build the creative concept, script, and storyboard so the result is clear before we shoot.",
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
		title: { fa: "تدوین", en: "Editing" },
		description: {
			fa: "تدوین، اصلاح رنگ، موشن گرافیک و طراحی صدا برای خروجی بی‌نقص.",
			en: "Editing, color grading, motion graphics, and sound design for a flawless cut.",
		},
	},
	{
		step: "05",
		title: { fa: "تحویل", en: "Delivery" },
		description: {
			fa: "خروجی در همه‌ی فرمت‌های دلخواه، آماده‌ی انتشار در هر پلتفرم.",
			en: "Final files in every format you need, ready to publish on any platform.",
		},
	},
];

export interface PricingPlan {
	id: string;
	name: Localized;
	tagline: Localized;
	price: Localized;
	popular?: boolean;
	features: Localized<string[]>;
}

export const pricing: PricingPlan[] = [
	{
		id: "basic",
		name: { fa: "پایه", en: "Basic" },
		tagline: {
			fa: "شروعی حرفه‌ای برای دیده شدن",
			en: "A pro start to get seen",
		},
		price: { fa: "قیمت بر اساس پروژه", en: "Custom quote" },
		features: {
			fa: [
				"یک ویدیوی کوتاه (تا ۳۰ ثانیه)",
				"تدوین و زیرنویس",
				"۲ بازنگری",
				"خروجی ۴ک",
			],
			en: [
				"One short video (up to 30s)",
				"Editing & captions",
				"2 revisions",
				"4K delivery",
			],
		},
	},
	{
		id: "pro",
		name: { fa: "حرفه‌ای", en: "Pro" },
		tagline: { fa: "بهترین انتخاب برای رشد", en: "The best choice for growth" },
		price: { fa: "قیمت بر اساس پروژه", en: "Custom quote" },
		popular: true,
		features: {
			fa: [
				"تا ۳ ویدیو",
				"موشن گرافیک و زیرنویس",
				"اصلاح رنگ حرفه‌ای",
				"۵ بازنگری",
				"موسیقی دارای لایسنس",
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
		tagline: { fa: "کمپین کامل و اختصاصی", en: "A full, bespoke campaign" },
		price: { fa: "قیمت بر اساس پروژه", en: "Custom quote" },
		features: {
			fa: [
				"کمپین ویدیویی کامل",
				"کارگردانی و فیلمنامه",
				"تیم اختصاصی",
				"بازنگری نامحدود",
				"مدیر پروژه‌ی اختصاصی",
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
];

export interface Testimonial {
	name: Localized;
	role: Localized;
	quote: Localized;
}

/* NOTE: Placeholder testimonials for the template — replace with real ones. */
export const testimonials: Testimonial[] = [
	{
		name: { fa: "سارا محمدی", en: "Sara Mohammadi" },
		role: { fa: "مدیر کافه روما", en: "Owner, Roma Cafe" },
		quote: {
			fa: "ریلزی که موتیوا ساخت، در یک هفته فروش آخر هفته‌مان را دو برابر کرد.",
			en: "The Reels Motiva made doubled our weekend sales in just one week.",
		},
	},
	{
		name: { fa: "علی رضایی", en: "Ali Rezaei" },
		role: {
			fa: "بنیانگذار فروشگاه آنلاین زرین",
			en: "Founder, Zarrin Online Shop",
		},
		quote: {
			fa: "تیزر محصولی که ساختند دقیقاً همان حسی بود که می‌خواستیم؛ حرفه‌ای و تأثیرگذار.",
			en: "The product teaser they made was exactly the feeling we wanted — polished and persuasive.",
		},
	},
	{
		name: { fa: "دکتر مریم کریمی", en: "Dr. Maryam Karimi" },
		role: {
			fa: "مدیر کلینیک پوست و زیبایی آرا",
			en: "Director, Ara Skin Clinic",
		},
		quote: {
			fa: "فرآیند کاملاً حرفه‌ای بود و تعداد پیام‌های رزرو از اینستاگرام محسوس بالا رفت.",
			en: "The process was fully professional and our Instagram booking DMs noticeably went up.",
		},
	},
	{
		name: { fa: "رضا اسدی", en: "Reza Asadi" },
		role: { fa: "مشاور املاک، آژانس خانه", en: "Realtor, Khaneh Agency" },
		quote: {
			fa: "ویدیوی تور مجازی ملک‌ها باعث شد مشتری‌های جدی‌تری داشته باشیم و زمان فروش کوتاه‌تر شود.",
			en: "The virtual-tour videos brought in more serious buyers and shortened our closing time.",
		},
	},
];
