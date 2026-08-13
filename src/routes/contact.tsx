import { createFileRoute } from "@tanstack/react-router";
import { Mail, MessageCircle } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { InquiryForm } from "@/components/InquiryForm";
import { company, mailtoLink, paymentOptions, whatsappLink } from "@/data/site";
import heroImage from "@/assets/dest-herat.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Booking Inquiry | Silk Road Afghanistan" },
      {
        name: "description",
        content:
          "Contact Silk Road Afghanistan on WhatsApp or by email, or send a booking inquiry to start planning your journey.",
      },
      { property: "og:title", content: "Contact Silk Road Afghanistan" },
      { property: "og:description", content: "Chat with us on WhatsApp or send a booking inquiry." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Let's plan together"
        title="Contact & booking inquiry"
        description="Tell us when you want to travel and what you want to see. We reply personally, usually within 24 hours."
        image={heroImage}
      />

      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="grid gap-6 md:grid-cols-2">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-xl border border-border bg-card p-8 shadow-soft transition-shadow hover:shadow-elegant"
          >
            <MessageCircle className="size-7 text-accent" />
            <h2 className="mt-4 text-2xl">Chat with us on WhatsApp</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              WhatsApp Business · {company.whatsappDisplay}
            </p>
          </a>
          <a
            href={mailtoLink("Travel inquiry — Silk Road Afghanistan")}
            className="group rounded-xl border border-border bg-card p-8 shadow-soft transition-shadow hover:shadow-elegant"
          >
            <Mail className="size-7 text-accent" />
            <h2 className="mt-4 text-2xl">Send us an email</h2>
            <p className="mt-2 text-sm text-muted-foreground">{company.email}</p>
          </a>
        </div>

        <Reveal className="mt-16 rounded-xl border border-border bg-card p-6 shadow-soft sm:p-10">
          <p className="eyebrow">Booking inquiry</p>
          <h2 className="mt-3 text-3xl">Start planning your journey</h2>
          <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
            No online payment or automated booking — just a direct conversation with our team.
          </p>
          <div className="mt-8">
            <InquiryForm />
          </div>
        </Reveal>

        <div className="mt-20">
          <p className="eyebrow">Payment options</p>
          <h2 className="mt-3 text-3xl">How travelers pay</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {paymentOptions.map((option) => (
              <div key={option.title} className="rounded-xl border border-border bg-secondary/50 p-6">
                <h3 className="text-xl">{option.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{option.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
