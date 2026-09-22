import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import heroImg from "@/assets/Ejendomsudvikling/enjdomsudviklingmainpage.jpg";
import naleczow1 from "@/assets/Ejendomsudvikling/naleczow1.png";
import naleczow2 from "@/assets/Ejendomsudvikling/naleczow2.png";
import naleczowp2 from "@/assets/Ejendomsudvikling/naleczowp2.jpg";
import naleczowp21 from "@/assets/Ejendomsudvikling/naleczowp21.jpg";
import solrød1 from "@/assets/Ejendomsudvikling/solrød1.png";
import solrød2 from "@/assets/Ejendomsudvikling/solrød2.png";
import solrød3 from "@/assets/Ejendomsudvikling/solrød3.png";
import lellinge1 from "@/assets/Ejendomsudvikling/lellinge.png";
import lellinge2 from "@/assets/Ejendomsudvikling/lellinge2.png";

export const Route = createFileRoute("/ejendomsudvikling")({
  head: () => ({
    meta: [
      { title: "Ejendomsudvikling – MG Totalentreprise" },
      {
        name: "description",
        content:
          "MG Totalentreprise udvikler ejendomme i eget regi gennem MG Ejendomme i Danmark og Viridis Sp. z o.o. i Polen.",
      },
      { property: "og:title", content: "Ejendomsudvikling – MG Totalentreprise" },
      {
        property: "og:description",
        content: "Se vores igangværende og kommende projektudviklingsprojekter i Danmark og Polen.",
      },
    ],
  }),
  component: Ejendomsudvikling,
});

type Project = {
  title: string;
  location: string;
  description: string;
  value: string;
  tag?: string;
  images?: string[];
};

const mgProjects: Project[] = [
  {
    title: "Solrød Byvej 58",
    location: "Solrød",
    description: "Projektforslag under udvikling. Beskrivelse tilføjes.",
    value: "Projektværdi tilføjes",
    tag: "Udføres i eget regi",
    images: [solrød1, solrød2, solrød3],
  },
  {
    title: "Ringstedvej 204",
    location: "Lellinge",
    description: "Projektforslag under udvikling. Beskrivelse tilføjes.",
    value: "Projektværdi tilføjes",
    tag: "Udføres i eget regi",
    images: [lellinge1, lellinge2],
  },
];

const viridisProjects: Project[] = [
  {
    title: "Nałęczów I",
    location: "Polen",
    description: "Udført som totalentreprenør. Beskrivelse tilføjes.",
    value: "Projektværdi tilføjes",
    tag: "Totalentreprenør",
    images: [naleczow1, naleczow2],
  },
  {
    title: "Nałęczów II",
    location: "Polen",
    description: "Endnu et projekt udført som totalentreprenør i Nałęczów. Beskrivelse tilføjes.",
    value: "Projektværdi tilføjes",
    tag: "Totalentreprenør",
    images: [naleczowp2, naleczowp21],
  },
  {
    title: "Snopków",
    location: "Polen",
    description: "Udført som totalentreprenør. Beskrivelse tilføjes.",
    value: "Projektværdi tilføjes",
    tag: "Totalentreprenør",
  },
  {
    title: "Marysin",
    location: "Polen",
    description: "Projektudviklingsprojekt. Beskrivelse tilføjes.",
    value: "Projektværdi tilføjes",
    tag: "Projektudvikling",
  },
];

function ProjectImage({ title, images }: { title: string; images?: string[] }) {
  if (!images || images.length === 0) {
    return (
      <div className="flex aspect-[4/3] items-center justify-center bg-muted">
        <span className="text-sm font-medium uppercase text-muted-foreground">
          Billede tilføjes
        </span>
      </div>
    );
  }

  return <ProjectImageCarousel title={title} images={images} />;
}

