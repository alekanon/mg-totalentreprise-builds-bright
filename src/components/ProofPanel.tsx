import { Quote } from "lucide-react";

export function ProofPanel() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-center gap-3">
          <span className="h-px w-10 bg-accent" />
          <span className="text-xs font-semibold uppercase text-accent">Reference</span>
          <span className="h-px w-10 bg-accent" />
        </div>

        <Quote className="mx-auto h-10 w-10 fill-accent/15 text-accent" />
        <blockquote className="mt-6 text-2xl font-medium leading-snug text-foreground lg:text-3xl">
          Baseret på vores erfaring kan vi uden tøven anbefale MG-T til andre pharma-anlæg og
          lignende krævende projektmiljøer, hvor kvalitet, professionalisme, tilpasningsevne og
          samarbejde er afgørende.
        </blockquote>
        <div className="mx-auto mt-8 w-fit border-t border-border pt-6">
          <div className="text-sm font-bold text-foreground">Peter Dé Armand</div>
          <div className="mt-1 text-xs uppercase text-muted-foreground">
            Construction Technical Lead, Novo Nordisk Pharmatech A/S
          </div>
        </div>
      </div>
    </section>
  );
}
