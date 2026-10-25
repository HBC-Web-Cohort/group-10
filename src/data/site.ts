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

// Real photographs hosted by their original publishers for the provinces added below.
const provinceImages = {
  badghis: "https://safir.af/wp-content/uploads/2024/03/IMG_20240328_092204_406-780x470.jpg",
  baghlan: "https://pbs.twimg.com/media/FGZ38AEWQAITnzQ.jpg",
  balkh: "https://images.unsplash.com/photo-1647551640739-a0368c23765a?auto=format&fit=crop&fm=jpg&q=80&w=2400",
  daykundi: "https://i.pinimg.com/originals/52/2a/c7/522ac79cd194af5fe3be390bf3271968.jpg",
  farah: "https://pbs.twimg.com/media/EfdsIrkXoAQmhmN.jpg",
  faryab: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Faryab_province_Afghanistan_1.jpg/1280px-Faryab_province_Afghanistan_1.jpg",
  ghazni: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Ghazni_province_in_April_2010.jpg",
  ghor: "https://upload.wikimedia.org/wikipedia/commons/8/85/Ghor_Province_%284208191461%29.jpg",
  helmand: "https://theodora.com/wfb/photos/afghanistan/helmand_river_helmand_province_afghanistan_photo_wiki.jpg",
  jawzjan: "https://pbs.twimg.com/media/GJW3sxeWsAAJ3SF.jpg",
  kandahar: "https://www.shutterbug.com/images/styles/960-wide/public/photo_post/31857/KandaharLandscape.jpg",
  kapisa: "https://pbs.twimg.com/media/FFx2Cl-X0AErzcx.jpg",
  khost: "https://pbs.twimg.com/media/F6X_nGia4AArZY3.jpg",
  kunduz: "https://upload.wikimedia.org/wikipedia/commons/d/dc/Kunduz_River_valley.jpg",
  laghman: "https://pbs.twimg.com/media/FFWt24TXsAAYejH.jpg",
  logar: "https://pbs.twimg.com/media/FFsaJc1XIAYO0Kh.jpg",
  nangarhar: "https://tour.af/tour/public/storage/destinations/01JFFNWMXE8MSV2E4JD7RKNDM4.webp",
  nimroz: "https://mudh.gov.af/sites/default/files/2020-06/nimruz_.jpg",
  paktia: "https://pbs.twimg.com/media/FRajSxyWYAAGT6o.jpg",
  paktika: "https://images.moondeveloper.com/attractions/2025/04/05/resized_67f0f8e64137f.jpg",
  parwan: "https://i.pinimg.com/736x/93/4e/2d/934e2decb0022168621f6aaa70fd9f18.jpg",
  samangan: "https://mudh.gov.af/sites/default/files/2021-03/smngann.jpg",
  sarEPoll: "https://mudh.gov.af/sites/default/files/2020-08/drh-zybay-qryh-abkhwr-dr-wlswaly-sanchark-wlayt-srpl-1024x576.jpg",
  takhar: "https://pbs.twimg.com/media/E1zt3ibXMAMllM7.jpg",
  uruzgan: "https://images.moondeveloper.com/attractions/2025/04/05/resized_67f1067c377d0.jpg",
  wardak: "https://i.pinimg.com/736x/6a/59/f5/6a59f508e3e79d608ac092906cbfbf44.jpg",
  zabul: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Almond_trees_in_Zabul_Province_of_Afghanistan.jpg/1280px-Almond_trees_in_Zabul_Province_of_Afghanistan.jpg",
} as const;

