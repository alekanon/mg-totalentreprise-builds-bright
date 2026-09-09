import { Quote } from "lucide-react";

export function ProofPanel() {
  return (
    <section className="bg-surface py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <Quote className="mx-auto h-8 w-8 fill-accent text-accent" />
        <blockquote className="mt-6 text-xl font-medium leading-relaxed text-foreground lg:text-2xl">
          "Baseret på vores erfaring kan vi uden tøven anbefale MG-T til andre pharma-anlæg og
          lignende krævende projektmiljøer, hvor kvalitet, professionalisme, tilpasningsevne og
          samarbejde er afgørende."
        </blockquote>
        <div className="mt-8 border-t border-border pt-6">
          <div className="text-sm font-bold text-foreground">Peter Dé Armand</div>
          <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
            Construction Technical Lead, Novo Nordisk Pharmatech A/S · Køge North Silica Facility
          </div>
        </div>
      </div>
    </section>
  );
}
