import { Download, Quote } from "lucide-react";
import referenceLetter from "@/assets/projects/Referance letter.pdf?url";

export function ProofPanel() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-center gap-3">
          <span className="h-px w-10 bg-accent" />
          <span className="text-xs font-semibold uppercase text-accent">Reference</span>
          <span className="h-px w-10 bg-accent" />
        </div>

        <Quote className="mx-auto h-8 w-8 text-accent" strokeWidth={1.5} />
        <blockquote className="mt-6 text-2xl font-medium leading-snug text-foreground lg:text-3xl">
          Baseret på vores erfaring kan vi uden tøven anbefale MG-T til andre pharma-anlæg og
          lignende krævende projektmiljøer, hvor kvalitet, professionalisme, tilpasningsevne og
          samarbejde er afgørende.
        </blockquote>
        <div className="mx-auto mt-8 w-fit border-t border-border pt-6">
          <div className="text-sm font-bold text-foreground">Peter Dé Armand</div>
          <div className="mt-1 text-xs uppercase text-muted-foreground">
            Construction Technical Lead, større dansk medicinalfirma
          </div>
        </div>

        <a
          href={referenceLetter}
          download="Referencebrev-MG-T.pdf"
          className="mt-10 inline-flex items-center gap-2 border border-foreground px-6 py-3 text-sm font-semibold uppercase text-foreground transition-colors hover:border-accent hover:bg-accent hover:text-accent-foreground"
        >
          Download hele referencebrevet <Download className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}
