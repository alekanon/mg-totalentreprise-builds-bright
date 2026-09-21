import { createFileRoute, Link } from "@tanstack/react-router";
import { ClipboardCheck, Eye, FileText, Users } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import documentationImg from "@/assets/ydelser/projektledelse.jpg";

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

const points = [
  {
    icon: ClipboardCheck,
    title: "Digitale KS-portaler",
    description: "Dalux, Ajour, Byggeweb eller lignende KS-portaler.",
  },
  {
    icon: FileText,
    title: "Eget KS-system",
    description: "Bruges på sager uden projektportal.",
  },
  {
    icon: Eye,
    title: "Dagligt tilsyn",
    description: "Vores projektledere følger byggesagerne hver dag.",
  },
  {
    icon: Users,
    title: "Faste hold",
    description: "Én fast kontaktperson pr. sag.",
  },
];

function KS() {
  return (
    <>
      <PageHero
        eyebrow="Kvalitetssikring"
        title="Struktureret KS – fra opstart til aflevering"
        description="Vi dokumenterer og kvalitetssikrer arbejdet løbende, og vores projektledere er tæt på sagen hver eneste dag."
        size="lg"
        parallax
      />

      {/* Approach */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-accent" />
            <span className="text-xs font-semibold uppercase text-accent">Dokumentation</span>
            <span className="h-px w-10 bg-accent" />
          </div>
          <h2 className="text-4xl text-foreground sm:text-5xl lg:text-6xl">
            Vi dokumenterer arbejdet – uanset system
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground lg:text-lg">
            Vi arbejder i Dalux, Ajour, Byggeweb og lignende portaler – afhængigt af projektets krav
            – og tilpasser os bygherrens og hovedentreprenørens setup. På sager uden projektportal
            bruger vi vores eget KS-system, der dokumenterer udført arbejde, kontroller og
            afvigelser.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid divide-y divide-border rounded-sm border border-border sm:grid-cols-2 sm:divide-x lg:grid-cols-4 lg:divide-y-0">
            {points.map((p) => (
              <div key={p.title} className="p-8">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                  <p.icon className="h-6 w-6 text-accent" />
                </span>
                <h3 className="mt-5 text-base font-bold text-foreground">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supervision */}
      <section data-header-theme="dark" className="grid lg:grid-cols-2">
        <div className="order-2 flex flex-col justify-center bg-surface-dark px-4 py-16 text-background sm:px-6 lg:order-1 lg:px-16 lg:py-24">
          <div className="mx-auto w-full max-w-lg lg:mx-0">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-10 bg-accent" />
              <span className="text-xs font-semibold uppercase text-accent">
                Tilsyn & kontinuitet
              </span>
            </div>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl">Tæt på sagen hver eneste dag</h2>
            <p className="mt-6 text-base leading-relaxed text-background/75 lg:text-lg">
              Vores projektledere fører dagligt tilsyn med byggesagerne, så vi straks kan følge op
              på projektspørgsmål og uklarheder. Vi sætter de samme faste medarbejdere på sagen fra
              start til slut, og der er altid kun én kontaktperson – det sikrer kontinuitet og
              ansvar.
            </p>
          </div>
        </div>
        <div className="relative order-1 min-h-[360px] lg:order-2 lg:min-h-0">
          <img
            src={documentationImg}
            alt="Projektleder og håndværker gennemgår tegninger på byggepladsen"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </section>

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-sm bg-surface p-10 lg:p-14">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-px w-10 bg-accent" />
                  <span className="text-xs font-semibold uppercase text-accent">
                    Skal vi kvalitetssikre din næste sag?
                  </span>
                </div>
                <h2 className="text-4xl text-foreground sm:text-5xl lg:text-6xl">
                  Tæt opfølgning fra opstart til aflevering
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  Vi sætter faste hold på sagen og dokumenterer arbejdet løbende, så I altid har
                  overblik over fremdrift og kvalitet.
                </p>
              </div>
              <div>
                <Link
                  to="/kontakt"
                  className="inline-flex items-center gap-2 bg-accent px-6 py-3 text-sm font-semibold uppercase text-accent-foreground transition-colors hover:bg-accent/90"
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