function ProjectImageCarousel({ title, images }: { title: string; images: string[] }) {
  const [index, setIndex] = useState(0);
  const hasMultiple = images.length > 1;

  return (
    <div className="group relative aspect-[4/3] overflow-hidden">
      <img
        src={images[index]}
        alt={hasMultiple ? `${title} – billede ${index + 1}` : title}
        loading="lazy"
        className="h-full w-full object-cover"
      />
      {hasMultiple && index > 0 && (
        <button
          type="button"
          onClick={() => setIndex((i) => i - 1)}
          aria-label="Forrige billede"
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-background/90 p-2 text-foreground opacity-0 shadow-md transition-opacity duration-200 group-hover:opacity-100 hover:bg-accent hover:text-accent-foreground"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
      )}
      {hasMultiple && index < images.length - 1 && (
        <button
          type="button"
          onClick={() => setIndex((i) => i + 1)}
          aria-label="Næste billede"
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-background/90 p-2 text-foreground opacity-0 shadow-md transition-opacity duration-200 group-hover:opacity-100 hover:bg-accent hover:text-accent-foreground"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      )}
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="overflow-hidden rounded-sm border border-border bg-background">
      <ProjectImage title={project.title} images={project.images} />
      <div className="p-6">
        {project.tag && (
          <span className="inline-block rounded-sm border border-accent/30 bg-accent/10 px-2 py-1 text-[10px] font-bold uppercase text-accent">
            {project.tag}
          </span>
        )}
        <h3 className="mt-3 text-lg font-bold text-foreground">{project.title}</h3>
        <div className="mt-1 text-xs font-semibold uppercase text-muted-foreground">
          {project.location}
        </div>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
        <div className="mt-4 border-t border-border pt-3 text-sm font-semibold text-foreground">
          {project.value}
        </div>
      </div>
    </div>
  );
}

function Ejendomsudvikling() {
  return (
    <>
      <PageHero
        eyebrow="Ejendomsudvikling"
        title="Ejendomsudvikling i Danmark og Polen"
        description="Vi udvikler og opfører ejendomme i eget regi gennem MG Ejendomme i Danmark og Viridis Sp. z o.o. i Polen."
        image={heroImg}
        size="lg"
        parallax
      />

      {/* Intro */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-accent" />
            <span className="text-xs font-semibold uppercase text-accent">Eget regi</span>
            <span className="h-px w-10 bg-accent" />
          </div>
          <h2 className="text-4xl text-foreground sm:text-5xl lg:text-6xl">
            Fra entreprise til projektudvikling
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground lg:text-lg">
            Ud over vores rolle som fag- og totalentreprenør udvikler vi selv ejendomsprojekter – i
            Danmark gennem MG Ejendomme og i Polen gennem Viridis Sp. z o.o. Det giver os fuld
            kontrol over kvalitet, tidsplan og økonomi fra første skitse til aflevering.
          </p>
        </div>
      </section>

      {/* MG Ejendomme */}
      <section className="border-t border-border bg-surface py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-10 bg-accent" />
            <span className="text-xs font-semibold uppercase text-accent">MG Ejendomme</span>
          </div>
          <h2 className="max-w-2xl text-5xl text-foreground sm:text-6xl lg:text-7xl">
            MG Ejendomme i Danmark
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground lg:text-lg">
            Gennem MG Ejendomme udvikler og opfører vi boligprojekter i eget regi. Begge
            projektforslag nedenfor udføres i eget regi, fra projektudvikling til udførelse.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {mgProjects.map((p) => (
              <ProjectCard key={p.title} project={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Viridis */}
      <section className="border-t border-border bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-10 bg-accent" />
            <span className="text-xs font-semibold uppercase text-accent">Viridis Sp. z o.o.</span>
          </div>
          <h2 className="max-w-2xl text-5xl text-foreground sm:text-6xl lg:text-7xl">
            Viridis Sp. z o.o. i Polen
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground lg:text-lg">
            Viridis er vores polske selskab, der udfører byggeopgaver som totalentreprenør og
            udvikler egne ejendomsprojekter.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {viridisProjects.map((p) => (
              <ProjectCard key={p.title} project={p} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-surface py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-sm bg-background p-10 lg:p-14">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-px w-10 bg-accent" />
                  <span className="text-xs font-semibold uppercase text-accent">
                    Har du et projekt eller en grund?
                  </span>
                </div>
                <h2 className="text-4xl text-foreground sm:text-5xl lg:text-6xl">
                  Lad os tale om jeres næste projekt
                </h2>
              </div>
              <div className="flex lg:justify-end">
                <Link
                  to="/kontakt"
                  className="inline-flex items-center gap-2 bg-accent px-6 py-3 text-sm font-semibold uppercase text-accent-foreground transition-colors hover:bg-accent/90"
                >
                  Kontakt os <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
