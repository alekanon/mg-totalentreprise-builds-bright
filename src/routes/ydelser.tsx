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
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {ydelser.map((y, i) => (
              <article
                key={y.slug}
                className="group flex flex-col overflow-hidden rounded-sm border border-border bg-background transition-all hover:-translate-y-1 hover:border-accent hover:shadow-[var(--shadow-elegant)]"
              >
                <Link
                  to="/ydelser/$slug"
                  params={{ slug: y.slug }}
                  className="relative block aspect-[4/3] w-full overflow-hidden bg-muted"
                  aria-label={`Læs mere om ${y.title}`}
                >
                  <img
                    src={y.image}
                    alt={y.title}
                    loading="lazy"
                    width={1280}
                    height={896}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-black/0" />
                  <span className="absolute left-4 top-4 rounded-sm bg-background/90 px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-foreground backdrop-blur">
                    0{i + 1}
                  </span>
                </Link>

                <div className="flex flex-1 flex-col p-7">
                  <h3 className="text-xl font-bold text-foreground">{y.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {y.short}
                  </p>
                  <Link
                    to="/ydelser/$slug"
                    params={{ slug: y.slug }}
                    className="mt-6 inline-flex items-center gap-2 self-start rounded-sm border border-border px-4 py-2.5 text-xs font-semibold uppercase tracking-wide text-foreground transition-colors hover:border-accent hover:bg-accent hover:text-accent-foreground"
                  >
                    Læs mere <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
