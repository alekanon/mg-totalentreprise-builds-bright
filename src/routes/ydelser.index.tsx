import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CoverageMap } from "@/components/CoverageMap";
import { ydelser } from "@/data/ydelser";

export const Route = createFileRoute("/ydelser/")({
  head: () => ({
    meta: [
      { title: "Ydelser – MG Totalentreprise" },
      {
        name: "description",
        content:
          "Tømrer, maler og facader i eternit/træ/aluminium – alle ydelser fra MG Totalentreprise.",
      },
      { property: "og:title", content: "Ydelser – MG Totalentreprise" },
      {
        property: "og:description",
        content: "Se alle vores fagområder og fag­entrepriser.",
      },
    ],
  }),
  component: Ydelser,
});

function Ydelser() {
  return (
    <>
      <PageHero
        eyebrow="Ydelser"
        title="Fagentrepriser i hele byggeprocessen"
        description="Fra facade til indvendig aptering – vi løser opgaver inden for tømrer, maler og facader. Klik på en ydelse for at læse mere."
      />

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {ydelser.map((y, i) => (
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />
                <span className="absolute left-6 top-6 text-xs font-bold uppercase tracking-widest text-background/70">
                  0{i + 1}
                </span>
                <div className="relative p-6">
                  <h3 className="text-xl font-bold text-background">{y.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-background/80">{y.short}</p>
                  <div className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-background/80 group-hover:text-background">
                    Læs mere <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CoverageMap />
    </>
  );
}
