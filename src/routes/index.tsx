import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Compass, HandHeart, Map, Sparkles, MessageCircle } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { DestinationCard, GuideCard, TourCard } from "@/components/Cards";
import { HeroCarousel } from "@/components/HeroCarousel";
import { ReviewCard } from "@/components/ReviewCard";
import { PaymentModal } from "@/components/PaymentModal";
import {
  company,
  destinations,
  guides,
  paymentOptions,
  reviews,
  tours,
  whatsappLink,
} from "@/data/site";
import heroImage from "@/assets/hero-afghanistan.jpg";
import aboutImage from "@/assets/about-hospitality.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Silk Road Afghanistan | Guided Tours & Authentic Journeys" },
      {
        name: "description",
        content:
          "Discover the hidden beauty of Afghanistan with trusted local guides — Kabul, Bamiyan, Band-e Amir, Herat and the Wakhan Corridor.",
      },
      { property: "og:title", content: "Silk Road Afghanistan | Guided Tours & Authentic Journeys" },
      {
        property: "og:description",
        content:
          "Ancient history, breathtaking landscapes and Afghan hospitality with trusted local guides.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TravelAgency",
          name: company.name,
          description: company.tagline,
          email: company.email,
          telephone: `+${company.whatsappNumber}`,
          areaServed: "Afghanistan",
        }),
      },
    ],
  }),
  component: Home,
});

const pillars = [
  { icon: Compass, title: "Local knowledge", body: "Routes, roads and timing planned by Afghans who live in these regions." },
  { icon: Sparkles, title: "Cultural experiences", body: "Bazaars, artisans, shared meals and conversations you cannot book online." },
  { icon: Map, title: "Personalized journeys", body: "Every itinerary is shaped around your dates, pace and interests." },
  { icon: HandHeart, title: "Authentic travel", body: "Small groups, local hosts, and travel that supports Afghan families." },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <HeroCarousel />

      {/* About */}
      <section className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <div className="grid items-center gap-14 md:grid-cols-2">
          <Reveal>
            <img
              src={aboutImage}
              alt="Afghan green tea poured in a traditional room"
              loading="lazy"
              width={1200}
              height={900}
              className="aspect-[4/3] w-full rounded-xl object-cover shadow-elegant"
            />
          </Reveal>
          <Reveal delay={100}>
            <SectionHeading
              eyebrow="About us"
              title="Travel Afghanistan with people who call it home"
              description="Silk Road Afghanistan connects travelers with authentic Afghan experiences. Our mission is to introduce the world's travelers to Afghanistan's rich history, beautiful landscapes, and warm hospitality through trusted local guides."
            />
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {pillars.map((pillar) => (
                <div key={pillar.title}>
                  <pillar.icon className="size-6 text-accent" />
                  <h3 className="mt-3 text-lg">{pillar.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{pillar.body}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Destinations */}
      <section className="bg-secondary/60 py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <SectionHeading
              eyebrow="Destinations"
              title="Places that stay with you"
              description="Five regions that show the range of Afghanistan — its cities, its heritage, and its wild mountain country."
            />
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {destinations.map((destination, i) => (
              <Reveal key={destination.slug} delay={i * 70}>
                <DestinationCard destination={destination} />
              </Reveal>
            ))}
            <Reveal delay={350}>
              <Link
                to="/destinations"
                className="flex h-full min-h-[16rem] flex-col justify-end rounded-xl border border-dashed border-border bg-card p-8 transition-colors hover:border-accent"
              >
                <p className="eyebrow">More to come</p>
                <h3 className="mt-2 text-2xl">See all destinations</h3>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  Explore <ArrowRight className="size-4" />
                </span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Tours */}
      <section className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <Reveal>
          <SectionHeading
            eyebrow="Tour packages"
            title="Sample journeys, shaped around you"
            description="These itineraries are examples. There is no online booking — we build your route together and confirm everything by WhatsApp or email."
          />
        </Reveal>
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {tours.slice(0, 2).map((tour, i) => (
            <Reveal key={tour.slug} delay={i * 80}>
              <TourCard tour={tour} />
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10">
          <Link
            to="/tours"
            className="inline-flex items-center gap-2 rounded-full border border-primary px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            View all tour packages <ArrowRight className="size-4" />
          </Link>
        </Reveal>
      </section>

      {/* Guides */}
      <section className="bg-secondary/60 py-24 text-foreground dark:bg-ink dark:text-sand sm:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <p className="eyebrow dark:text-gold-soft">Our local guides</p>
            <h2 className="mt-3 max-w-2xl text-3xl leading-tight sm:text-5xl">
              The people who make the journey
            </h2>
            <p className="mt-4 max-w-2xl text-muted-foreground dark:text-sand/75">
              Licensed Afghan guides with deep regional knowledge, fluent English, and long
              experience hosting international travelers.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {guides.map((guide, i) => (
              <Reveal key={guide.name} delay={i * 80}>
                <div className="text-foreground">
                  <GuideCard guide={guide} />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-secondary/60 py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <SectionHeading
              eyebrow="Traveler reviews"
              title="What travelers say"
              description="Honest words from guests who crossed Afghanistan with our guides."
            />
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {reviews.slice(0, 3).map((review, i) => (
              <Reveal key={review.id} delay={i * 70}>
                <ReviewCard review={review} />
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10">
            <Link
              to="/reviews"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
            >
              Read all reviews <ArrowRight className="size-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Payments */}
      <section className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <Reveal>
          <SectionHeading
            eyebrow="Payment options"
            title="Flexible ways to pay"
            description="No online payment on this website. Once your itinerary is confirmed we share the details for the method you prefer."
          />
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {paymentOptions.map((option, i) => (
            <Reveal key={option.title} delay={i * 80}>
              <div className="h-full rounded-xl border border-border bg-card p-6 shadow-soft">
                <h3 className="text-xl">{option.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{option.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10">
          <PaymentModal>
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full border border-primary px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              View full payment details <ArrowRight className="size-4" aria-hidden="true" />
            </button>
          </PaymentModal>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="relative isolate overflow-hidden">
        <img
          src={heroImage}
          alt=""
          aria-hidden="true"
          loading="lazy"
          width={1920}
          height={1088}
          className="absolute inset-0 -z-10 size-full object-cover"
        />
        <div className="hero-overlay absolute inset-0 -z-10" />
        <div className="mx-auto max-w-3xl px-6 py-28 text-center sm:py-36">
          <h2 className="text-3xl leading-tight text-sand sm:text-5xl">
            Contact us to customize your journey
          </h2>
          <p className="mt-5 text-sand/80">
            Send us your dates and interests — we will reply personally, usually within 24 hours.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-semibold text-accent-foreground transition-transform hover:scale-[1.03]"
            >
              <MessageCircle className="size-4" /> Chat on WhatsApp
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-sand/50 px-8 py-4 text-sm font-semibold text-sand transition-colors hover:bg-sand hover:text-ink"
            >
              Send a booking inquiry
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
