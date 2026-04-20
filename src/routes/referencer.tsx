import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Building2 } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { referencer, type Reference } from "@/data/referencer";

export const Route = createFileRoute("/referencer")({
  head: () => ({
    meta: [
      { title: "Referencer – MG Totalentreprise" },
      {
        name: "description",
        content:
          "Se et udvalg af vores byggesager: Himmelbyen, Hildis Have, Nyt Hospital Nordsjælland, Skolen på Strandboulevarden m.fl.",
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
  const filtered =
    filter === "Alle" ? referencer : referencer.filter((r: Reference) => r.category === filter);

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
              <article
                key={`${r.title}-${i}`}
                className="group flex flex-col rounded-sm border border-border bg-background p-8 transition-all hover:-translate-y-1 hover:border-accent hover:shadow-[var(--shadow-elegant)]"
              >
                <div className="flex items-center justify-between">
                  <Building2 className="h-6 w-6 text-accent" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                    {r.category}
                  </span>
                </div>
                <h3 className="mt-6 text-lg font-bold leading-tight text-foreground">{r.title}</h3>
                <div className="mt-2 text-xs font-semibold uppercase tracking-wide text-accent">
                  {r.client}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{r.scope}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
