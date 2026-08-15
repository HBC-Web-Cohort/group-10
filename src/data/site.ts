import kabul from "@/assets/dest-kabul.jpg";
import bamiyan from "@/assets/dest-bamiyan.jpg";
import bandeAmir from "@/assets/dest-bandeamir.jpg";
import herat from "@/assets/dest-herat.jpg";
import wakhan from "@/assets/dest-wakhan.jpg";
import guideAhmad from "@/assets/guide-ahmad.jpg";
import guideZahra from "@/assets/guide-zahra.jpg";
import guideNasir from "@/assets/guide-nasir.jpg";
import heroNuristan from "@/assets/hero-nuristan.jpg";
import heroKunar from "@/assets/hero-kunar.jpg";
import heroPanjshir from "@/assets/hero-panjshir.jpg";
const heroBamiyan = bamiyan;
const heroHerat = herat;

export const company = {
  name: "Silk Road Afghanistan",
  tagline: "Authentic journeys through Afghanistan with trusted local guides.",
  email: "info@silkroadafghanistan.com",
  whatsappNumber: "93700000000",
  whatsappDisplay: "+93 700 000 000",
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    tiktok: "https://tiktok.com",
    threads: "https://threads.net",
  },
};

export const whatsappLink = (message = "Hello Silk Road Afghanistan, I would like to plan a trip.") =>
  `https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const mailtoLink = (subject = "Travel inquiry", body = "") =>
  `mailto:${company.email}?subject=${encodeURIComponent(subject)}${body ? `&body=${encodeURIComponent(body)}` : ""}`;

export type Destination = {
  slug: string;
  name: string;
  province: string;
  region: string;
  description: string;
  highlights: string[];
  image: string;
};

export const destinations: Destination[] = [
  {
    slug: "kabul",
    province: "Kabul",
    name: "Kabul",
    region: "Central Afghanistan",
    description:
      "Explore Afghanistan's capital, historical sites, traditional markets, gardens, and mountain views.",
    highlights: ["Babur Gardens", "Old city bazaars", "National Museum", "Hillside viewpoints"],
    image: kabul,
  },
  {
    slug: "bamiyan",
    province: "Bamyan",
    name: "Bamiyan",
    region: "Hazarajat Highlands",
    description:
      "Discover ancient heritage, dramatic mountains, and the famous valleys of central Afghanistan.",
    highlights: ["Bamiyan cliffs", "Shahr-e Gholghola", "Valley farmland", "Local homestays"],
    image: bamiyan,
  },
  {
    slug: "band-e-amir",
    province: "Bamyan",
    name: "Band-e Amir",
    region: "Afghanistan's first national park",
    description: "Experience Afghanistan's breathtaking blue lakes surrounded by natural beauty.",
    highlights: ["Six turquoise lakes", "Travertine dams", "Sunrise walks", "Picnic with locals"],
    image: bandeAmir,
  },
  {
    slug: "herat",
    province: "Herat",
    name: "Herat",
    region: "Western Afghanistan",
    description: "Explore centuries of Islamic architecture, art, and history.",
    highlights: ["Friday Mosque", "Citadel of Herat", "Glass & tile artisans", "Silk Road bazaars"],
    image: herat,
  },
  {
    slug: "wakhan-corridor",
    province: "Badakhshan",
    name: "Wakhan Corridor",
    region: "Badakhshan & the Pamirs",
    description:
      "Journey through one of the world's most remote and beautiful mountain regions.",
    highlights: ["Pamir high plateau", "Kyrgyz nomad camps", "Wakhi villages", "Trekking routes"],
    image: wakhan,
  },
  {
    slug: "nuristan",
    province: "Nuristan",
    name: "Nuristan",
    region: "Eastern highlands",
    description:
      "Cedar forests, timber villages stacked on steep ridges and mountain roads few travellers ever see.",
    highlights: ["Cedar forest trails", "Cliffside villages", "Traditional woodcraft", "Alpine passes"],
    image: heroNuristan,
  },
  {
    slug: "kunar",
    province: "Kunar",
    name: "Kunar Valley",
    region: "Eastern Afghanistan",
    description:
      "Follow the blue Kunar river through terraced farmland and forested ridges in Afghanistan's warm east.",
    highlights: ["Kunar river road", "Terraced farms", "Forested ridges", "Riverside villages"],
    image: heroKunar,
  },
  {
    slug: "panjshir",
    province: "Panjshir",
    name: "Panjshir Valley",
    region: "Northeast of Kabul",
    description:
      "Emerald water, sheer rock walls and poplar groves — a day's drive from Kabul into a legendary valley.",
    highlights: ["Panjshir river", "Emerald mines viewpoint", "Poplar groves", "Village teahouses"],
    image: heroPanjshir,
  },
];

export type Tour = {
  slug: string;
  name: string;
  duration: string;
  route: string;
  summary: string;
  includes: string[];
  image: string;
};

export const tours: Tour[] = [
  {
    slug: "afghanistan-discovery",
    name: "Afghanistan Discovery Tour",
    duration: "7–10 Days",
    route: "Kabul – Bamiyan – Band-e Amir",
    summary:
      "Our signature introduction to Afghanistan: capital city history, the Bamiyan valley, and the blue lakes of Band-e Amir.",
    includes: ["Local tour guide", "Transportation", "Cultural experiences", "Trip planning support"],
    image: bandeAmir,
  },
  {
    slug: "cultural-heritage",
    name: "Cultural Heritage Tour",
    duration: "8–12 Days",
    route: "Kabul – Herat – Balkh",
    summary:
      "Islamic architecture, Silk Road cities, artisan workshops, and living traditions guided by local historians.",
    includes: ["Historian guide", "Museum & site visits", "Artisan workshops", "Family hosted meals"],
    image: herat,
  },
  {
    slug: "mountain-adventure",
    name: "Mountain Adventure Tour",
    duration: "10–14 Days",
    route: "Kabul – Badakhshan – Wakhan Corridor",
    summary:
      "High passes, glacial rivers, and nomad camps in the Pamirs for travelers who want real remoteness.",
    includes: ["Mountain guide", "4x4 transport", "Trekking support", "Permits assistance"],
    image: wakhan,
  },
  {
    slug: "photography",
    name: "Photography Tour",
    duration: "9–12 Days",
    route: "Bamiyan – Band-e Amir – Kabul",
    summary:
      "Built around light: golden-hour locations, portrait introductions in villages, and unhurried shooting time.",
    includes: ["Photo-focused itinerary", "Golden hour scheduling", "Local introductions", "Flexible pacing"],
    image: bamiyan,
  },
];

export type Guide = {
  name: string;
  role: string;
  languages: string;
  experience: string;
  specialty: string;
  intro: string;
  image: string;
  rating: number;
  reviewCount: number;
  based: string;
};

export const guides: Guide[] = [
  {
    name: "Ahmad",
    role: "Local Tour Guide",
    languages: "English, Dari, Pashto",
    experience: "10+ years guiding international travelers",
    specialty: "History, culture, and mountain journeys",
    intro:
      "Ahmad grew up between Kabul and the central highlands and has guided visitors across Afghanistan for over a decade.",
    image: guideAhmad,
    rating: 4.9,
    reviewCount: 128,
    based: "Kabul",
  },
  {
    name: "Zahra",
    role: "Cultural Guide",
    languages: "English, Dari, Turkish",
    experience: "7 years in cultural and heritage tourism",
    specialty: "Crafts, cuisine, and women travelers' journeys",
    intro:
      "Zahra connects travelers with families, artisans and cooks, offering a warm and personal view of daily Afghan life.",
    image: guideZahra,
    rating: 5.0,
    reviewCount: 86,
    based: "Herat",
  },
  {
    name: "Nasir",
    role: "Mountain & Desert Guide",
    languages: "English, Dari, Uzbeki",
    experience: "15 years in remote-region travel",
    specialty: "Wakhan Corridor, trekking, and logistics",
    intro:
      "Nasir has crossed most of Afghanistan's high passes and handles remote-area routes, permits and safety planning.",
    image: guideNasir,
    rating: 4.8,
    reviewCount: 97,
    based: "Faizabad, Badakhshan",
  },
];

export const stories = [
  {
    slug: "hidden-gems",
    title: "Hidden Gems of Afghanistan",
    excerpt:
      "Beyond the well-known sites, quiet valleys, hot springs and old caravan towns wait for curious travelers.",
    category: "Travel",
    readTime: "6 min read",
    image: wakhan,
  },
  {
    slug: "bamiyan-valley",
    title: "The History of Bamiyan Valley",
    excerpt:
      "A crossroads of empires, faiths and traders — how the Bamiyan valley became one of Asia's great cultural centers.",
    category: "History",
    readTime: "8 min read",
    image: bamiyan,
  },
  {
    slug: "afghan-hospitality",
    title: "Afghan Hospitality",
    excerpt:
      "Green tea, shared bread and open doors: what visitors most often remember long after they return home.",
    category: "Culture",
    readTime: "5 min read",
    image: kabul,
  },
  {
    slug: "silk-road-journey",
    title: "A Journey Through the Silk Road",
    excerpt:
      "Following the old trade routes from Herat to Balkh, through bazaars that have traded for a thousand years.",
    category: "Journeys",
    readTime: "9 min read",
    image: herat,
  },
];

export const travelInfo = [
  {
    title: "Visa Information",
    body: "Most nationalities need a visa obtained in advance at an Afghan embassy or consulate. Requirements vary by country and change frequently. We provide an invitation letter and a written itinerary to support your application, and we advise you on the most reliable consulate for your passport.",
  },
  {
    title: "Best Time to Visit",
    body: "April to June and September to early November offer the most comfortable weather. The Wakhan Corridor and high mountain routes are best from late June to September. Winters are cold and many mountain roads close.",
  },
  {
    title: "Local Customs",
    body: "Afghanistan is conservative and hospitable. Dress modestly (long sleeves and trousers; women should carry a headscarf), always ask before photographing people, and accept tea when it is offered — it is the beginning of most conversations.",
  },
  {
    title: "Currency & Money",
    body: "The Afghani (AFN) is the local currency and Afghanistan is largely cash-based. US dollars in clean, newer notes are widely exchanged. International cards and ATMs are unreliable, so bring sufficient cash and keep it in more than one place.",
  },
  {
    title: "Travel Preparation",
    body: "Bring your own medication, a sturdy pair of walking shoes, layers for cold nights, a power bank and a local SIM. We share a detailed pre-departure pack, daily route plan and emergency contacts before you arrive.",
  },
  {
    title: "Safety & Planning",
    body: "We plan every route with local knowledge, confirm conditions daily, and adjust when needed. Your guide stays with you throughout the journey and your family can reach us at any time via WhatsApp.",
  },
];

export const paymentOptions = [
  {
    title: "Afghan Bank Transfer",
    body: "Direct transfer to our company account in Afghanistan. Details are shared after your itinerary is confirmed.",
  },
  {
    title: "Western Union",
    body: "A simple option for travelers arranging a deposit from abroad before arrival.",
  },
  {
    title: "USDT (Crypto)",
    body: "We accept USDT for deposits and balances. Wallet details are provided directly by our team.",
  },
];

export type HeroSlide = {
  slug: string;
  province: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

export const heroSlides: HeroSlide[] = [
  {
    slug: "bamiyan",
    province: "Bamyan",
    title: "Discover the Hidden Beauty of Afghanistan",
    description:
      "Ancient cliffs, high valleys and the turquoise lakes of Band-e Amir — travelled with guides who grew up here.",
    image: heroBamiyan,
    imageAlt: "The Bamiyan valley and its sandstone cliffs at golden hour",
  },
  {
    slug: "nuristan",
    province: "Nuristan",
    title: "Cedar Forests and Cliffside Villages",
    description:
      "Nuristan's green mountain country: timber villages stacked on ridges, mist in the pines and roads few travellers ever see.",
    image: heroNuristan,
    imageAlt: "Forested mountains of Nuristan with a village perched on a cliff",
  },
  {
    slug: "kunar",
    province: "Kunar",
    title: "The Valley of the Blue River",
    description:
      "Follow the Kunar river through terraced farmland and forested ridges in Afghanistan's warm eastern valleys.",
    image: heroKunar,
    imageAlt: "Turquoise Kunar river winding through a green Afghan valley at sunset",
  },
  {
    slug: "panjshir",
    province: "Panjshir",
    title: "Five Lions, One Unforgettable Valley",
    description:
      "Emerald water, sheer rock walls and poplar groves — a day's drive from Kabul into Afghanistan's most storied valley.",
    image: heroPanjshir,
    imageAlt: "The Panjshir river cutting between dramatic rocky mountains",
  },
  {
    slug: "herat",
    province: "Herat",
    title: "A Thousand Years of Silk Road Craft",
    description:
      "Tilework, glassblowers, the great Friday Mosque and evening bazaars in Afghanistan's western cultural capital.",
    image: heroHerat,
    imageAlt: "Tiled Islamic architecture in Herat, western Afghanistan",
  },
];

export type Review = {
  id: string;
  name: string;
  country: string;
  rating: number;
  date: string;
  tour: string;
  title: string;
  body: string;
};

export const reviews: Review[] = [
  {
    id: "r1",
    name: "Marta K.",
    country: "Poland",
    rating: 5,
    date: "May 2026",
    tour: "Afghanistan Discovery Tour",
    title: "Beyond anything I expected",
    body: "Ahmad planned every day around what we actually wanted to see. Band-e Amir at sunrise with almost nobody around is a memory I will keep forever. I felt looked after from the airport to the flight home.",
  },
  {
    id: "r2",
    name: "David R.",
    country: "United Kingdom",
    rating: 5,
    date: "April 2026",
    tour: "Cultural Heritage Tour",
    title: "Herat through local eyes",
    body: "We spent an afternoon with a glassblower and an evening with a family who insisted on feeding us twice. That is not something you find on your own. Communication over WhatsApp before the trip was quick and honest.",
  },
  {
    id: "r3",
    name: "Yuki T.",
    country: "Japan",
    rating: 5,
    date: "March 2026",
    tour: "Photography Tour",
    title: "Light, patience and trust",
    body: "As a photographer I needed early starts and long waits. The team never rushed me once, and they always knew who to ask before I raised the camera.",
  },
  {
    id: "r4",
    name: "Sophie M.",
    country: "France",
    rating: 4,
    date: "October 2025",
    tour: "Mountain Adventure Tour",
    title: "Wakhan is hard and worth it",
    body: "Roads are long and basic — be honest with yourself about that. Nasir handled permits, fuel and a broken spring without drama. Four stars only because of the driving days, not the guiding.",
  },
  {
    id: "r5",
    name: "Andreas B.",
    country: "Germany",
    rating: 5,
    date: "September 2025",
    tour: "Afghanistan Discovery Tour",
    title: "Warm, safe, well organised",
    body: "My family were nervous before I left. Silk Road shared a daily plan and contact numbers, and my wife could reach the office any time. That mattered as much as the itinerary itself.",
  },
  {
    id: "r6",
    name: "Amira H.",
    country: "Canada",
    rating: 5,
    date: "June 2025",
    tour: "Cultural Heritage Tour",
    title: "Perfect for a woman travelling solo",
    body: "Zahra made this trip. Modest dress advice, women-only gatherings, and a level of comfort I honestly did not expect. I would come back tomorrow.",
  },
];
