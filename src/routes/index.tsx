import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { HeroCarousel } from "@/components/HeroCarousel";
import { AboutTeaser } from "@/components/AboutTeaser";
import { PartnerLogos } from "@/components/PartnerLogos";
import { ProjectsPreview } from "@/components/ProjectsPreview";
import { Reveal } from "@/components/Reveal";
import { ProcessSteps } from "@/components/ProcessSteps";
import { ProofPanel } from "@/components/ProofPanel";
import { EjendomsudviklingScroll } from "@/components/EjendomsudviklingScroll";
import { ydelser } from "@/data/ydelser";
import carpentersImg from "@/assets/carpenters.jpg";
import malerImg from "@/assets/maler.jpeg";
import bigHerlevImg from "@/assets/projects/big herlev.jpeg";
import strandboulevardenImg from "@/assets/projects/skolen-paa-strandboulevarden-sommer-2018-13.jpg";
import sustainabilityImg from "@/assets/ecofriendlyconstruction-red.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MG Totalentreprise – Tømrer, maler og facadeentreprise" },
      {
        name: "description",
        content:
          "Erfarne håndværkere inden for tømrer, flisemurer og maler. Fagentrepriser for store bygherrer og private boligejere i hele hovedstadsområdet.",
      },
      { property: "og:title", content: "MG Totalentreprise" },
      {
        property: "og:description",
        content: "Tømrer, maler og facadeentreprise i hovedstadsområdet.",
      },
    ],
  }),
  component: Index,
});

const serviceSlugs = ["tomrer", "maler", "erhvervsbyggeri", "totalentreprise"];
const serviceImages: Record<string, string> = {
  tomrer: carpentersImg,
  maler: malerImg,
  erhvervsbyggeri: bigHerlevImg,
  totalentreprise: strandboulevardenImg,
};
const services = serviceSlugs.map((slug) => ({
  ...ydelser.find((item) => item.slug === slug)!,
  image: serviceImages[slug],
}));

const sustainability = [
  {
    title: "Bedre materialevalg",
    text: "Vi reducerer CO₂-aftrykket gennem de materialer, vi vælger.",
  },
  { title: "Mindre spild", text: "Planlægning og tæt styring af forbrug på byggepladsen." },
  {
    title: "Energieffektive løsninger",
    text: "Isolering og detaljer, der holder – energimæssigt og fugtteknisk.",
  },
];

function Index() {
  return (
    <>
      <HeroCarousel />

      {/* Ydelser preview */}
      <section className="bg-background py-24 lg:py-40">
        <div className="mx-auto flex w-full max-w-[1600px] flex-col px-4 sm:px-6 lg:px-12">
          <div className="mb-12 grid gap-8 lg:mb-16 lg:grid-cols-[1.7fr_1fr] lg:items-end lg:gap-16">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-10 bg-accent" />
                <span className="text-xs font-semibold uppercase text-accent">Vores ydelser</span>
              </div>
              <h2 className="text-4xl text-foreground sm:text-5xl lg:text-5xl">
                Fag­entrepriser til store byggesager og erhvervsprojekter
              </h2>
            </div>
            <div>
              <p className="text-base leading-relaxed text-muted-foreground">
                Vores primære fokus er fagentrepriser for professionelle bygherrer, entreprenører og
                erhvervsvirksomheder. Vi løser også mindre opgaver – altid med samme faste hold og
                høje kvalitet.
              </p>
              <Link
                to="/ydelser"
                className="group mt-4 inline-flex items-center gap-1.5 text-sm font-semibold uppercase text-accent"
              >
                Se alle ydelser
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>

          <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">
            {services.map((y) => (
              <Link
                key={y.slug}
                to="/ydelser/$slug"
                params={{ slug: y.slug }}
                className="group block"
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                  <img
                    src={y.image}
                    alt={y.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="mt-5 flex items-start justify-between gap-4 border-t border-border pt-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground lg:text-2xl">{y.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{y.short}</p>
                  </div>
                  <ArrowUpRight className="mt-1 h-5 w-5 flex-none text-accent transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <AboutTeaser />

      <PartnerLogos />

      <ProjectsPreview />

      <ProcessSteps />

      <EjendomsudviklingScroll />

      {/* Sustainability */}
      <section className="bg-background py-24 lg:py-40">
        <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-12">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch lg:gap-20">
            <Reveal>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-10 bg-accent" />
                <span className="text-xs font-semibold uppercase text-accent">Bæredygtighed</span>
              </div>
              <h2 className="text-4xl text-foreground sm:text-5xl lg:text-6xl">
                Vi bygger med fokus på fremtiden
              </h2>

              <ol className="mt-10 max-w-xl border-t border-border">
                {sustainability.map((item, i) => (
                  <li
                    key={item.title}
                    className="grid grid-cols-[4rem_1fr] items-center gap-4 border-b border-border py-5"
                  >
                    <span className="text-4xl font-extralight leading-none text-foreground/30">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {item.text}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>

            <div className="flex w-full max-w-[860px] flex-col justify-between gap-12 lg:justify-self-end">
              <p className="max-w-md text-base leading-relaxed text-muted-foreground lg:ml-16 lg:mt-10">
                Vi arbejder løbende på at gøre vores byggeprocesser mere bæredygtige – fra
                materialevalg til energieffektive løsninger.
              </p>
              <img
                src={sustainabilityImg}
                alt="Bæredygtigt byggeri"
                loading="lazy"
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <ProofPanel />
    </>
  );
}
