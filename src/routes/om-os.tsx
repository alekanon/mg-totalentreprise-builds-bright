import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ClipboardCheck, Eye, MessageCircleMore, UserCheck, Users } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import teamImg from "@/assets/om-os-team.jpg";
import andersImg from "@/assets/anders-johnsen.jpg";

export const Route = createFileRoute("/om-os")({
  head: () => ({
    meta: [
      { title: "Om os – MG Totalentreprise" },
      {
        name: "description",
        content:
          "MG Totalentreprise ApS er en dansk byggevirksomhed med egne håndværkere inden for tømrer, flisemurer og maler.",
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
  { icon: Users, text: "Faste medarbejdere fra start til slut på hver sag" },
  { icon: UserCheck, text: "Én fast kontaktperson på alle projekter" },
  { icon: Eye, text: "Daglig tilsyn med byggesagerne af vores projektledere" },
  { icon: MessageCircleMore, text: "Hurtig opfølgning på projektspørgsmål og uklarheder" },
  { icon: ClipboardCheck, text: "Kvalitetssikring i Dalux, Ajour, Byggeweb eller eget KS-system" },
];

function OmOs() {
  return (
    <>
      <PageHero
        eyebrow="Om os"
        title="Erfarne håndværkere – tæt projektledelse"
        description="MG Totalentreprise ApS er en dansk byggevirksomhed med fokus på kvalitet, kontinuitet og tæt dialog gennem hele byggeprocessen."
        size="lg"
        parallax
      />

      {/* Who we are */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-10 bg-accent" />
                <span className="text-xs font-semibold uppercase text-accent">Hvem vi er</span>
              </div>
              <h2 className="text-4xl text-foreground sm:text-5xl lg:text-6xl">
                Egne håndværkere – tømrere, flisemurere og malere
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground lg:text-lg">
                Vi har gennem mange år opbygget et stærkt team af erfarne håndværkere. Vores
                medarbejdere er fastansatte, og vi sørger så vidt muligt for, at det er de samme
                hold, der følger en sag fra start til slut – med kun én fast kontaktperson, uanset
                opgavens størrelse.
              </p>
            </div>

            <ul className="divide-y divide-border border-t border-border">
              {values.map((v) => (
                <li key={v.text} className="flex items-start gap-4 py-4">
                  <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-accent/10">
                    <v.icon className="h-4 w-4 text-accent" />
                  </span>
                  <span className="pt-1.5 text-sm leading-relaxed text-foreground">{v.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section data-header-theme="dark" className="grid lg:grid-cols-2">
        <div className="order-2 flex flex-col justify-center bg-surface-dark px-4 py-16 text-background sm:px-6 lg:order-1 lg:px-16 lg:py-24">
          <div className="mx-auto w-full max-w-lg lg:mx-0">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-10 bg-accent" />
              <span className="text-xs font-semibold uppercase text-accent">Sådan arbejder vi</span>
            </div>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl">Derfor vælger kunder os igen</h2>
            <p className="mt-6 text-base leading-relaxed text-background/75 lg:text-lg">
              Vores projektledere fører dagligt tilsyn med byggesagerne, så vi straks kan følge op
              på spørgsmål og uklarheder – det sikrer fremdrift, kvalitet og tilfredse bygherrer. Vi
              arbejder i underentreprise for nogle af landets førende total- og hovedentreprenører –
              bl.a. CG Jensen A/S, B. Nygaard Sørensen A/S, Enemærke & Pedersen A/S og Phil & Søn.
            </p>
            <p className="mt-4 text-base leading-relaxed text-background/75 lg:text-lg">
              Vores ambition er enkel: at være den underentreprenør, vores kunder gerne vender
              tilbage til, fordi vi holder, hvad vi lover.
            </p>
          </div>
        </div>
        <div className="relative order-1 min-h-[320px] lg:order-2 lg:min-h-0">
          <img
            src={teamImg}
            alt="MG Totalentreprise – håndværkere på byggepladsen"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </section>

      <section className="border-y border-border bg-surface py-10">
        <div className="mx-auto flex max-w-3xl flex-col divide-y divide-border px-4 text-center sm:flex-row sm:divide-x sm:divide-y-0 sm:px-6 lg:px-8">
          <div className="flex-1 py-4 sm:py-0">
            <span className="text-2xl font-bold text-foreground">3</span>{" "}
            <span className="text-sm text-muted-foreground">
              hovedfag: tømrer, maler, flisemurer
            </span>
          </div>
          <div className="flex-1 py-4 sm:py-0">
            <span className="text-2xl font-bold text-foreground">1</span>{" "}
            <span className="text-sm text-muted-foreground">fast kontaktperson pr. sag</span>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-surface py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex items-center gap-3 lg:mb-16">
            <span className="h-px w-10 bg-accent" />
            <span className="text-xs font-semibold uppercase text-accent">Ledelse</span>
          </div>

          <div className="grid gap-16 lg:gap-24">
            {/* Anders */}
            <div className="grid items-start gap-10 lg:grid-cols-[320px_1fr] lg:gap-16">
              <div className="relative aspect-[4/5] w-full max-w-[320px] overflow-hidden rounded-sm">
                <img
                  src={andersImg}
                  alt="Anders Johnsen, direktør i MG Totalentreprise"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground sm:text-3xl">Anders Johnsen</h3>
                <div className="mt-1 text-sm font-semibold uppercase text-accent">Direktør</div>
                <p className="mt-6 text-base leading-relaxed text-muted-foreground lg:text-lg">
                  Anders Johnsen er direktør i MG Totalentreprise ApS og står i spidsen for både den
                  daglige drift og virksomhedens byggesager. Med mange år i byggebranchen lægger han
                  vægt på ordentligt håndværk, klare aftaler og tæt dialog med kunderne – og du
                  møder ham typisk allerede i tilbudsfasen.
                </p>
                <Link
                  to="/kontakt"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase text-accent hover:gap-3 transition-all"
                >
                  Kom i kontakt <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Magda */}
            <div className="grid items-start gap-10 lg:grid-cols-[1fr_320px] lg:gap-16">
              <div>
                <h3 className="text-2xl font-bold text-foreground sm:text-3xl">Magda</h3>
                <div className="mt-1 text-sm font-semibold uppercase text-accent">
                  [Titel tilføjes]
                </div>
                <p className="mt-6 text-base leading-relaxed text-muted-foreground lg:text-lg">
                  [Kort bio tilføjes.]
                </p>
              </div>
              <div className="order-first flex aspect-[4/5] w-full max-w-[320px] items-center justify-center rounded-sm bg-muted lg:order-last">
                <span className="text-sm font-medium uppercase text-muted-foreground">
                  Billede af Magda
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
