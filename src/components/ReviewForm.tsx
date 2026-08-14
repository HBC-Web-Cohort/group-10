import { useState } from "react";
import { Star } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function ReviewForm() {
  const [rating, setRating] = useState(5);
  const [hover, setHover] = useState(0);
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setSubmitting(true);
    window.setTimeout(() => {
      setSubmitting(false);
      form.reset();
      setRating(5);
      toast.success("Thank you for your review", {
        description: "Our team reviews every submission before it appears on the site.",
      });
    }, 600);
  };

  return (
    <form onSubmit={onSubmit} className="rounded-xl border border-border bg-card p-6 shadow-soft sm:p-8">
      <h3 className="text-2xl">Share your experience</h3>
      <p className="mt-2 text-sm text-muted-foreground">
        Travelled with us? Your words help other visitors decide.
      </p>

      <fieldset className="mt-6">
        <legend className="text-sm font-medium">Your rating</legend>
        <div className="mt-2 flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => setRating(n)}
              onMouseEnter={() => setHover(n)}
              onMouseLeave={() => setHover(0)}
              aria-label={`${n} star${n > 1 ? "s" : ""}`}
              aria-pressed={rating === n}
              className="rounded p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <Star
                aria-hidden="true"
                className={cn(
                  "size-6 transition-colors",
                  n <= (hover || rating) ? "fill-accent text-accent" : "text-muted-foreground/40",
                )}
              />
            </button>
          ))}
        </div>
      </fieldset>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="review-name">Name</Label>
          <Input id="review-name" name="name" required autoComplete="name" className="mt-2" />
        </div>
        <div>
          <Label htmlFor="review-country">Country</Label>
          <Input id="review-country" name="country" required autoComplete="country-name" className="mt-2" />
        </div>
      </div>

      <div className="mt-5">
        <Label htmlFor="review-tour">Tour you joined</Label>
        <Input id="review-tour" name="tour" placeholder="e.g. Afghanistan Discovery Tour" className="mt-2" />
      </div>

      <div className="mt-5">
        <Label htmlFor="review-body">Your review</Label>
        <Textarea id="review-body" name="body" required rows={5} className="mt-2" />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="mt-6 inline-flex items-center justify-center rounded-full bg-accent px-7 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:scale-[1.02] disabled:opacity-60"
      >
        {submitting ? "Sending…" : "Submit review"}
      </button>
      <p className="mt-3 text-xs text-muted-foreground">
        Reviews are moderated by our team before publication.
      </p>
    </form>
  );
}
