import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Building2, X, ChevronLeft, ChevronRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { referencer, type Reference } from "@/data/referencer";

export const Route = createFileRoute("/referencer")({
  head: () => ({
    meta: [
      { title: "Referencer – MG Totalentreprise" },
      {
        name: "description",
        content:
          "Se et udvalg af vores byggesager: Novo Nordisk, Himmelbyen, Hildis Have, Nyt Hospital Nordsjælland, Skolen på Strandboulevarden m.fl.",
      },
      { property: "og:title", content: "Referencer – MG Totalentreprise" },
      {
        property: "og:description",
        content: "Udvalgte tømrer-, maler- og betonfinish-projekter.",
      },
    ],
  }),
  component: Referencer,
});

const filters = ["Alle", "Tømrer", "Maler", "Betonfinish"] as const;

function Referencer() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("Alle");
  const [active, setActive] = useState<Reference | null>(null);
  const [slide, setSlide] = useState(0);

  const filtered =
    filter === "Alle"
      ? referencer
      : referencer.filter((r: Reference) => r.trades.includes(filter));

  const openProject = (r: Reference) => {
    setActive(r);
    setSlide(0);
  };

  const next = () => {
    if (!active) return;
    setSlide((s) => (s + 1) % active.gallery.length);
  };
  const prev = () => {
    if (!active) return;
    setSlide((s) => (s - 1 + active.gallery.length) % active.gallery.length);
  };

  return (
    <>
      <PageHero
        eyebrow="Referencer"
        title="Udvalgte byggesager"
        description="Et udsnit af de projekter vi har leveret som fag- eller underentreprenør for nogle af landets førende entreprenører."
      />

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`rounded-sm border px-4 py-2 text-xs font-semibold uppercase tracking-wide transition-colors ${
                  filter === f
                    ? "border-accent bg-accent text-accent-foreground"
                    : "border-border bg-background text-foreground hover:border-accent hover:text-accent"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((r, i) => (
              <button
                key={`${r.title}-${i}`}
                onClick={() => openProject(r)}
                className="group flex flex-col overflow-hidden rounded-sm border border-border bg-background text-left transition-all hover:-translate-y-1 hover:border-accent hover:shadow-[var(--shadow-elegant)]"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
                  <img
                    src={r.cover}
                    alt={r.title}
                    loading="lazy"
                    width={1280}
                    height={896}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
                  <div className="absolute left-4 top-4 flex gap-1.5">
                    {r.trades.map((t) => (
                      <span
                        key={t}
                        className="rounded-sm bg-background/90 px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-foreground backdrop-blur"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center justify-between">
                    <Building2 className="h-5 w-5 text-accent" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                      Læs mere →
                    </span>
                  </div>
                  <h3 className="mt-4 text-lg font-bold leading-tight text-foreground">
                    {r.title}
                  </h3>
                  <div className="mt-1 text-xs font-semibold uppercase tracking-wide text-accent">
                    {r.client}
                  </div>
                  <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                    {r.scope}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-4xl gap-0 overflow-hidden p-0 sm:rounded-sm">
          {active && (
            <>
              <div className="relative aspect-[16/10] w-full bg-muted">
                <img
                  src={active.gallery[slide]}
                  alt={`${active.title} – billede ${slide + 1}`}
                  className="h-full w-full object-cover"
                />
                {active.gallery.length > 1 && (
                  <>
                    <button
                      onClick={prev}
                      aria-label="Forrige billede"
                      className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-background/90 p-2 text-foreground shadow-md transition-colors hover:bg-accent hover:text-accent-foreground"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      onClick={next}
                      aria-label="Næste billede"
                      className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-background/90 p-2 text-foreground shadow-md transition-colors hover:bg-accent hover:text-accent-foreground"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                    <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-1.5">
                      {active.gallery.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setSlide(i)}
                          aria-label={`Gå til billede ${i + 1}`}
                          className={`h-1.5 rounded-full transition-all ${
                            i === slide ? "w-6 bg-accent" : "w-1.5 bg-background/70"
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
                <button
                  onClick={() => setActive(null)}
                  aria-label="Luk"
                  className="absolute right-4 top-4 rounded-full bg-background/90 p-2 text-foreground shadow-md transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap gap-1.5">
                  {active.trades.map((t) => (
                    <span
                      key={t}
                      className="rounded-sm border border-accent/30 bg-accent/10 px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-accent"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <DialogTitle className="mt-3 text-2xl font-bold text-foreground sm:text-3xl">
                  {active.title}
                </DialogTitle>
                <div className="mt-1 text-sm font-semibold uppercase tracking-wide text-accent">
                  {active.client}
                </div>
                <DialogDescription className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {active.description}
                </DialogDescription>
                <div className="mt-6 border-t border-border pt-4 text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Omfang: </span>
                  {active.scope}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
