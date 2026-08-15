import { useMemo, useState } from "react";
import { Check, ChevronsUpDown, X } from "lucide-react";
import { AFGHAN_PROVINCES } from "@/data/provinces";
import { cn } from "@/lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

type Props = {
  value: string[];
  onChange: (next: string[]) => void;
  id?: string;
};

export function ProvinceMultiSelect({ value, onChange, id }: Props) {
  const [open, setOpen] = useState(false);
  const selected = useMemo(() => new Set(value), [value]);

  const toggle = (province: string) => {
    onChange(selected.has(province) ? value.filter((p) => p !== province) : [...value, province]);
  };

  return (
    <div>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <button
            id={id}
            type="button"
            role="combobox"
            aria-expanded={open}
            className="mt-2 flex w-full items-center justify-between gap-2 rounded-md border border-input bg-background px-4 py-3 text-left text-sm text-foreground transition-colors hover:border-accent focus:outline-none focus:ring-2 focus:ring-ring/40"
          >
            <span className={cn(value.length === 0 && "text-muted-foreground")}>
              {value.length === 0
                ? "Select provinces"
                : `${value.length} province${value.length > 1 ? "s" : ""} selected`}
            </span>
            <ChevronsUpDown className="size-4 shrink-0 opacity-60" aria-hidden="true" />
          </button>
        </PopoverTrigger>
        <PopoverContent className="w-[min(22rem,90vw)] p-0" align="start">
          <Command>
            <CommandInput placeholder="Search provinces…" />
            <CommandList className="max-h-64">
              <CommandEmpty>No province found.</CommandEmpty>
              <CommandGroup>
                {AFGHAN_PROVINCES.map((province) => (
                  <CommandItem key={province} value={province} onSelect={() => toggle(province)}>
                    <Check
                      className={cn(
                        "mr-2 size-4",
                        selected.has(province) ? "opacity-100" : "opacity-0",
                      )}
                      aria-hidden="true"
                    />
                    {province}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
          <div className="flex items-center justify-between border-t border-border px-3 py-2 text-xs">
            <button
              type="button"
              className="text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => onChange([...AFGHAN_PROVINCES])}
            >
              Select all
            </button>
            <button
              type="button"
              className="text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => onChange([])}
            >
              Clear all
            </button>
          </div>
        </PopoverContent>
      </Popover>

      {value.length > 0 && (
        <ul className="mt-3 flex flex-wrap gap-2">
          {value.map((province) => (
            <li key={province}>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                {province}
                <button
                  type="button"
                  aria-label={`Remove ${province}`}
                  onClick={() => toggle(province)}
                  className="rounded-full transition-colors hover:text-destructive"
                >
                  <X className="size-3.5" aria-hidden="true" />
                </button>
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
