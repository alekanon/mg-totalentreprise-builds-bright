import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, HardHat, Users, ShieldCheck, Hammer } from "lucide-react";
import { HeroCarousel } from "@/components/HeroCarousel";
import { AboutTeaser } from "@/components/AboutTeaser";
import { PartnersStrip } from "@/components/PartnersStrip";
import { ProcessSteps } from "@/components/ProcessSteps";
import { Testimonial } from "@/components/Testimonial";
import { ydelser } from "@/data/ydelser";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MG Totalentreprise – Tømrer, maler og facadeentreprise" },
      {
        name: "description",
        content:
          "Ca. 30 egne håndværkere inden for tømrer, flisemurer og maler. Fagentrepriser og mandskabsudlejning i hele hovedstadsområdet.",
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
  { value: "~30", label: "Egne håndværkere" },
  { value: "200+", label: "Renoverede lejligheder" },
  { value: "1", label: "Fast kontaktperson pr. sag" },
  { value: "100%", label: "Daglig projektledelse" },
];

const usp = [
  {
    icon: Users,
    title: "Faste hold",
    text: "Vi sørger så vidt muligt for de samme medarbejdere fra start til slut – kontinuitet og kvalitet.",
  },
  {
    icon: HardHat,
    title: "Bredt fagområde",
    text: "Tømrer, maler, facadepuds, betonfinish og indvendig aptering – alt under ét tag.",
  },
  {
    icon: ShieldCheck,
    title: "Kvalitetssikring",
    text: "Daglig tilsyn og KS i Dalux, Ajour, Byggeweb eller vores eget system.",
  },
  {
    icon: Hammer,
    title: "Fag- & underentrepriser",
    text: "Vi byder på fagentrepriser og udlejer erfarent mandskab efter behov.",
  },
];

function Index() {
  return (
    <>
      <HeroCarousel />

      {/* Stats */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:px-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center lg:text-left">
              <div className="text-4xl font-bold text-foreground lg:text-5xl">{s.value}</div>
              <div className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Intro / USPs */}
      <section className="bg-surface py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-10 bg-accent" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                  Om MG Totalentreprise
                </span>
              </div>
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
                Erfarne håndværkere<br />med fokus på det færdige resultat
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground lg:text-lg">
                MG Totalentreprise ApS råder over ca. 30 egne håndværkere inden for tømrer,
                flisemurer og maler. Vi løser fagentrepriser i hele hovedstadsområdet og
                udlejer mandskab til både små og store byggeprojekter.
              </p>
              <Link
                to="/om-os"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-accent hover:gap-3 transition-all"
              >
                Læs mere om os <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {usp.map((u) => (
                <div
                  key={u.title}
                  className="rounded-sm border border-border bg-background p-6 transition-shadow hover:shadow-[var(--shadow-card)]"
                >
                  <u.icon className="h-7 w-7 text-accent" />
                  <h3 className="mt-4 text-base font-bold text-foreground">{u.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{u.text}</p>
                </div>
              ))}
            </div>
          </div>
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

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {ydelser.slice(0, 6).map((y) => (
              <Link
                key={y.slug}
                to="/ydelser/$slug"
                params={{ slug: y.slug }}
                className="group flex flex-col justify-between rounded-sm border border-border bg-background p-8 transition-all hover:-translate-y-1 hover:border-accent hover:shadow-[var(--shadow-elegant)]"
              >
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-accent">
                    0{ydelser.indexOf(y) + 1}
                  </div>
                  <h3 className="mt-3 text-xl font-bold text-foreground">{y.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{y.short}</p>
                </div>
                <div className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-foreground transition-colors group-hover:text-accent">
                  Læs mere <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <PartnersStrip />

      <AboutTeaser />

      <ProcessSteps />

      <Testimonial />

      {/* CTA */}
      <section className="relative overflow-hidden bg-surface-dark py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-background sm:text-4xl lg:text-5xl">
            Skal vi løse din næste fag­entreprise?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base text-background/75 lg:text-lg">
            Kontakt os for en uforpligtende snak om jeres projekt – store som små.
          </p>
          <Link
            to="/kontakt"
            className="mt-10 inline-flex items-center gap-2 rounded-sm bg-accent px-8 py-4 text-sm font-semibold uppercase tracking-wide text-accent-foreground transition-colors hover:bg-accent/90"
          >
            Få et tilbud <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
