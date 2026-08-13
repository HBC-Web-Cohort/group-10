import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { GuideCard } from "@/components/Cards";
import { guides } from "@/data/site";
import heroImage from "@/assets/about-hospitality.jpg";

export const Route = createFileRoute("/guides")({
  head: () => ({
    meta: [
      { title: "Our Local Guides | Silk Road Afghanistan" },
      {
        name: "description",
        content:
          "Meet the Afghan guides who lead our journeys — their languages, experience and the regions they know best.",
      },
      { property: "og:title", content: "Our Local Guides" },
      { property: "og:description", content: "Meet the Afghan guides who lead our journeys." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/guides" },
    ],
    links: [{ rel: "canonical", href: "/guides" }],
  }),
  component: GuidesPage,
});

function GuidesPage() {
  return (
    <>
      <PageHero
        eyebrow="The people you travel with"
        title="Our local guides"
        description="Every journey is led by an Afghan guide who knows the roads, the families, the history and the light."
        image={heroImage}
      />

      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {guides.map((guide, i) => (
            <Reveal key={guide.name} delay={i * 80}>
              <GuideCard guide={guide} />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
