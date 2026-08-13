import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { travelInfo } from "@/data/site";
import heroImage from "@/assets/dest-kabul.jpg";

export const Route = createFileRoute("/travel-info")({
  head: () => ({
    meta: [
      { title: "Travel Information for Afghanistan | Silk Road Afghanistan" },
      {
        name: "description",
        content:
          "Visas, the best time to visit, local customs, currency and preparation tips for international travelers coming to Afghanistan.",
      },
      { property: "og:title", content: "Travel Information for Afghanistan" },
      {
        property: "og:description",
        content: "Practical guidance for international travelers visiting Afghanistan.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/travel-info" },
    ],
    links: [{ rel: "canonical", href: "/travel-info" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: travelInfo.map((item) => ({
            "@type": "Question",
            name: item.title,
            acceptedAnswer: { "@type": "Answer", text: item.body },
          })),
        }),
      },
    ],
  }),
  component: TravelInfoPage,
});

function TravelInfoPage() {
  return (
    <>
      <PageHero
        eyebrow="Before you travel"
        title="Travel information"
        description="Honest, practical guidance so you arrive prepared and confident."
        image={heroImage}
      />

      <section className="mx-auto max-w-4xl px-6 py-20 sm:py-28">
        <div className="space-y-10">
          {travelInfo.map((item, i) => (
            <Reveal key={item.title} delay={i * 60}>
              <div className="border-b border-border pb-10 last:border-0">
                <h2 className="text-2xl sm:text-3xl">{item.title}</h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
