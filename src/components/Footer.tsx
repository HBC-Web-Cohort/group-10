import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Mail, MessageCircle, Music2, AtSign } from "lucide-react";
import { company, mailtoLink, whatsappLink } from "@/data/site";

const links = [
  { to: "/", label: "Home" },
  { to: "/destinations", label: "Destinations" },
  { to: "/tours", label: "Tours" },
  { to: "/guides", label: "Guides" },
  { to: "/contact", label: "Contact" },
] as const;

export function Footer() {
  return (
    <footer className="bg-secondary/60 text-muted-foreground dark:bg-ink dark:text-sand/80">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl text-foreground dark:text-sand">Silk Road Afghanistan</p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed">{company.tagline}</p>
          <div className="mt-6 flex gap-3">
            <a href={company.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="rounded-full border border-border p-2 transition-colors hover:border-accent hover:text-accent dark:border-sand/25 dark:hover:border-gold dark:hover:text-gold">
              <Instagram className="size-4" />
            </a>
            <a href={company.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="rounded-full border border-border p-2 transition-colors hover:border-accent hover:text-accent dark:border-sand/25 dark:hover:border-gold dark:hover:text-gold">
              <Facebook className="size-4" />
            </a>
            <a href={company.social.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="rounded-full border border-border p-2 transition-colors hover:border-accent hover:text-accent dark:border-sand/25 dark:hover:border-gold dark:hover:text-gold">
              <Music2 className="size-4" />
            </a>
            <a href={company.social.threads} target="_blank" rel="noopener noreferrer" aria-label="Threads" className="rounded-full border border-border p-2 transition-colors hover:border-accent hover:text-accent dark:border-sand/25 dark:hover:border-gold dark:hover:text-gold">
              <AtSign className="size-4" />
            </a>
          </div>
        </div>

        <nav aria-label="Footer">
          <p className="eyebrow dark:text-gold-soft">Explore</p>
          <ul className="mt-5 space-y-3 text-sm">
            {links.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition-colors hover:text-accent dark:hover:text-gold">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="eyebrow dark:text-gold-soft">Contact</p>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-accent dark:hover:text-gold">
                <MessageCircle className="size-4" /> WhatsApp {company.whatsappDisplay}
              </a>
            </li>
            <li>
              <a href={mailtoLink()} className="inline-flex items-center gap-2 transition-colors hover:text-accent dark:hover:text-gold">
                <Mail className="size-4" /> {company.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border dark:border-sand/15">
        <div className="mx-auto max-w-6xl px-6 py-6 text-xs text-muted-foreground dark:text-sand/55">
          © {new Date().getFullYear()} Silk Road Afghanistan. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
