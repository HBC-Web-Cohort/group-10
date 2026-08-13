import kabul from "@/assets/dest-kabul.jpg";
import bamiyan from "@/assets/dest-bamiyan.jpg";
import bandeAmir from "@/assets/dest-bandeamir.jpg";
import herat from "@/assets/dest-herat.jpg";
import wakhan from "@/assets/dest-wakhan.jpg";
import guideAhmad from "@/assets/guide-ahmad.jpg";
import guideZahra from "@/assets/guide-zahra.jpg";
import guideNasir from "@/assets/guide-nasir.jpg";

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
  region: string;
  description: string;
  highlights: string[];
  image: string;
};

export const destinations: Destination[] = [
  {
    slug: "kabul",
    name: "Kabul",
    region: "Central Afghanistan",
    description:
      "Explore Afghanistan's capital, historical sites, traditional markets, gardens, and mountain views.",
    highlights: ["Babur Gardens", "Old city bazaars", "National Museum", "Hillside viewpoints"],
    image: kabul,
  },
  {
    slug: "bamiyan",
    name: "Bamiyan",
    region: "Hazarajat Highlands",
    description:
      "Discover ancient heritage, dramatic mountains, and the famous valleys of central Afghanistan.",
    highlights: ["Bamiyan cliffs", "Shahr-e Gholghola", "Valley farmland", "Local homestays"],
    image: bamiyan,
  },
  {
    slug: "band-e-amir",
    name: "Band-e Amir",
    region: "Afghanistan's first national park",
    description: "Experience Afghanistan's breathtaking blue lakes surrounded by natural beauty.",
    highlights: ["Six turquoise lakes", "Travertine dams", "Sunrise walks", "Picnic with locals"],
    image: bandeAmir,
  },
  {
    slug: "herat",
    name: "Herat",
    region: "Western Afghanistan",
    description: "Explore centuries of Islamic architecture, art, and history.",
    highlights: ["Friday Mosque", "Citadel of Herat", "Glass & tile artisans", "Silk Road bazaars"],
    image: herat,
  },
  {
    slug: "wakhan-corridor",
    name: "Wakhan Corridor",
    region: "Badakhshan & the Pamirs",
    description:
      "Journey through one of the world's most remote and beautiful mountain regions.",
    highlights: ["Pamir high plateau", "Kyrgyz nomad camps", "Wakhi villages", "Trekking routes"],
    image: wakhan,
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
