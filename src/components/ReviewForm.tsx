import { useState } from "react";
import { Star } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import type { StoredReview } from "@/lib/reviews-store";

function Stars({
  value,
  onChange,
  label,
}: {
  value: number;
  onChange: (n: number) => void;
  label: string;
}) {
  const [hover, setHover] = useState(0);
  return (
    <fieldset>
      <legend className="text-sm font-medium">{label}</legend>
      <div className="mt-2 flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((n) => (
          <button
            key={n}
            type="button"
            onClick={() => onChange(n)}
            onMouseEnter={() => setHover(n)}
            onMouseLeave={() => setHover(0)}
            aria-label={`${label}: ${n} star${n > 1 ? "s" : ""}`}
            aria-pressed={value === n}
            className="rounded p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <Star
              aria-hidden="true"
              className={cn(
                "size-6 transition-colors",
                n <= (hover || value) ? "fill-accent text-accent" : "text-muted-foreground/40",
              )}
            />
          </button>
        ))}
      </div>
    </fieldset>
  );
}

export function ReviewForm({ onSubmitReview }: { onSubmitReview: (r: StoredReview) => void }) {
  const [guideRating, setGuideRating] = useState(5);
  const [companyRating, setCompanyRating] = useState(5);
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;

    const name = (data['name'] ?? "").trim();
    const country = (data['country'] ?? "").trim();
    const body = (data['body'] ?? "").trim();
    if (name.length < 2 || country.length < 2 || body.length < 10) {
      toast.error("Please add your name, country and a review of at least 10 characters.");
      return;
    }

    const dest = (data['destination'] ?? "").trim();
    const guide = (data['guideName'] ?? "").trim();
    setSubmitting(true);
    const review: StoredReview = {
      id:
        typeof crypto !== "undefined" && "randomUUID" in crypto
          ? crypto.randomUUID()
          : `r-${Date.now()}`,
      name,
      country,
      rating: Math.round((guideRating + companyRating) / 2),
      guideRating,
      companyRating,
      date: new Date().toLocaleDateString("en-GB", { month: "long", year: "numeric" }),
      tour: (data['tour'] ?? "").trim() || "Custom itinerary",
      ...(dest ? { destination: dest } : {}),
      ...(guide ? { guideName: guide } : {}),
      title: (data['title'] ?? "").trim() || "A trip to remember",
      body,
    };

    onSubmitReview(review);
    form.reset();
    setGuideRating(5);
    setCompanyRating(5);
    setSubmitting(false);
    toast.success("Thank you for your review", {
      description: "It now appears on this page and is saved in this browser.",
    });
  };

  return (
    <form onSubmit={onSubmit} className="rounded-xl border border-border bg-card p-6 shadow-soft sm:p-8">
      <h3 className="text-2xl">Share your experience</h3>
      <p className="mt-2 text-sm text-muted-foreground">
        Travelled with us? Your words help other visitors decide.
      </p>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <Stars value={guideRating} onChange={setGuideRating} label="Guide rating" />
        <Stars value={companyRating} onChange={setCompanyRating} label="Company rating" />
      </div>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="review-name">Name</Label>
          <Input id="review-name" name="name" required autoComplete="name" className="mt-2" />
        </div>
        <div>
          <Label htmlFor="review-country">Country</Label>
          <Input id="review-country" name="country" required autoComplete="country-name" className="mt-2" />
        </div>
        <div>
          <Label htmlFor="review-tour">Tour you joined</Label>
          <Input id="review-tour" name="tour" placeholder="e.g. Afghanistan Discovery Tour" className="mt-2" />
        </div>
        <div>
          <Label htmlFor="review-guide">Your guide</Label>
          <Input id="review-guide" name="guideName" placeholder="e.g. Ahmad Rahimi" className="mt-2" />
        </div>
      </div>

      <div className="mt-5">
        <Label htmlFor="review-title">Review title</Label>
        <Input id="review-title" name="title" placeholder="e.g. Beyond anything I expected" className="mt-2" />
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
        Reviews you submit are stored in this browser only, so they stay visible after a refresh on
        this device.
      </p>
    </form>
  );
}
