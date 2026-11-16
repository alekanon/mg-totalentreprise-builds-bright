import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { referencer } from "@/data/referencer";

const featuredTitles = [
  "BIG Shoppingcenter Herlev",
  "Hovedkontor for større dansk medicinalfirma",
  "Himmelbyen",
];
const featured = featuredTitles
  .map((title) => referencer.find((r) => r.title === title))
  .filter((r): r is NonNullable<typeof r> => Boolean(r));

export function ProjectsPreview() {
  return (
    <section className="flex bg-background py-16 lg:min-h-dvh lg:items-center lg:py-14">
      <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-12">
        <div className="mb-10 grid gap-8 lg:mb-10 lg:grid-cols-[1.7fr_1fr] lg:items-end lg:gap-16">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-10 bg-accent" />
              <span className="text-xs font-semibold uppercase text-accent">Projekter</span>
            </div>
            <h2 className="text-4xl text-foreground sm:text-5xl lg:text-6xl">
              Se hvilke projekter vi har arbejdet på
            </h2>
          </div>
          <p className="text-base leading-relaxed text-muted-foreground lg:text-lg">
            Et udvalg af byggesager, hvor vores faste hold har leveret tømrer-, snedker- og
            malerarbejde.
          </p>
        </div>

        <div className="grid gap-x-6 gap-y-10 md:grid-cols-3 lg:gap-x-8">
          {featured.map((r, i) => (
            <Link key={r.title} to="/projekter" className="group block">
              <div className="relative aspect-[4/3] overflow-hidden md:aspect-[4/3] lg:aspect-square rounded-sm">
                <img
                  src={r.cover}
                  alt={r.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent" />
                <span className="absolute left-5 top-5 text-sm font-semibold tabular-nums text-background">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="absolute right-5 top-5 flex flex-wrap justify-end gap-1.5">
                  {r.trades.map((t) => (
                    <span
                      key={t}
                      className="bg-background/90 px-2.5 py-1 text-[10px] font-bold uppercase text-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-4 flex items-start justify-between gap-4 border-t border-border pt-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground lg:text-2xl">{r.title}</h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                    {r.scope}
                  </p>
                </div>
                <ArrowUpRight className="mt-1 h-5 w-5 flex-none text-accent transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 flex justify-start">
          <Link
            to="/projekter"
            className="group inline-flex items-center gap-1.5 text-sm font-semibold uppercase text-accent"
          >
            Se flere projekter
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
