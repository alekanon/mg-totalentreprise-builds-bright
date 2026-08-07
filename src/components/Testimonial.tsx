import { Quote } from "lucide-react";

export function Testimonial() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-sm border border-border bg-surface p-10 lg:p-16">
          <Quote className="absolute -top-5 left-10 h-10 w-10 fill-accent text-accent" />
          <p className="text-xl font-medium leading-relaxed text-foreground lg:text-2xl">
            "Baseret på vores erfaring kan vi uden tøven anbefale MG-T til andre pharma-anlæg og
            lignende krævende projektmiljøer, hvor kvalitet, professionalisme, tilpasningsevne og
            samarbejde er afgørende. Vi betragter dem som en meget stærk samarbejdspartner og vil
            med tiltro samarbejde med dem igen på fremtidige projekter."
          </p>
          <div className="mt-8 flex items-center gap-4 border-t border-border pt-6">
            <div className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-accent/10 text-sm font-bold text-accent">
              PD
            </div>
            <div>
              <div className="text-sm font-bold text-foreground">Peter Dé Armand</div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">
                Construction Technical Lead, Novo Nordisk Pharmatech A/S
              </div>
              <div className="mt-0.5 text-[11px] uppercase tracking-wider text-muted-foreground/70">
                Køge North Silica Facility
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
