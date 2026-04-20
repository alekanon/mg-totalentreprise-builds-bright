import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import teamImg from "@/assets/team-onsite.jpg";

export function AboutTeaser() {
  return (
    <section className="bg-surface-dark py-20 text-background lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 lg:order-1">
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
              håndværkere. Vi sætter en ære i kontinuitet: de samme folk følger sagen, og du har
              altid én fast kontaktperson, uanset projektets størrelse.
            </p>
            <p className="mt-4 text-base leading-relaxed text-background/75 lg:text-lg">
              Vores projektledere fører dagligt tilsyn, så spørgsmål og uklarheder bliver løst,
              før de bliver til forsinkelser.
            </p>
            <Link
              to="/om-os"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-accent hover:gap-3 transition-all"
            >
              Læs mere om os <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="order-1 lg:order-2">
            <img
              src={teamImg}
              alt="MG Totalentreprise håndværkere på byggeplads"
              width={1280}
              height={896}
              loading="lazy"
              className="h-full w-full rounded-sm object-cover shadow-[var(--shadow-elegant)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
