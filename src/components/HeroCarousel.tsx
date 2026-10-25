import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronLeft, ChevronRight, MessageCircle, Pause, Play } from "lucide-react";
import { cn } from "@/lib/utils";
import { heroSlides, whatsappLink } from "@/data/site";

const INTERVAL = 6500;

export function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduced = useRef(false);

  useEffect(() => {
    reduced.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced.current) setPaused(true);
  }, []);

  const go = useCallback((dir: number) => {
    setIndex((i) => (i + dir + heroSlides.length) % heroSlides.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => go(1), INTERVAL);
    return () => window.clearInterval(id);
  }, [paused, go]);

  const slide = heroSlides[index]!;

  return (
    <section
      className="relative isolate flex min-h-[62svh] items-center overflow-hidden sm:min-h-[68svh] lg:min-h-[72svh]"
      aria-roledescription="carousel"
      aria-label="Featured provinces of Afghanistan"
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") go(1);
        if (e.key === "ArrowLeft") go(-1);
      }}
    >
      {heroSlides.map((s, i) => (
        <img
          key={s.slug}
          src={s.image}
          alt={s.imageAlt}
          width={1920}
          height={1080}
          loading={i === 0 ? "eager" : "lazy"}
          fetchPriority={i === 0 ? "high" : "low"}
          decoding={i === 0 ? "sync" : "async"}
          aria-hidden={i !== index}
          className={cn(
            "absolute inset-0 -z-10 size-full object-cover transition-opacity duration-[1600ms] ease-out",
            i === index ? "opacity-100" : "opacity-0",
          )}
        />
      ))}
      <div className="hero-overlay absolute inset-0 -z-10" />

      <div className="mx-auto w-full max-w-6xl px-6 pb-12 pt-20 sm:pb-16 sm:pt-24">
        <div
          key={slide.slug}
          aria-live="polite"
          aria-roledescription="slide"
          aria-label={`${index + 1} of ${heroSlides.length}: ${slide.province}`}
          className="animate-in fade-in slide-in-from-bottom-4 duration-1000"
        >
          <p className="eyebrow text-gold-soft">{slide.province} · Afghanistan</p>
          <h1 className="mt-5 max-w-4xl text-4xl leading-[1.06] text-sand sm:text-6xl md:text-7xl">
            {slide.title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-sand/85 sm:text-xl">
            {slide.description}
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            to="/destinations"
            search={{ province: slide.province }}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-semibold text-accent-foreground transition-transform hover:scale-[1.03]"
          >
            Explore {slide.province} <ArrowRight className="size-4" aria-hidden="true" />
          </Link>

          <a
            href={whatsappLink(`Hello, I'm interested in traveling to ${slide.province}.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-sand/50 px-8 py-4 text-sm font-semibold text-sand backdrop-blur-sm transition-colors hover:bg-sand hover:text-ink"
          >
            <MessageCircle className="size-4" aria-hidden="true" /> Contact Us on WhatsApp
          </a>
        </div>

        <div className="mt-14 flex items-center gap-3">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous slide"
            className="rounded-full border border-sand/40 p-2 text-sand transition-colors hover:bg-sand hover:text-ink"
          >
            <ChevronLeft className="size-4" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next slide"
            className="rounded-full border border-sand/40 p-2 text-sand transition-colors hover:bg-sand hover:text-ink"
          >
            <ChevronRight className="size-4" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => setPaused((p) => !p)}
            aria-label={paused ? "Play slideshow" : "Pause slideshow"}
            className="rounded-full border border-sand/40 p-2 text-sand transition-colors hover:bg-sand hover:text-ink"
          >
            {paused ? (
              <Play className="size-4" aria-hidden="true" />
            ) : (
              <Pause className="size-4" aria-hidden="true" />
            )}
          </button>

          <ul className="ml-3 flex max-w-[calc(100vw-12rem)] items-center gap-2 overflow-x-auto pb-1">
            {heroSlides.map((s, i) => (
              <li key={s.slug}>
                <button
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Show ${s.province}`}
                  aria-current={i === index}
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-500",
                    i === index ? "w-10 bg-gold" : "w-4 bg-sand/45 hover:bg-sand/70",
                  )}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
