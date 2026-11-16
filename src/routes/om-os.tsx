import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { StoryScroll } from "@/components/StoryScroll";
import fasteHoldImg from "@/assets/faste hold.jpeg";
import craftsmanImg from "@/assets/craftsman-working.jpg";
import teamImg from "@/assets/ydelser/Workers Confer at Construction Site.png";
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

const facts = [
  { value: "3", label: "hovedfag: tømrer, maler og flisemurer" },
  { value: "1", label: "fast kontaktperson pr. sag" },
];

const practices = [
  "Hurtig opfølgning på projektspørgsmål",
  "Kvalitetssikring i Dalux, Ajour, Byggeweb eller eget KS-system",
  "Én fast kontaktperson på alle projekter",
];

const clients = [
  "CG Jensen A/S",
  "B. Nygaard Sørensen A/S",
  "Enemærke & Pedersen A/S",
  "Phil & Søn",
];

function SectionLabel({ children }: { children: string }) {
  return (
    <div className="mb-4 flex items-center gap-3">
      <span className="h-px w-10 bg-accent" />
      <span className="text-xs font-semibold uppercase text-accent">{children}</span>
    </div>
  );
}

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

      <StoryScroll
        chapters={[
          {
            image: teamImg,
            alt: "MG Totalentreprise – håndværkere på byggepladsen",
            content: (
              <>
                <SectionLabel>Hvem vi er</SectionLabel>
                <h2 className="text-4xl text-foreground sm:text-5xl lg:text-6xl">
                  Egne håndværkere – tømrere, flisemurere og malere
                </h2>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground lg:text-lg">
                  Vores medarbejdere er fastansatte, og det samme hold følger så vidt muligt en sag
                  fra start til slut.
                </p>
                <div className="mt-10 grid max-w-xl grid-cols-2 gap-8 border-t border-border pt-8">
                  {facts.map((f) => (
                    <div key={f.label}>
                      <div className="text-7xl font-extralight leading-none text-foreground lg:text-8xl">
                        {f.value}
                      </div>
                      <p className="mt-4 text-sm leading-snug text-muted-foreground">{f.label}</p>
                    </div>
                  ))}
                </div>
              </>
            ),
          },
          {
            image: fasteHoldImg,
            alt: "Malere på lift på byggepladsen",
            content: (
              <>
                <SectionLabel>Sådan arbejder vi</SectionLabel>
                <h2 className="text-4xl text-foreground sm:text-5xl lg:text-6xl">
                  Tæt projektledelse på hver sag
                </h2>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground lg:text-lg">
                  Vores projektledere fører dagligt tilsyn med byggesagerne, så vi straks kan følge
                  op på spørgsmål og uklarheder.
                </p>
                <ul className="mt-10 max-w-xl border-t border-border">
                  {practices.map((item) => (
                    <li
                      key={item}
                      className="border-b border-border py-4 text-base font-semibold text-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </>
            ),
          },
          {
            image: craftsmanImg,
            alt: "Malere i arbejde på byggepladsen",
            content: (
              <>
                <SectionLabel>Kunder</SectionLabel>
                <h2 className="text-4xl text-foreground sm:text-5xl lg:text-6xl">
                  Derfor vælger kunder os igen
                </h2>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground lg:text-lg">
                  Vi vil være den underentreprenør, vores kunder gerne vender tilbage til, fordi vi
                  holder, hvad vi lover.
                </p>
                <ul className="mt-10 max-w-xl border-t border-border">
                  {clients.map((c) => (
                    <li
                      key={c}
                      className="border-b border-border py-4 text-xl font-light text-foreground lg:text-2xl"
                    >
                      {c}
                    </li>
                  ))}
                </ul>
              </>
            ),
          },
        ]}
      />

      {/* Leadership */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-12">
          <div className="mb-12 max-w-2xl lg:mb-16">
            <SectionLabel>Ledelse</SectionLabel>
            <h2 className="text-4xl text-foreground sm:text-5xl lg:text-6xl">
              Mød menneskerne bag MG
            </h2>
          </div>

          <div className="grid gap-10 md:grid-cols-2 lg:gap-16">
            <article>
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
                <img
                  src={andersImg}
                  alt="Anders Johnsen, direktør i MG Totalentreprise"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 lg:p-8">
                  <h3 className="text-2xl font-light text-background lg:text-3xl">
                    Anders Johnsen
                  </h3>
                  <div className="mt-1 text-xs font-semibold uppercase text-background/80">
                    Adm. direktør
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  Anders Johnsen er direktør i MG Totalentreprise ApS og står i spidsen for både den
                  daglige drift og virksomhedens byggesager. Med mange år i byggebranchen lægger han
                  vægt på ordentligt håndværk, klare aftaler og tæt dialog med kunderne – og du
                  møder ham typisk allerede i tilbudsfasen.
                </p>
              </div>
            </article>

            <article>
              <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden rounded-sm bg-foreground/80">
                <span className="text-sm font-medium uppercase text-background/60">
                  Billede af Magdalena
                </span>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 lg:p-8">
                  <h3 className="text-2xl font-light text-background lg:text-3xl">
                    Magdalena Malinowska
                  </h3>
                  <div className="mt-1 text-xs font-semibold uppercase text-background/80">
                    Direktør
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  Magda har mange års erfaring inden for økonomi, investeringer og ledelse inden for
                  byggeri. Hun er ansvarlig for opførelsen af vores polske ejendomsprojekter.
                </p>
              </div>
            </article>
          </div>

          <Link
            to="/kontakt"
            className="group mt-14 inline-flex items-center gap-1.5 text-sm font-semibold uppercase text-accent"
          >
            Kom i kontakt
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </section>
    </>
  );
}
