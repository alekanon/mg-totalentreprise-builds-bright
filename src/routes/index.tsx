import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { HeroCarousel } from "@/components/HeroCarousel";
import { AboutTeaser } from "@/components/AboutTeaser";
import { Reveal } from "@/components/Reveal";
import { ProcessSteps } from "@/components/ProcessSteps";
import { ProofPanel } from "@/components/ProofPanel";
import { CoverageMap } from "@/components/CoverageMap";
import { ydelser } from "@/data/ydelser";
import sustainabilityImg from "@/assets/Ejendomsudvikling/bb1-web.jpg";
import ejendomsudviklingImg from "@/assets/Ejendomsudvikling/enjdomsudviklingmainpage.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MG Totalentreprise – Tømrer, maler og facadeentreprise" },
      {
        name: "description",
        content:
          "Erfarne håndværkere inden for tømrer, flisemurer og maler. Fagentrepriser for store bygherrer og private boligejere i hele hovedstadsområdet.",
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

function Index() {
  return (
    <>
      <HeroCarousel />

      {/* Ydelser preview */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-lg">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-10 bg-accent" />
                <span className="text-xs font-semibold uppercase text-accent">Vores ydelser</span>
              </div>
              <h2 className="text-4xl text-foreground sm:text-5xl lg:text-6xl">
                Fag­entrepriser til store byggesager og erhvervsprojekter
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground lg:pt-2 lg:text-right lg:text-base">
              Vores primære fokus er fagentrepriser for professionelle bygherrer, entreprenører og
              erhvervsvirksomheder. Vi løser også mindre opgaver – altid med samme faste hold og
              høje kvalitet.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {ydelser.slice(0, 3).map((y) => (
              <Link
                key={y.slug}
                to="/ydelser/$slug"
                params={{ slug: y.slug }}
                className="group relative flex aspect-[4/5] flex-col justify-end overflow-hidden"
              >
                <img
                  src={y.image}
                  alt={y.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <div className="relative p-7">
                  <h3 className="text-2xl font-bold text-background">{y.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-background/80">{y.short}</p>
                  <div className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase text-background/80 group-hover:text-background">
                    Læs mere <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 flex justify-end">
            <Link
              to="/kontakt"
              className="group inline-flex items-center gap-6 bg-surface-dark py-2 pl-8 pr-2 text-sm font-semibold uppercase text-background transition-colors hover:bg-surface-dark/90"
            >
              Kontakt os
              <span className="flex h-10 w-10 flex-none items-center justify-center bg-background text-surface-dark transition-transform group-hover:translate-x-1">
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <AboutTeaser />

      <ProcessSteps />

      {/* Ejendomsudvikling */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div
            data-header-theme="dark"
            className="relative overflow-hidden rounded-sm bg-surface-dark"
          >
            <img
              src={ejendomsudviklingImg}
              alt="Boligprojekt udviklet af MG Ejendomme"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/55 to-black/40" />
            <div className="relative grid min-h-[520px] gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-16 lg:py-20">
              <div className="max-w-md">
                <h2 className="text-3xl text-background sm:text-4xl lg:text-5xl">
                  Vi udvikler ejendomme i eget regi
                </h2>
                <p className="mt-4 max-w-sm text-base leading-relaxed text-background/80">
                  Ud over vores fag­entrepriser udvikler og opfører vi boligprojekter i eget regi –
                  i Danmark gennem MG Ejendomme og i Polen gennem Viridis Sp. z o.o.
                </p>
                <Link
                  to="/ejendomsudvikling"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase text-accent hover:gap-3 transition-all"
                >
                  Se ejendomsudvikling <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="flex flex-col gap-8 lg:items-end">
                <div className="lg:text-right">
                  <div className="text-5xl font-light text-background sm:text-6xl">2</div>
                  <p className="mt-2 max-w-xs text-sm leading-relaxed text-background/75 lg:ml-auto">
                    Lande – vi udvikler ejendomme i både Danmark og Polen.
                  </p>
                </div>
                <div className="lg:text-right">
                  <div className="text-5xl font-light text-background sm:text-6xl">6</div>
                  <p className="mt-2 max-w-xs text-sm leading-relaxed text-background/75 lg:ml-auto">
                    Boligprojekter i eget regi via MG Ejendomme og Viridis Sp. z o.o.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section data-header-theme="dark" className="grid lg:min-h-dvh lg:grid-cols-2">
        <div className="order-2 flex flex-col justify-center bg-eco px-4 py-12 text-eco-foreground sm:px-6 lg:order-1 lg:py-8 lg:pl-[max(2rem,calc((100vw_-_80rem)/2_+_2rem))] lg:pr-16">
          <Reveal className="mx-auto w-full max-w-lg lg:mx-0">
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-10 bg-eco-foreground/60" />
              <span className="text-xs font-semibold uppercase text-eco-foreground/80">
                Bæredygtighed
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl">Vi bygger med fokus på fremtiden</h2>
            <p className="mt-4 text-base leading-relaxed text-eco-foreground/90">
              MG Totalentreprise arbejder løbende på at gøre vores byggeprocesser mere bæredygtige –
              fra materialevalg til energieffektive løsninger.
            </p>

            <div className="mt-8 border-t border-eco-foreground/15 pt-5">
              <div className="text-5xl font-light text-eco-foreground sm:text-6xl">CO₂</div>
              <p className="mt-2 max-w-sm text-sm leading-relaxed text-eco-foreground/75">
                Vi arbejder på at reducere CO2-aftrykket gennem bedre materialevalg og mindre
                spild.
              </p>
            </div>
          </Reveal>
        </div>
        <div className="relative order-1 min-h-[320px] lg:order-2 lg:min-h-0">
          <img
            src={sustainabilityImg}
            alt="Projektledere på byggeplads ved solnedgang"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </section>

      <ProofPanel />

      <CoverageMap />
    </>
  );
}
