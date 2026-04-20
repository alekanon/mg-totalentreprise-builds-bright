import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { ydelser } from "@/data/ydelser";

export const Route = createFileRoute("/ydelser")({
  head: () => ({
    meta: [
      { title: "Ydelser – MG Totalentreprise" },
      {
        name: "description",
        content:
          "Tømrer, maler, facadepuds, eternit/træ/aluminium-facader, betonfinish og mandskabsudlejning – alle ydelser fra MG Totalentreprise.",
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
        description="Fra facade til indvendig aptering – vi løser opgaver inden for tømrer, maler, facadepuds og betonfinish. Klik på en ydelse for at læse mere."
      />

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {ydelser.map((y, i) => (
              <Link
                key={y.slug}
                to="/ydelser/$slug"
                params={{ slug: y.slug }}
                className="group flex flex-col justify-between rounded-sm border border-border bg-background p-8 transition-all hover:-translate-y-1 hover:border-accent hover:shadow-[var(--shadow-elegant)]"
              >
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-accent">
                    0{i + 1}
                  </div>
                  <h3 className="mt-3 text-xl font-bold text-foreground">{y.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{y.short}</p>
                </div>
                <div className="mt-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-foreground transition-colors group-hover:text-accent">
                  Læs mere <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
