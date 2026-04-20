import { Quote } from "lucide-react";

export function Testimonial() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-sm border border-border bg-surface p-10 lg:p-16">
          <Quote className="absolute -top-5 left-10 h-10 w-10 fill-accent text-accent" />
          <p className="text-xl font-medium leading-relaxed text-foreground lg:text-2xl">
            "MG Totalentreprise leverer stabil kvalitet og holder aftaler. Faste hold på sagen og
            en fast kontaktperson gør samarbejdet enkelt – uanset projektets størrelse."
          </p>
          <div className="mt-8 flex items-center gap-4 border-t border-border pt-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-sm font-bold text-accent">
              PM
            </div>
            <div>
              <div className="text-sm font-bold text-foreground">Projektleder</div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">
                Samarbejdspartner · Hovedentreprenør
              </div>
            </div>
          </div>
        </div>

        <p className="mt-6 text-center text-xs uppercase tracking-widest text-muted-foreground">
          Godkendt underentreprenør hos Danmarks førende entreprenører
        </p>
      </div>
    </section>
  );
}
