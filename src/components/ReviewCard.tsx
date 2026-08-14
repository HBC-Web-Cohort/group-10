import { Quote } from "lucide-react";
import { StarRating } from "@/components/Cards";
import type { Review } from "@/data/site";

export function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="flex h-full flex-col rounded-xl border border-border bg-card p-6 shadow-soft">
      <div className="flex items-center justify-between gap-3">
        <StarRating value={review.rating} />
        <Quote className="size-5 text-accent/60" aria-hidden="true" />
      </div>
      <h3 className="mt-4 text-xl">{review.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{review.body}</p>
      <footer className="mt-6 border-t border-border pt-4 text-sm">
        <p className="font-semibold">
          {review.name} <span className="font-normal text-muted-foreground">· {review.country}</span>
        </p>
        <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
          {review.tour} · {review.date}
        </p>
      </footer>
    </article>
  );
}
