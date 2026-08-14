import { Link } from "@tanstack/react-router";
import { ArrowRight, Clock, MapPin, Languages, Award, Star } from "lucide-react";
import type { Destination, Guide, Tour } from "@/data/site";
import { whatsappLink } from "@/data/site";

export function DestinationCard({ destination }: { destination: Destination }) {
  return (
    <article className="group relative isolate overflow-hidden rounded-xl shadow-soft transition-shadow duration-500 hover:shadow-elegant">
      <div className="aspect-[4/5] overflow-hidden">
        <img
          src={destination.image}
          alt={`${destination.name}, Afghanistan`}
          loading="lazy"
          width={1200}
          height={900}
          className="size-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
        />
      </div>
      <div className="card-overlay pointer-events-none absolute inset-0" />
      <div className="absolute inset-x-0 bottom-0 p-6">
        <p className="eyebrow text-gold-soft">{destination.region}</p>
        <h3 className="mt-2 text-2xl text-sand">{destination.name}</h3>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-sand/80">
          {destination.description}
        </p>
        <Link
          to="/destinations"
          hash={destination.slug}
          className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-gold transition-colors hover:text-gold-soft"
        >
          Learn more <ArrowRight className="size-4" />
        </Link>
      </div>
    </article>
  );
}

export function TourCard({ tour }: { tour: Tour }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-soft transition-shadow duration-500 hover:shadow-elegant">
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={tour.image}
          alt={tour.name}
          loading="lazy"
          width={1200}
          height={900}
          className="size-full object-cover transition-transform duration-[900ms] ease-out hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-2xl">{tour.name}</h3>
        <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-2">
            <Clock className="size-4 text-accent" /> {tour.duration}
          </span>
          <span className="inline-flex items-center gap-2">
            <MapPin className="size-4 text-accent" /> {tour.route}
          </span>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{tour.summary}</p>
        <ul className="mt-5 grid gap-2 text-sm sm:grid-cols-2">
          {tour.includes.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
              {item}
            </li>
          ))}
        </ul>
        <a
          href={whatsappLink(`Hello, I'm interested in the ${tour.name}. Can you help me customize it?`)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-primary px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          Contact us to customize your journey <ArrowRight className="size-4" />
        </a>
      </div>
    </article>
  );
}

export function StarRating({ value, size = "sm" }: { value: number; size?: "sm" | "md" }) {
  const full = Math.round(value);
  return (
    <span
      className="inline-flex items-center gap-0.5"
      role="img"
      aria-label={`Rated ${value} out of 5`}
    >
      {[1, 2, 3, 4, 5].map((n) => (
        <Star
          key={n}
          aria-hidden="true"
          className={
            (size === "md" ? "size-5 " : "size-4 ") +
            (n <= full ? "fill-accent text-accent" : "text-muted-foreground/40")
          }
        />
      ))}
    </span>
  );
}

export function GuideCard({ guide }: { guide: Guide }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-soft transition-shadow duration-500 hover:shadow-elegant">
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={guide.image}
          alt={`${guide.name}, ${guide.role}`}
          loading="lazy"
          width={800}
          height={1000}
          className="size-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
        />
        <div className="card-overlay pointer-events-none absolute inset-0" />
        <div className="absolute inset-x-0 bottom-0 p-5">
          <h3 className="text-2xl text-sand">{guide.name}</h3>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-soft">
            {guide.role}
          </p>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-2">
          <StarRating value={guide.rating} />
          <span className="text-sm font-semibold">{guide.rating.toFixed(1)}</span>
          <span className="text-sm text-muted-foreground">({guide.reviewCount} reviews)</span>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{guide.intro}</p>

        <dl className="mt-5 space-y-2 text-sm text-muted-foreground">
          <div className="flex items-start gap-2">
            <MapPin className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
            <dt className="sr-only">Based in</dt>
            <dd>{guide.based} · {guide.specialty}</dd>
          </div>
          <div className="flex items-start gap-2">
            <Languages className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
            <dt className="sr-only">Languages</dt>
            <dd>{guide.languages}</dd>
          </div>
          <div className="flex items-start gap-2">
            <Award className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
            <dt className="sr-only">Experience</dt>
            <dd>{guide.experience}</dd>
          </div>
        </dl>

        <a
          href={whatsappLink(`Hello, I would like to travel with ${guide.name}.`)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-primary px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          Request {guide.name} as your guide <ArrowRight className="size-4" aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}

export function StoryCard({
  story,
}: {
  story: { slug: string; title: string; excerpt: string; category: string; readTime: string; image: string };
}) {
  return (
    <article className="group overflow-hidden rounded-xl border border-border bg-card shadow-soft">
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={story.image}
          alt={story.title}
          loading="lazy"
          width={1200}
          height={900}
          className="size-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <p className="eyebrow">
          {story.category} · {story.readTime}
        </p>
        <h3 className="mt-2 text-xl">{story.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{story.excerpt}</p>
        <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">
          Coming soon
        </span>
      </div>
    </article>
  );
}
