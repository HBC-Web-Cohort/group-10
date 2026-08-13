import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { TourCard } from "@/components/Cards";
import { paymentOptions, tours } from "@/data/site";
import heroImage from "@/assets/dest-wakhan.jpg";

export const Route = createFileRoute("/tours")({
  head: () => ({
    meta: [
      { title: "Tour Packages in Afghanistan | Silk Road Afghanistan" },
      {
        name: "description",
        content:
          "Sample Afghanistan itineraries: discovery, cultural heritage, mountain adventure and photography tours. Every journey is customized with our team.",
      },
      { property: "og:title", content: "Tour Packages in Afghanistan" },
      {
        property: "og:description",
        content: "Sample itineraries across Afghanistan, customized with local guides.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/tours" },
    ],
    links: [{ rel: "canonical", href: "/tours" }],
  }),
  component: ToursPage,
});

function ToursPage() {
  return (
    <>
      <PageHero
        eyebrow="Sample journeys"
        title="Tour packages"
        description="These are example itineraries, not fixed departures. Tell us your dates and interests and we shape the journey around you."
        image={heroImage}
      />

      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="grid gap-8 md:grid-cols-2">
          {tours.map((tour, i) => (
            <Reveal key={tour.slug} delay={i * 80}>
              <TourCard tour={tour} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-secondary/60 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <p className="eyebrow">Payment options</p>
          <h2 className="mt-3 text-3xl sm:text-4xl">Simple, transparent payments</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            We do not take online payments on this website. After we agree on your itinerary, you can
            settle your deposit and balance in the way that works best for you.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {paymentOptions.map((option, i) => (
              <Reveal key={option.title} delay={i * 80}>
                <div className="h-full rounded-xl border border-border bg-card p-6 shadow-soft">
                  <h3 className="text-xl">{option.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{option.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
