import { useState, type ReactNode } from "react";
import { Building2, Check, Copy, Send, Wallet } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { whatsappLink } from "@/data/site";

type Field = { label: string; value: string };

const methods = [
  {
    id: "bank",
    label: "Bank Transfer",
    icon: Building2,
    note: "Best for full payments and larger balances. Transfers usually clear in 1–3 working days.",
    fields: [
      { label: "Account name", value: "Silk Road Afghanistan Tourism Services" },
      { label: "Bank", value: "Azizi Bank, Kabul" },
      { label: "Account number (USD)", value: "0010 2233 4455 6677" },
      { label: "SWIFT / BIC", value: "AZBAAFKA" },
      { label: "Reference", value: "Your full name + tour dates" },
    ] as Field[],
  },
  {
    id: "wu",
    label: "Western Union",
    icon: Send,
    note: "Ideal for the deposit before arrival. Send us the MTCN once the transfer is placed.",
    fields: [
      { label: "Receiver first name", value: "Ahmad" },
      { label: "Receiver last name", value: "Rahimi" },
      { label: "City / Country", value: "Kabul, Afghanistan" },
      { label: "Send us", value: "MTCN + amount + sender name" },
    ] as Field[],
  },
  {
    id: "usdt",
    label: "USDT (Crypto)",
    icon: Wallet,
    note: "Fastest option. Always send a small test amount first and confirm the network.",
    fields: [
      { label: "Network", value: "TRC-20 (Tron)" },
      { label: "Wallet address", value: "TQ4mSilkRoadAfg7xK2pR9vN3dLb8Uw5Ye" },
      { label: "Alternative network", value: "BEP-20 (BNB Smart Chain)" },
      { label: "Confirm", value: "Send the transaction hash on WhatsApp" },
    ] as Field[],
  },
];

function CopyRow({ field }: { field: Field }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(field.value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="flex items-start justify-between gap-4 border-b border-border py-3 last:border-0">
      <div className="min-w-0">
        <dt className="text-xs uppercase tracking-widest text-muted-foreground">{field.label}</dt>
        <dd className="mt-1 break-words text-sm font-medium">{field.value}</dd>
      </div>
      <button
        type="button"
        onClick={copy}
        aria-label={`Copy ${field.label}`}
        className="mt-1 inline-flex shrink-0 items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-semibold transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
        {copied ? "Copied" : "Copy"}
      </button>
    </div>
  );
}

export function PaymentModal({ children }: { children: ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl">Payment options</DialogTitle>
          <DialogDescription>
            There is no online payment on this website. Choose the method that suits you and we
            confirm every detail personally before you send anything.
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="bank" className="mt-2">
          <TabsList className="grid w-full grid-cols-3">
            {methods.map((m) => (
              <TabsTrigger key={m.id} value={m.id} className="text-xs sm:text-sm">
                {m.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {methods.map((m) => (
            <TabsContent key={m.id} value={m.id} className="mt-5">
              <div className="flex items-start gap-3 rounded-lg bg-secondary/70 p-4">
                <m.icon className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden="true" />
                <p className="text-sm leading-relaxed text-muted-foreground">{m.note}</p>
              </div>
              <dl className="mt-4">
                {m.fields.map((f) => (
                  <CopyRow key={f.label} field={f} />
                ))}
              </dl>
            </TabsContent>
          ))}
        </Tabs>

        <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
          A 30% deposit secures your dates; the balance is settled on arrival in Kabul. We never ask
          for payment before an itinerary is agreed in writing.
        </p>
        <a
          href={whatsappLink("Hello, I'd like to confirm the payment details for my trip.")}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:scale-[1.02]"
        >
          Confirm details on WhatsApp
        </a>
      </DialogContent>
    </Dialog>
  );
}
