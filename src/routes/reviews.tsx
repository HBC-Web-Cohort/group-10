import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { StarRating } from "@/components/Cards";
import { ReviewCard } from "@/components/ReviewCard";
import { ReviewForm } from "@/components/ReviewForm";
import { reviews } from "@/data/site";
import heroImage from "@/assets/dest-bandeamir.jpg";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Traveler Reviews | Silk Road Afghanistan" },
      {
        name: "description",
        content:
          "Read honest reviews from travelers who explored Kabul, Bamiyan, Herat and the Wakhan Corridor with our Afghan guides — and share your own.",
      },
      { property: "og:title", content: "Traveler Reviews | Silk Road Afghanistan" },
      {
        property: "og:description",
        content: "Honest reviews from international travelers guided across Afghanistan.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/reviews" },
    ],
    links: [{ rel: "canonical", href: "/reviews" }],
  }),
  component: ReviewsPage,
});

const average = reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;

const distribution = [5, 4, 3, 2, 1].map((star) => ({
  star,
  count: reviews.filter((r) => r.rating === star).length,
}));

function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Traveler reviews"
        title="What travelers say"
        description="Unedited words from visitors who crossed Afghanistan with our guides — the highlights and the honest caveats."
        image={heroImage}
      />

      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <Reveal>
          <div className="grid gap-10 rounded-xl border border-border bg-card p-8 shadow-soft md:grid-cols-[auto_1fr] md:items-center">
            <div className="text-center md:text-left">
              <p className="font-display text-6xl leading-none">{average.toFixed(1)}</p>
              <div className="mt-3 flex justify-center md:justify-start">
                <StarRating value={average} size="md" />
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Based on {reviews.length} verified traveler reviews
              </p>
            </div>
            <dl className="space-y-2">
              {distribution.map((row) => (
                <div key={row.star} className="flex items-center gap-3 text-sm">
                  <dt className="w-14 shrink-0 text-muted-foreground">{row.star} star</dt>
                  <dd className="flex flex-1 items-center gap-3">
                    <span className="h-2 flex-1 overflow-hidden rounded-full bg-secondary">
                      <span
                        className="block h-full rounded-full bg-accent"
                        style={{ width: `${(row.count / reviews.length) * 100}%` }}
                      />
                    </span>
                    <span className="w-6 text-right tabular-nums text-muted-foreground">
                      {row.count}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, i) => (
            <Reveal key={review.id} delay={i * 70}>
              <ReviewCard review={review} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-20">
          <div className="mx-auto max-w-2xl">
            <ReviewForm />
          </div>
        </Reveal>
      </section>
    </>
  );
}
