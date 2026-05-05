import { createFileRoute, Link } from "@tanstack/react-router";
import { ClipboardCheck, Eye, Users, FileCheck } from "lucide-react";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/kvalitetssikring")({
  head: () => ({
    meta: [
      { title: "Kvalitetssikring – MG Totalentreprise" },
      {
        name: "description",
        content:
          "Vi udfører KS i Dalux, Ajour, Byggeweb og vores eget KS-system. Daglig projektledelse sikrer kvalitet og fremdrift.",
      },
      { property: "og:title", content: "Kvalitetssikring – MG Totalentreprise" },
      {
        property: "og:description",
        content: "Sådan arbejder vi struktureret med kvalitet og dokumentation.",
      },
    ],
  }),
  component: KS,
});

const blocks = [
  {
    icon: ClipboardCheck,
    title: "Projektspecifikke KS-portaler",
    text: "Vi arbejder i Dalux, Ajour, Byggeweb og lignende portaler – afhængigt af projektets krav. Vi tilpasser os bygherrens og hovedentreprenørens setup.",
  },
  {
    icon: FileCheck,
    title: "Eget KS-system",
    text: "På sager uden projektportal anvender vi vores eget KS-system, der dokumenterer udført arbejde, kontroller og afvigelser.",
  },
  {
    icon: Eye,
    title: "Daglig tilsyn",
    text: "Vores projektledere fører dagligt tilsyn med byggesagerne, så vi straks kan følge op på projektspørgsmål og uklarheder.",
  },
  {
    icon: Users,
    title: "Faste hold, én kontaktperson",
    text: "Vi sætter de samme faste medarbejdere på sagen fra start til slut, og der er altid kun én kontaktperson – det sikrer kontinuitet og ansvar.",
  },
];

function KS() {
  return (
    <>
      <PageHero
        eyebrow="Kvalitetssikring"
        title="Struktureret KS – fra opstart til aflevering"
        description="Vi dokumenterer og kvalitetssikrer arbejdet løbende, og vores projektledere er tæt på sagen hver eneste dag."
      />

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {blocks.map((b) => (
              <div
                key={b.title}
                className="rounded-sm border border-border bg-background p-8 transition-shadow hover:shadow-[var(--shadow-card)]"
              >
                <b.icon className="h-8 w-8 text-accent" />
                <h3 className="mt-5 text-xl font-bold text-foreground">{b.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{b.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-sm bg-surface p-10 lg:p-14">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-px w-10 bg-accent" />
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                    Skal vi kvalitetssikre din næste sag?
                  </span>
                </div>
                <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
                  Tæt opfølgning fra opstart til aflevering
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  Vi sætter faste hold på sagen og dokumenterer arbejdet løbende, så I altid
                  har overblik over fremdrift og kvalitet.
                </p>
              </div>
              <div>
                <Link
                  to="/kontakt"
                  className="inline-flex items-center gap-2 rounded-sm bg-accent px-6 py-3 text-sm font-semibold uppercase tracking-wide text-accent-foreground transition-colors hover:bg-accent/90"
                >
                  Kontakt os
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
