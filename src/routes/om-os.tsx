import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import teamImg from "@/assets/om-os-team.jpg";

export const Route = createFileRoute("/om-os")({
  head: () => ({
    meta: [
      { title: "Om os – MG Totalentreprise" },
      {
        name: "description",
        content:
          "MG Totalentreprise ApS er en dansk byggevirksomhed med ca. 30 egne håndværkere inden for tømrer, flisemurer og maler.",
      },
      { property: "og:title", content: "Om MG Totalentreprise" },
      {
        property: "og:description",
        content: "Læs om vores værdier, vores team og hvordan vi arbejder.",
      },
    ],
  }),
  component: OmOs,
});

const values = [
  "Faste medarbejdere fra start til slut på hver sag",
  "Én fast kontaktperson på alle projekter",
  "Daglig tilsyn med byggesagerne af vores projektledere",
  "Hurtig opfølgning på projektspørgsmål og uklarheder",
  "Kvalitetssikring i Dalux, Ajour, Byggeweb eller eget KS-system",
];

function OmOs() {
  return (
    <>
      <PageHero
        eyebrow="Om os"
        title="Erfarne håndværkere – tæt projektledelse"
        description="MG Totalentreprise ApS er en dansk byggevirksomhed med fokus på kvalitet, kontinuitet og tæt dialog gennem hele byggeprocessen."
      />

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-10 bg-accent" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                  Hvem vi er
                </span>
              </div>
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
                Ca. 30 egne håndværkere – hovedsageligt tømrere, flisemurere og malere
              </h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground lg:text-lg">
                <p>
                  Vi har gennem mange år opbygget et stærkt team af erfarne håndværkere, der løser
                  opgaver inden for tømrer-, maler- og facadearbejde. Vores medarbejdere er
                  fastansatte, og vi sørger så vidt muligt for, at det er de samme hold, der følger
                  en sag fra start til slut.
                </p>
                <p>
                  Vi udfører fag­entrepriser i hele hovedstadsområdet. Uanset opgavens størrelse er
                  der altid kun én fast kontaktperson, så kommunikationen er enkel og direkte.
                </p>
                <p>
                  Vores projektledere fører dagligt tilsyn med byggesagerne, så vi straks kan følge
                  op på spørgsmål og uklarheder – det sikrer fremdrift, kvalitet og tilfredse
                  bygherrer.
                </p>
                <p>
                  Vi arbejder i underentreprise for nogle af landets førende total- og
                  hovedentreprenører – bl.a. MG Totalentreprise ApS, CG Jensen A/S, B. Nygaard
                  Sørensen A/S, Enemærke & Pedersen A/S og Phil & Søn. Det stiller høje krav til
                  tempo, koordinering og dokumentation, og det er præcis dér, vi leverer.
                </p>
                <p>
                  Vores ambition er enkel: at være den underentreprenør, vores kunder gerne vender
                  tilbage til, fordi vi holder, hvad vi lover – og fordi vores håndværkere møder op
                  med stolthed i faget hver dag.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="overflow-hidden rounded-sm">
                <img
                  src={teamImg}
                  alt="MG Totalentreprise – håndværkere på byggepladsen"
                  loading="lazy"
                  width={1600}
                  height={1100}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="mt-8 rounded-sm border border-border bg-surface p-8">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">
                  Sådan arbejder vi
                </h3>
                <ul className="mt-6 space-y-4">
                  {values.map((v) => (
                    <li key={v} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-accent" />
                      <span className="text-sm leading-relaxed text-foreground">{v}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/kontakt"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-accent hover:gap-3 transition-all"
                >
                  Kom i kontakt <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-dark py-20 text-background lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:grid-cols-3 sm:px-6 lg:px-8">
          <div>
            <div className="text-5xl font-bold text-accent">~30</div>
            <div className="mt-2 text-sm uppercase tracking-wider text-background/70">
              Egne håndværkere
            </div>
          </div>
          <div>
            <div className="text-5xl font-bold text-accent">3</div>
            <div className="mt-2 text-sm uppercase tracking-wider text-background/70">
              Hovedfag: tømrer, maler, flisemurer
            </div>
          </div>
          <div>
            <div className="text-5xl font-bold text-accent">1</div>
            <div className="mt-2 text-sm uppercase tracking-wider text-background/70">
              Fast kontaktperson pr. sag
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
