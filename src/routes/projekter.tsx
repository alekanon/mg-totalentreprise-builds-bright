import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/PageHero";
import { Download } from "lucide-react";
import { GalleryLightbox } from "@/components/GalleryLightbox";
import { referencer, type Reference } from "@/data/referencer";
import heroSpektrum from "@/assets/hero-spektrum.jpg";

export const Route = createFileRoute("/projekter")({
  head: () => ({
    meta: [
      { title: "Projekter – MG Totalentreprise" },
      {
        name: "description",
        content:
          "Se et udvalg af vores byggesager: et større dansk medicinalfirma, Himmelbyen, Hildis Have, Skolen på Strandboulevarden, Spektrum Hotel m.fl.",
      },
      { property: "og:title", content: "Projekter – MG Totalentreprise" },
      {
        property: "og:description",
        content: "Udvalgte tømrer-, maler- og facadeprojekter.",
      },
    ],
  }),
  component: Projekter,
});

function Projekter() {
  const [active, setActive] = useState<Reference | null>(null);
  const [slide, setSlide] = useState(0);

  const openProject = (r: Reference) => {
    setActive(r);
    setSlide(0);
  };

  return (
    <>
      <PageHero
        eyebrow="Projekter"
        title="Udvalgte byggesager"
        description="Et udsnit af de projekter vi har leveret som fag- eller underentreprenør for nogle af landets førende entreprenører."
        image={heroSpektrum}
        size="lg"
        parallax
      />

      <section className="bg-background py-12 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-12">
          <div className="grid gap-6 sm:gap-10 md:grid-cols-2 lg:gap-16">
            {referencer.map((r, i) => (
              <button
                key={`${r.title}-${i}`}
                onClick={() => openProject(r)}
                className="group relative flex aspect-[4/5] flex-col justify-between overflow-hidden rounded-sm text-left sm:aspect-[4/3] md:aspect-[4/5] lg:aspect-[4/3] md:last:odd:col-span-2 md:last:odd:aspect-[16/7]"
              >
                <img
                  src={r.cover}
                  alt={r.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/30" />

                <div className="relative flex items-start justify-start gap-3 p-4 sm:justify-between sm:p-6 lg:p-10">
                  <span className="text-sm font-semibold tabular-nums text-background/90">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex flex-wrap justify-start gap-1.5 sm:justify-end">
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

                <div className="relative p-4 sm:p-6 lg:p-10">
                  <div className="text-xs font-semibold uppercase text-accent">{r.client}</div>
                  <h3 className="mt-2 text-xl font-bold leading-tight text-background sm:text-2xl lg:text-4xl">
                    {r.title}
                  </h3>
                  <p className="mt-3 line-clamp-2 max-w-xl text-sm leading-relaxed text-background/80 lg:text-base">
                    {r.scope}
                  </p>
                  <div className="mt-4 flex items-center gap-3 border-t border-background/30 pt-4 text-xs font-semibold uppercase text-background/80 group-hover:text-background">
                    Læs mere
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <GalleryLightbox
        open={!!active}
        title={active?.title ?? ""}
        subtitle={active?.client}
        images={active?.gallery ?? []}
        index={slide}
        onIndexChange={setSlide}
        onClose={() => setActive(null)}
        details={
          active && (
            <>
              <div className="flex flex-wrap gap-1.5">
                {active.trades.map((t) => (
                  <span
                    key={t}
                    className="border border-white/30 px-2.5 py-1 text-[10px] font-bold uppercase text-white"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <p className="mt-5 text-base leading-relaxed text-white/80">{active.description}</p>
              <dl className="mt-6 border-t border-white/20 pt-4">
                <dt className="text-[10px] font-semibold uppercase text-white/60">Omfang</dt>
                <dd className="mt-1 text-sm leading-relaxed text-white">{active.scope}</dd>
              </dl>
              {active.document && (
                <a
                  href={active.document.url}
                  download={active.document.filename}
                  className="group mt-6 inline-flex items-center gap-1.5 text-sm font-semibold uppercase text-accent"
                >
                  {active.document.label}
                  <Download className="h-4 w-4" />
                </a>
              )}
            </>
          )
        }
      />
    </>
  );
}
