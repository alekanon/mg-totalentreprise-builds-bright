import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { ydelser } from "@/data/ydelser";

export const Route = createFileRoute("/ydelser/$slug")({
  loader: ({ params }) => {
    const ydelse = ydelser.find((y) => y.slug === params.slug);
    if (!ydelse) throw notFound();
    return { ydelse };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.ydelse.title} – MG Totalentreprise` },
          { name: "description", content: loaderData.ydelse.short },
          { property: "og:title", content: loaderData.ydelse.title },
          { property: "og:description", content: loaderData.ydelse.short },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold">Ydelsen blev ikke fundet</h2>
        <Link to="/ydelser" className="mt-4 inline-block text-accent">
          ← Tilbage til ydelser
        </Link>
      </div>
    </div>
  ),
  component: YdelseDetail,
});

function YdelseDetail() {
  const data = Route.useLoaderData() as { ydelse: (typeof ydelser)[number] };
  const { ydelse } = data;
  const idx = ydelser.findIndex((y) => y.slug === ydelse.slug);
  const next = ydelser[(idx + 1) % ydelser.length];

  return (
    <>
      <PageHero eyebrow="Ydelse" title={ydelse.title} description={ydelse.short} />

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            to="/ydelser"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground hover:text-accent"
          >
            <ArrowLeft className="h-4 w-4" /> Alle ydelser
          </Link>

          <div className="mt-12 grid gap-16 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="space-y-5 text-base leading-relaxed text-muted-foreground lg:text-lg">
                {ydelse.description.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-sm border border-border bg-surface p-8">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">
                  Hvad vi tilbyder
                </h3>
                <ul className="mt-6 space-y-3">
                  {ydelse.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-accent" />
                      <span className="text-sm font-medium text-foreground">{h}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/kontakt"
                  className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-sm bg-accent px-5 py-3 text-sm font-semibold uppercase tracking-wide text-accent-foreground transition-colors hover:bg-accent/90"
                >
                  Få et tilbud <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-20 flex items-center justify-between border-t border-border pt-8">
            <span className="text-xs uppercase tracking-wider text-muted-foreground">Næste ydelse</span>
            <Link
              to="/ydelser/$slug"
              params={{ slug: next.slug }}
              className="group inline-flex items-center gap-2 text-base font-semibold text-foreground hover:text-accent"
            >
              {next.title} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