export const company = {
  name: "Silk Road Afghanistan",
  tagline: "Authentic journeys through Afghanistan with trusted local guides.",
  email: "atalwiar145@gmail.com",
  whatsappNumber: "93778633552",
  whatsappDisplay: "+93 778 633 552",
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
  {
    slug: "badghis",
    province: "Badghis",
    name: "Badghis",
    region: "Northwestern Afghanistan",
    description: "Rolling spring hills, pistachio woodlands and river valleys shape this open northwestern province.",
    highlights: ["Pistachio woodlands", "Murghab River", "Qala-e Naw", "Spring meadows"],
    image: provinceImages.badghis,
  },
  {
    slug: "baghlan",
    province: "Baghlan",
    name: "Baghlan",
    region: "Northeastern Afghanistan",
    description: "Green agricultural valleys meet the foothills of the Hindu Kush in Baghlan.",
    highlights: ["Andarab Valley", "Hindu Kush foothills", "Riverside farms", "Local bazaars"],
    image: provinceImages.baghlan,
  },
  {
    slug: "balkh",
    province: "Balkh",
    name: "Balkh",
    region: "Northern Afghanistan",
    description: "Ancient cities, broad northern plains and mountain views define the historic province of Balkh.",
    highlights: ["Ancient Balkh", "Mazar-e Sharif", "Blue Mosque", "Northern plains"],
    image: provinceImages.balkh,
  },
  {
    slug: "daykundi",
    province: "Daykundi",
    name: "Daykundi",
    region: "Central Highlands",
    description: "Remote valleys, terraced fields and high ridges create Daykundi's dramatic central landscape.",
    highlights: ["Nili Valley", "Terraced farms", "Highland villages", "Mountain roads"],
    image: provinceImages.daykundi,
  },
  {
    slug: "farah",
    province: "Farah",
    name: "Farah",
    region: "Western Afghanistan",
    description: "Farah combines fertile river valleys with wide desert landscapes and rugged western hills.",
    highlights: ["Farah River", "Rural valleys", "Desert horizons", "Historic Farah City"],
    image: provinceImages.farah,
  },
  {
    slug: "faryab",
    province: "Faryab",
    name: "Faryab",
    region: "Northern Afghanistan",
    description: "Faryab is known for its green seasonal hills, open pastures and long rural horizons.",
    highlights: ["Maimana", "Rolling hills", "Pastoral valleys", "Spring wildflowers"],
    image: provinceImages.faryab,
  },
  {
    slug: "ghazni",
    province: "Ghazni",
    name: "Ghazni",
    region: "Southeastern Afghanistan",
    description: "Historic Ghazni sits among broad cultivated plains, old monuments and mountain-framed horizons.",
    highlights: ["Ghazni minarets", "Old city", "Cultivated plains", "Mountain views"],
    image: provinceImages.ghazni,
  },
  {
    slug: "ghor",
    province: "Ghor",
    name: "Ghor",
    region: "Central Afghanistan",
    description: "High plateaus, remote valleys and the Jam River country give Ghor a wild central character.",
    highlights: ["Minaret of Jam", "Hari River valleys", "High plateaus", "Chaghcharan"],
    image: provinceImages.ghor,
  },
  {
    slug: "helmand",
    province: "Helmand",
    name: "Helmand",
    region: "Southern Afghanistan",
    description: "The Helmand River brings life to farms and green corridors across the southern desert landscape.",
    highlights: ["Helmand River", "Irrigated fields", "Desert landscapes", "Lashkar Gah"],
    image: provinceImages.helmand,
  },
  {
    slug: "jawzjan",
    province: "Jawzjan",
    name: "Jawzjan",
    region: "Northern Afghanistan",
    description: "Open grasslands, poppy-filled spring fields and the Amu Darya lowlands characterize Jawzjan.",
    highlights: ["Sheberghan", "Spring grasslands", "Amu Darya lowlands", "Rural villages"],
    image: provinceImages.jawzjan,
  },
  {
    slug: "kandahar",
    province: "Kandahar",
    name: "Kandahar",
    region: "Southern Afghanistan",
    description: "Kandahar's orchards and old trade routes lie between broad plains and sunlit mountain ranges.",
    highlights: ["Kandahar City", "Pomegranate orchards", "Arghandab Valley", "Mountain horizons"],
    image: provinceImages.kandahar,
  },
  {
    slug: "kapisa",
    province: "Kapisa",
    name: "Kapisa",
    region: "Eastern Afghanistan",
    description: "A green, mountain-framed province of river valleys, orchards and terraced farmland north of Kabul.",
    highlights: ["Mahmud Raqi", "Panjshir River", "Orchards", "Mountain valleys"],
    image: provinceImages.kapisa,
  },
  {
    slug: "khost",
    province: "Khost",
    name: "Khost",
    region: "Southeastern Afghanistan",
    description: "Khost's fertile basin is bordered by wooded hills and mountain passes in Afghanistan's southeast.",
    highlights: ["Khost City", "Green valleys", "Wooded hills", "Rural orchards"],
    image: provinceImages.khost,
  },
  {
    slug: "kunduz",
    province: "Kunduz",
    name: "Kunduz",
    region: "Northeastern Afghanistan",
    description: "River channels and fertile plains make Kunduz one of northern Afghanistan's most productive landscapes.",
    highlights: ["Kunduz River", "Green fields", "Northern plains", "Riverside villages"],
    image: provinceImages.kunduz,
  },
  {
    slug: "laghman",
    province: "Laghman",
    name: "Laghman",
    region: "Eastern Afghanistan",
    description: "Laghman's green valleys, rivers and foothills create a rich transition between Kabul and the east.",
    highlights: ["Alingar Valley", "Alishang Valley", "River farmland", "Foothill scenery"],
    image: provinceImages.laghman,
  },
  {
    slug: "logar",
    province: "Logar",
    name: "Logar",
    region: "Central Afghanistan",
    description: "South of Kabul, Logar is a broad valley of cultivated fields beneath rugged mountain ridges.",
    highlights: ["Logar Valley", "Mes Aynak", "Cultivated fields", "Mountain passes"],
    image: provinceImages.logar,
  },
  {
    slug: "nangarhar",
    province: "Nangarhar",
    name: "Nangarhar",
    region: "Eastern Afghanistan",
    description: "Warm eastern valleys, citrus groves and the Kabul River corridor define Nangarhar.",
    highlights: ["Jalalabad", "Dar-e Nur", "Kabul River", "Green valleys"],
    image: provinceImages.nangarhar,
  },
  {
    slug: "nimroz",
    province: "Nimroz",
    name: "Nimroz",
    region: "Southwestern Afghanistan",
    description: "Nimroz is a land of wide desert skies, wetlands and the striking Hamun basin.",
    highlights: ["Zaranj", "Hamun wetlands", "Desert plains", "Helmand delta"],
    image: provinceImages.nimroz,
  },
  {
    slug: "paktia",
    province: "Paktia",
    name: "Paktia",
    region: "Southeastern Highlands",
    description: "Paktia's pine-covered ridges and cultivated valleys offer some of eastern Afghanistan's greenest scenery.",
    highlights: ["Gardez", "Aryub Zazi", "Pine forests", "Mountain valleys"],
    image: provinceImages.paktia,
  },
  {
    slug: "paktika",
    province: "Paktika",
    name: "Paktika",
    region: "Southeastern Afghanistan",
    description: "Remote mountain passes, open highlands and deep valleys define Paktika's southeastern landscape.",
    highlights: ["Sharan", "Highland valleys", "Mountain passes", "Rural landscapes"],
    image: provinceImages.paktika,
  },
  {
    slug: "parwan",
    province: "Parwan",
    name: "Parwan",
    region: "Central Afghanistan",
    description: "Parwan's rivers and green valleys run beneath the Hindu Kush just north of Kabul.",
    highlights: ["Charikar", "Ghorband Valley", "Salang corridor", "Mountain rivers"],
    image: provinceImages.parwan,
  },
  {
    slug: "samangan",
    province: "Samangan",
    name: "Samangan",
    region: "Northern Afghanistan",
    description: "Rolling northern grasslands, orchards and ancient cave sites give Samangan a quiet character.",
    highlights: ["Aybak", "Takht-e Rostam", "Spring pastures", "Orchards"],
    image: provinceImages.samangan,
  },
  {
    slug: "sar-e-pol",
    province: "Sar-e Pol",
    name: "Sar-e Pol",
    region: "Northern Afghanistan",
    description: "Gentle green hills and broad valleys stretch across Sar-e Pol in the north of Afghanistan.",
    highlights: ["Sar-e Pol City", "Sangcharak", "Spring pastures", "Rolling hills"],
    image: provinceImages.sarEPoll,
  },
  {
    slug: "takhar",
    province: "Takhar",
    name: "Takhar",
    region: "Northeastern Afghanistan",
    description: "Takhar's fertile valleys and snow-capped mountain views make it one of the northeast's most scenic provinces.",
    highlights: ["Taloqan", "Farkhar Valley", "Mountain rivers", "Fruit orchards"],
    image: provinceImages.takhar,
  },
  {
    slug: "uruzgan",
    province: "Uruzgan",
    name: "Uruzgan",
    region: "Central-Southern Afghanistan",
    description: "Golden fields, deep valleys and rugged brown mountains shape Uruzgan's central-southern terrain.",
    highlights: ["Tarinkot", "Mountain valleys", "Wheat fields", "Rural villages"],
    image: provinceImages.uruzgan,
  },
  {
    slug: "wardak",
    province: "Wardak",
    name: "Wardak",
    region: "Central Afghanistan",
    description: "Wardak's high valleys, rivers and mountain farms sit along the western approaches to Kabul.",
    highlights: ["Maidan Shahr", "Jaghatu Valley", "Highland farms", "Mountain streams"],
    image: provinceImages.wardak,
  },
  {
    slug: "zabul",
    province: "Zabul",
    name: "Zabul",
    region: "Southern Afghanistan",
    description: "Almond orchards, open plains and rugged ridges give Zabul a distinctive southern landscape.",
    highlights: ["Qalat", "Almond blossoms", "Open highlands", "Mountain ridges"],
    image: provinceImages.zabul,
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

const featuredHeroSlides: HeroSlide[] = [
  {
    slug: "kabul",
    province: "Kabul",
    title: "Where Every Journey Begins",
    description:
      "Gardens, bazaars and hillside viewpoints — Afghanistan's capital, walked with guides who know every street.",
    image: kabul,
    imageAlt: "Kabul city framed by mountains at golden hour",
  },
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

const featuredHeroSlugs = new Set(featuredHeroSlides.map((slide) => slide.slug));

export const heroSlides: HeroSlide[] = [
  ...featuredHeroSlides,
  ...destinations
    .filter((destination) => !featuredHeroSlugs.has(destination.slug))
    .map((destination) => ({
      slug: destination.slug,
      province: destination.province,
      title: `Explore ${destination.name}`,
      description: destination.description,
      image: destination.image,
      imageAlt: `${destination.name}, ${destination.province}, Afghanistan`,
    })),
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
