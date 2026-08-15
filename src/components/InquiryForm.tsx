import { useState, type FormEvent } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { company } from "@/data/site";
import { ProvinceMultiSelect } from "@/components/ProvinceMultiSelect";

const schema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name").max(100),
  country: z.string().trim().min(2, "Please enter your country").max(80),
  email: z.string().trim().email("Please enter a valid email address").max(255),
  whatsapp: z.string().trim().min(6, "Please enter your WhatsApp number").max(30),
  travelDates: z.string().trim().max(120).optional().or(z.literal("")),
  travelers: z.string().trim().max(10).optional().or(z.literal("")),
  message: z.string().trim().max(1500).optional().or(z.literal("")),
});

const fieldClass =
  "mt-2 w-full rounded-md border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-ring/40";

export function InquiryForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [interests, setInterests] = useState<string[]>([]);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const parsed = schema.safeParse(data);

    if (!parsed.success) {
      const next: Record<string, string> = {};
      parsed.error.issues.forEach((issue) => {
        const key = String(issue.path[0]);
        if (!next[key]) next[key] = issue.message;
      });
      setErrors(next);
      toast.error("Please check the highlighted fields.");
      return;
    }

    setErrors({});
    const v = parsed.data;
    const body = [
      `Full name: ${v.fullName}`,
      `Country: ${v.country}`,
      `Email: ${v.email}`,
      `WhatsApp: ${v.whatsapp}`,
      `Travel dates: ${v.travelDates || "-"}`,
      `Number of travelers: ${v.travelers || "-"}`,
      `Interested destinations: ${interests.length ? interests.join(", ") : "-"}`,
      "",
      "Message:",
      v.message || "-",
    ].join("\n");

    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(
      `Booking inquiry — ${v.fullName}`,
    )}&body=${encodeURIComponent(body)}`;

    toast.success("Opening your email app with the inquiry ready to send.");
  };

  const Error = ({ name }: { name: string }) =>
    errors[name] ? (
      <p className="mt-1 text-xs text-destructive" role="alert">
        {errors[name]}
      </p>
    ) : null;

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
      <div>
        <label htmlFor="fullName" className="text-sm font-medium">
          Full name
        </label>
        <input id="fullName" name="fullName" className={fieldClass} maxLength={100} autoComplete="name" />
        <Error name="fullName" />
      </div>
      <div>
        <label htmlFor="country" className="text-sm font-medium">
          Country
        </label>
        <input id="country" name="country" className={fieldClass} maxLength={80} autoComplete="country-name" />
        <Error name="country" />
      </div>
      <div>
        <label htmlFor="email" className="text-sm font-medium">
          Email
        </label>
        <input id="email" name="email" type="email" className={fieldClass} maxLength={255} autoComplete="email" />
        <Error name="email" />
      </div>
      <div>
        <label htmlFor="whatsapp" className="text-sm font-medium">
          WhatsApp number
        </label>
        <input id="whatsapp" name="whatsapp" className={fieldClass} maxLength={30} autoComplete="tel" />
        <Error name="whatsapp" />
      </div>
      <div>
        <label htmlFor="travelDates" className="text-sm font-medium">
          Travel dates
        </label>
        <input id="travelDates" name="travelDates" placeholder="e.g. May 2027, 10 days" className={fieldClass} maxLength={120} />
      </div>
      <div>
        <label htmlFor="travelers" className="text-sm font-medium">
          Number of travelers
        </label>
        <input id="travelers" name="travelers" type="number" min={1} max={40} className={fieldClass} />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="interests" className="text-sm font-medium">
          Interested destinations
        </label>
        <ProvinceMultiSelect id="interests" value={interests} onChange={setInterests} />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="message" className="text-sm font-medium">
          Message
        </label>
        <textarea id="message" name="message" rows={5} maxLength={1500} className={fieldClass} />
      </div>
      <div className="sm:col-span-2">
        <button
          type="submit"
          className="w-full rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.01] sm:w-auto"
        >
          Send booking inquiry
        </button>
        <p className="mt-3 text-xs text-muted-foreground">
          Your inquiry is sent to {company.email}. We usually reply within 24 hours.
        </p>
      </div>
    </form>
  );
}
