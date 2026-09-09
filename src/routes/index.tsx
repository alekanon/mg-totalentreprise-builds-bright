import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { HeroCarousel } from "@/components/HeroCarousel";
import { AboutTeaser } from "@/components/AboutTeaser";
import { ProcessSteps } from "@/components/ProcessSteps";
import { ProofPanel } from "@/components/ProofPanel";
import { CoverageMap } from "@/components/CoverageMap";
import { ydelser } from "@/data/ydelser";
import teamPhoto from "@/assets/om-os-team.jpg";
import kitchenImg from "@/assets/ydelser/maler.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MG Totalentreprise – Tømrer, maler og facadeentreprise" },
      {
        name: "description",
        content:
          "Ca. 30 egne håndværkere inden for tømrer, flisemurer og maler. Fagentrepriser for store bygherrer og private boligejere i hele hovedstadsområdet.",
      },
      { property: "og:title", content: "MG Totalentreprise" },
      {
        property: "og:description",
        content: "Tømrer, maler og facadeentreprise i hovedstadsområdet.",
      },
    ],
  }),
  component: Index,
});

const stats = [
  { value: "Ca. 30", label: "Egne håndværkere" },
  { value: "200+", label: "Renoverede lejligheder" },
  { value: "1", label: "Fast kontaktperson pr. sag" },
  { value: "100%", label: "Daglig projektledelse" },
];

function Index() {
  return (
    <>
      <HeroCarousel />

      {/* Stats */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-y divide-border lg:grid-cols-4 lg:divide-x lg:divide-y-0">
          {stats.map((s) => (
            <div key={s.label} className="px-6 py-12 text-center sm:px-10 lg:py-16">
              <span className="mx-auto mb-3 block h-px w-8 bg-accent" />
              <div className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                {s.value}
              </div>
              <div className="mt-2 text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Ydelser preview */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-10 bg-accent" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                  Vores ydelser
                </span>
              </div>
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
                Fag­entrepriser i hele bygge­processen
              </h2>
            </div>
            <Link
              to="/ydelser"
              className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-accent hover:gap-3 transition-all"
            >
              Alle ydelser <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {ydelser.slice(0, 3).map((y) => (
              <Link
                key={y.slug}
                to="/ydelser/$slug"
                params={{ slug: y.slug }}
                className="group relative flex aspect-[3/4] flex-col justify-end overflow-hidden rounded-sm"
              >
                <img
                  src={y.image}
                  alt={y.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="relative p-6">
                  <h3 className="text-xl font-bold text-background">{y.title}</h3>
                  <div className="mt-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-background/80 group-hover:text-background">
                    Læs mere <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section data-header-theme="dark" className="grid lg:grid-cols-2">
        <div className="order-2 flex flex-col justify-center bg-eco px-4 py-16 text-eco-foreground sm:px-6 lg:order-1 lg:px-16 lg:py-24">
          <div className="mx-auto w-full max-w-lg lg:mx-0">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-10 bg-eco-foreground/60" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-eco-foreground/80">
                Bæredygtighed
              </span>
            </div>
            <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
              Vi bygger med fokus på fremtiden
            </h2>
            <p className="mt-6 text-base leading-relaxed text-eco-foreground/90 lg:text-lg">
              MG Totalentreprise arbejder løbende på at gøre vores byggeprocesser mere bæredygtige –
              fra ansvarlig materialevalg og mindre spild til energieffektive løsninger, der holder
              i mange år fremover.
            </p>
            <Link
              to="/kontakt"
              className="group mt-10 inline-flex items-center gap-6 rounded-full bg-eco-foreground py-2 pl-8 pr-2 text-sm font-semibold uppercase tracking-wide text-eco transition-colors hover:bg-eco-foreground/90"
            >
              Kontakt os om bæredygtige løsninger
              <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-eco text-eco-foreground transition-transform group-hover:translate-x-1">
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          </div>
        </div>
        <div className="relative order-1 min-h-[320px] lg:order-2 lg:min-h-0">
          <img
            src={teamPhoto}
            alt="Håndværkere fra MG Totalentreprise på byggeplads"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </section>

      {/* Private clients */}
      <section className="grid lg:grid-cols-2">
        <div className="order-1 flex flex-col justify-center bg-background px-4 py-16 sm:px-6 lg:px-16 lg:py-24">
          <div className="mx-auto w-full max-w-lg lg:mx-0">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-10 bg-accent" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Private kunder
              </span>
            </div>
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              Vi hjælper også private boligejere
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground lg:text-lg">
              Ud over store fag­entrepriser for professionelle bygherrer løser vi også opgaver for
              private boligejere – fra renovering og tilbygning til nyt køkken eller bad. Samme
              faste hold, samme høje kvalitet, uanset om opgaven er stor eller lille.
            </p>
            <Link
              to="/kontakt"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-accent hover:gap-3 transition-all"
            >
              Kontakt os om dit projekt <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
        <div className="relative order-2 min-h-[320px] lg:min-h-0">
          <img
            src={kitchenImg}
            alt="Nyt køkken – eksempel på privat renoveringsopgave"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </section>

      <AboutTeaser />

      <ProcessSteps />

      <ProofPanel />

      <CoverageMap />
    </>
  );
}
