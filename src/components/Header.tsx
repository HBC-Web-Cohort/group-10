import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { company, whatsappLink } from "@/data/site";

const nav = [
  { to: "/", label: "Home" },
  { to: "/destinations", label: "Destinations" },
  { to: "/tours", label: "Tours" },
  { to: "/guides", label: "Guides" },
  { to: "/travel-info", label: "Travel Info" },
  { to: "/reviews", label: "Reviews" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled || open
          ? "border-b border-border/60 bg-background/92 backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className={cn(
            "font-display text-lg leading-none tracking-wide transition-colors sm:text-xl",
            scrolled || open ? "text-foreground" : "text-sand",
          )}
        >
          Silk Road
          <span className="block text-[0.62rem] font-sans tracking-[0.32em] uppercase opacity-70">
            Afghanistan
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{
                className: "text-accent font-semibold after:w-full",
              }}
              className={cn(
                "relative text-sm font-medium tracking-wide transition-colors hover:text-accent",
                "after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full",
                scrolled || open ? "text-foreground/80" : "text-sand/85",
              )}
            >
              {item.label}
            </Link>
          ))}
          <ThemeToggle
            className={cn(scrolled || open ? "text-foreground/80" : "text-sand/85")}
          />
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-accent px-5 py-2 text-sm font-semibold text-accent-foreground transition-transform hover:scale-[1.03]"
          >
            WhatsApp
          </a>
        </nav>

        <div className="flex items-center gap-1 lg:hidden">
          <ThemeToggle className={cn(scrolled || open ? "text-foreground" : "text-sand")} />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className={cn(
              "rounded-md p-2 transition-colors",
              scrolled || open ? "text-foreground" : "text-sand",
            )}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-border/60 bg-background lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-6 py-4" aria-label="Mobile">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ className: "text-accent" }}
                className="border-b border-border/50 py-3 text-base text-foreground/85 last:border-0"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 rounded-full bg-accent px-5 py-3 text-center text-sm font-semibold text-accent-foreground"
            >
              Chat on WhatsApp · {company.whatsappDisplay}
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
