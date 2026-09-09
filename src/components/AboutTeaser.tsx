import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import teamImg from "@/assets/team-onsite.jpg";

export function AboutTeaser() {
  return (
    <section data-header-theme="dark" className="grid lg:grid-cols-2">
      <div className="order-2 flex flex-col justify-center bg-surface-dark px-4 py-16 text-background sm:px-6 lg:order-1 lg:px-16 lg:py-24">
        <div className="mx-auto w-full max-w-lg lg:mx-0">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-10 bg-accent" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Hvem vi er
            </span>
          </div>
          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
            Faste hold, én kontaktperson – fra opstart til aflevering
          </h2>
          <p className="mt-6 text-base leading-relaxed text-background/75 lg:text-lg">
            MG Totalentreprise ApS er en dansk byggevirksomhed med ca. 30 egne, fastansatte
            håndværkere. Vi sætter en ære i kontinuitet: de samme folk følger sagen, og du har altid
            én fast kontaktperson, uanset projektets størrelse.
          </p>
          <p className="mt-4 text-base leading-relaxed text-background/75 lg:text-lg">
            Vores projektledere fører dagligt tilsyn, så spørgsmål og uklarheder bliver løst, før de
            bliver til forsinkelser.
          </p>
          <Link
            to="/om-os"
            className="group mt-8 inline-flex items-center gap-6 rounded-full bg-background py-2 pl-8 pr-2 text-sm font-semibold uppercase tracking-wide text-foreground transition-colors hover:bg-background/90"
          >
            Læs mere om os
            <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-accent text-accent-foreground transition-transform group-hover:translate-x-1">
              <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
        </div>
      </div>

      <div className="relative order-1 min-h-[320px] lg:order-2 lg:min-h-0">
        <img
          src={teamImg}
          alt="MG Totalentreprise håndværkere på byggeplads"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    </section>
  );
}
