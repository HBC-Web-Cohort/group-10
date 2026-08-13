import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { destinations, whatsappLink } from "@/data/site";
import heroImage from "@/assets/dest-bandeamir.jpg";

export const Route = createFileRoute("/destinations")({
  head: () => ({
    meta: [
      { title: "Destinations in Afghanistan | Silk Road Afghanistan" },
      {
        name: "description",
        content:
          "Kabul, Bamiyan, Band-e Amir, Herat and the Wakhan Corridor — the destinations we guide travelers through across Afghanistan.",
      },
      { property: "og:title", content: "Destinations in Afghanistan" },
      {
        property: "og:description",
        content: "Explore Afghanistan's most beautiful regions with trusted local guides.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/destinations" },
    ],
    links: [{ rel: "canonical", href: "/destinations" }],
  }),
  component: DestinationsPage,
});

function DestinationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Where we travel"
        title="Destinations across Afghanistan"
        description="From the blue lakes of Band-e Amir to the Pamir valleys of the Wakhan, every route is planned and guided by Afghans who live there."
        image={heroImage}
      />

      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="space-y-20">
          {destinations.map((destination, index) => (
            <Reveal
              key={destination.slug}
              as="article"
              className="scroll-mt-28"
            >
              <div id={destination.slug} className="grid items-center gap-10 md:grid-cols-2">
                <div className={index % 2 === 1 ? "md:order-2" : undefined}>
                  <img
                    src={destination.image}
                    alt={`${destination.name}, Afghanistan`}
                    loading="lazy"
                    width={1200}
                    height={900}
                    className="aspect-[4/3] w-full rounded-xl object-cover shadow-elegant"
                  />
                </div>
                <div>
                  <p className="eyebrow">{destination.region}</p>
                  <h2 className="rule-gold mt-3 text-3xl sm:text-4xl">{destination.name}</h2>
                  <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                    {destination.description}
                  </p>
                  <ul className="mt-6 grid gap-2 text-sm sm:grid-cols-2">
                    {destination.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={whatsappLink(`Hello, I would like to visit ${destination.name}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-7 inline-flex rounded-full border border-primary px-6 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    Plan a trip to {destination.name}
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
