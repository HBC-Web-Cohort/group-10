import { createFileRoute, Link } from "@tanstack/react-router";
import { zodValidator, fallback } from "@tanstack/zod-adapter";
import { z } from "zod";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { normalizeProvince } from "@/data/provinces";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { destinations, whatsappLink } from "@/data/site";
import heroImage from "@/assets/dest-bandeamir.jpg";

const searchSchema = z.object({
  province: fallback(z.string(), "").default(""),
  page: fallback(z.coerce.number().int().min(1), 1).default(1),
});

const DESTINATIONS_PER_PAGE = 5;

export const Route = createFileRoute("/destinations")({
  validateSearch: zodValidator(searchSchema),
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
  const { province, page } = Route.useSearch();
  const active = normalizeProvince(province);
  const availableProvinces = Array.from(new Set(destinations.map((d) => d.province))).sort();
  const filteredDestinations = active
    ? destinations.filter((d) => d.province === active)
    : destinations;
  const totalPages = Math.max(1, Math.ceil(filteredDestinations.length / DESTINATIONS_PER_PAGE));
  const currentPage = Math.min(page, totalPages);
  const visible = filteredDestinations.slice(
    (currentPage - 1) * DESTINATIONS_PER_PAGE,
    currentPage * DESTINATIONS_PER_PAGE,
  );
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);
  const pageSearch = (nextPage: number) => ({ province: active ?? "", page: nextPage });

  return (
    <>
      <PageHero
        eyebrow="Where we travel"
        title="Destinations across Afghanistan"
        description="From the blue lakes of Band-e Amir to the Pamir valleys of the Wakhan, every route is planned and guided by Afghans who live there."
        image={heroImage}
      />

      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <nav aria-label="Filter destinations by province" className="mb-14">
          <ul className="flex flex-wrap gap-2">
            <li>
              <Link
                to="/destinations"
                search={{ province: "", page: 1 }}
                className={cn(
                  "inline-flex rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                  !active
                    ? "border-accent bg-accent text-accent-foreground"
                    : "border-border text-muted-foreground hover:border-accent hover:text-foreground",
                )}
              >
                All destinations
              </Link>
            </li>
            {availableProvinces.map((p) => (
              <li key={p}>
                <Link
                  to="/destinations"
                  search={{ province: p, page: 1 }}
                  aria-current={active === p ? "page" : undefined}
                  className={cn(
                    "inline-flex rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                    active === p
                      ? "border-accent bg-accent text-accent-foreground"
                      : "border-border text-muted-foreground hover:border-accent hover:text-foreground",
                  )}
                >
                  {p}
                </Link>
              </li>
            ))}
          </ul>
          {active && (
            <p className="mt-4 text-sm text-muted-foreground">
              Showing {filteredDestinations.length} destination
              {filteredDestinations.length === 1 ? "" : "s"} in {active}.{" "}
              <Link
                to="/destinations"
                search={{ province: "", page: 1 }}
                className="text-accent underline underline-offset-4"
              >
                Clear filter
              </Link>
            </p>
          )}
        </nav>

        <div id="destination-list" className="space-y-20 scroll-mt-28">
          {visible.map((destination, index) => (
            <Reveal key={destination.slug} as="article" className="scroll-mt-28">
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

        {filteredDestinations.length === 0 && (
          <p className="text-center text-muted-foreground">
            We do not run scheduled trips in {active} yet — message us and we will plan a custom
            route.
          </p>
        )}

        {filteredDestinations.length > DESTINATIONS_PER_PAGE && (
          <nav
            aria-label="Destination pages"
            className="mt-16 flex flex-col items-center justify-between gap-4 rounded-2xl border border-border bg-card p-4 shadow-soft sm:flex-row"
          >
            <p className="text-sm text-muted-foreground">
              Showing {(currentPage - 1) * DESTINATIONS_PER_PAGE + 1}–
              {Math.min(currentPage * DESTINATIONS_PER_PAGE, filteredDestinations.length)} of{" "}
              {filteredDestinations.length} destinations
            </p>
            <div className="flex items-center gap-1.5" role="list">
              {currentPage > 1 ? (
                <Link
                  to="/destinations"
                  search={pageSearch(currentPage - 1)}
                  hash="destination-list"
                  aria-label="Previous page"
                  className="inline-flex size-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-accent hover:bg-accent hover:text-accent-foreground"
                >
                  <ChevronLeft className="size-4" aria-hidden="true" />
                </Link>
              ) : (
                <span
                  aria-hidden="true"
                  className="inline-flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground/40"
                >
                  <ChevronLeft className="size-4" />
                </span>
              )}
              {pageNumbers.map((pageNumber) => (
                <Link
                  key={pageNumber}
                  to="/destinations"
                  search={pageSearch(pageNumber)}
                  hash="destination-list"
                  aria-current={pageNumber === currentPage ? "page" : undefined}
                  className={cn(
                    "inline-flex size-10 items-center justify-center rounded-full border text-sm font-semibold transition-all",
                    pageNumber === currentPage
                      ? "border-primary bg-primary text-primary-foreground shadow-soft"
                      : "border-border text-foreground hover:border-accent hover:bg-accent hover:text-accent-foreground",
                  )}
                >
                  {pageNumber}
                </Link>
              ))}
              {currentPage < totalPages ? (
                <Link
                  to="/destinations"
                  search={pageSearch(currentPage + 1)}
                  hash="destination-list"
                  aria-label="Next page"
                  className="inline-flex size-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-accent hover:bg-accent hover:text-accent-foreground"
                >
                  <ChevronRight className="size-4" aria-hidden="true" />
                </Link>
              ) : (
                <span
                  aria-hidden="true"
                  className="inline-flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground/40"
                >
                  <ChevronRight className="size-4" />
                </span>
              )}
            </div>
          </nav>
        )}
      </section>
    </>
  );
}
