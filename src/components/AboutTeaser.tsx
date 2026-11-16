import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import teamImg from "@/assets/faste hold.jpeg";

const principles = [
  {
    title: "Egne håndværkere",
    text: "Fastansatte fagfolk – ikke skiftende underleverandører.",
  },
  {
    title: "Én fast kontaktperson",
    text: "Samme ansvarlige fra opstart til aflevering.",
  },
  {
    title: "Dagligt tilsyn",
    text: "Uklarheder bliver løst, før de bliver til forsinkelser.",
  },
];

export function AboutTeaser() {
  return (
    <section data-header-theme="dark" className="relative overflow-hidden bg-surface-dark lg:h-[calc(100dvh+4rem)]">
      <img
        src={teamImg}
        alt="MG Totalentreprise håndværkere på byggeplads"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/35 to-black/80" />

      <div className="relative mx-auto flex h-full min-h-[max(44rem,calc(100dvh+4rem))] max-w-[1600px] flex-col justify-between gap-24 px-4 pb-12 pt-28 sm:px-6 lg:min-h-0 lg:px-12 lg:pb-14 lg:pt-32">
        <Reveal className="grid gap-8 lg:grid-cols-[1.7fr_1fr] lg:items-end lg:gap-16">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-10 bg-accent" />
              <span className="text-xs font-semibold uppercase text-background/80">Hvem vi er</span>
            </div>
            <h2 className="text-4xl text-background sm:text-5xl lg:text-6xl">
              Faste hold, fra opstart til aflevering
            </h2>
            <Link
              to="/om-os"
              className="group mt-6 inline-flex items-center gap-1.5 text-sm font-semibold uppercase text-accent"
            >
              Læs mere om os
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
          <div>
            <p className="text-base leading-relaxed text-background/80">
              MG Totalentreprise ApS er en dansk byggevirksomhed med egne håndværkere. Vi sætter en
              ære i kontinuitet, uanset projektets størrelse.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-3 md:gap-12">
          {principles.map((p, i) => (
            <div
              key={p.title}
              className="flex items-start gap-5 border-t border-background/40 pt-5"
            >
              <span className="text-5xl font-extralight leading-none text-background/60">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-lg font-semibold text-background">{p.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-background/75">{p.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
