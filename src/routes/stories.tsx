import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { StoryCard } from "@/components/Cards";
import { stories } from "@/data/site";
import heroImage from "@/assets/dest-bamiyan.jpg";

export const Route = createFileRoute("/stories")({
  head: () => ({
    meta: [
      { title: "Travel Stories from Afghanistan | Silk Road Afghanistan" },
      {
        name: "description",
        content:
          "Stories from the road: hidden gems, the history of Bamiyan valley, Afghan hospitality and journeys along the Silk Road.",
      },
      { property: "og:title", content: "Travel Stories from Afghanistan" },
      { property: "og:description", content: "Stories, history and culture from across Afghanistan." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/stories" },
    ],
    links: [{ rel: "canonical", href: "/stories" }],
  }),
  component: StoriesPage,
});

function StoriesPage() {
  return (
    <>
      <PageHero
        eyebrow="From the road"
        title="Travel stories"
        description="Notes on the places, people and history our guides love most. New articles are added regularly."
        image={heroImage}
      />

      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="grid gap-8 md:grid-cols-2">
          {stories.map((story, i) => (
            <Reveal key={story.slug} delay={i * 80}>
              <StoryCard story={story} />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
