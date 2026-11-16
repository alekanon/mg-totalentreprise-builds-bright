import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { GalleryLightbox } from "@/components/GalleryLightbox";
import heroImg from "@/assets/Ejendomsudvikling/enjdomsudviklingmainpage.jpg";
import naleczow1 from "@/assets/Ejendomsudvikling/naleczow1-UPSCALED.png";
import naleczow2 from "@/assets/Ejendomsudvikling/naleczow2.png";
import naleczow2_1 from "@/assets/Ejendomsudvikling/naleczow2/naleczow2(1).jpg";
import naleczow2_2 from "@/assets/Ejendomsudvikling/naleczow2/Naleczow2(2).jpg";
import naleczow2_3 from "@/assets/Ejendomsudvikling/naleczow2/naleczow2(3).jpg";
import naleczow2_4 from "@/assets/Ejendomsudvikling/naleczow2/naleczow2(4).jpg";
import naleczow2_5 from "@/assets/Ejendomsudvikling/naleczow2/naleczow2(5).jpg";
import naleczow2_6 from "@/assets/Ejendomsudvikling/naleczow2/naleczow2(6).png";
import naleczow3_1 from "@/assets/Ejendomsudvikling/naleczow3/nal3.1.jpg";
import naleczow3_2 from "@/assets/Ejendomsudvikling/naleczow3/nal3.2.jpg";
import solrød1 from "@/assets/Ejendomsudvikling/solrød1.png";
import solrød2 from "@/assets/Ejendomsudvikling/solrød2.png";
import solrød3 from "@/assets/Ejendomsudvikling/solrød3.png";
import lellinge1 from "@/assets/Ejendomsudvikling/lellinge-UPSCALED.png";
import lellinge2 from "@/assets/Ejendomsudvikling/lellinge2.png";
import marysin1 from "@/assets/Ejendomsudvikling/marysin/marysin-1.jpg";
import marysin2 from "@/assets/Ejendomsudvikling/marysin/marysin-2.jpg";
import marysin3 from "@/assets/Ejendomsudvikling/marysin/marysin-3.jpg";
import marysin4 from "@/assets/Ejendomsudvikling/marysin/marysin-4.jpg";
import marysin5 from "@/assets/Ejendomsudvikling/marysin/marysin-5.jpg";
import marysin6 from "@/assets/Ejendomsudvikling/marysin/marysin-6.jpg";
import marysin7 from "@/assets/Ejendomsudvikling/marysin/marysin-7.jpg";

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
  status?: string;
  images?: string[];
};

const mgProjects: Project[] = [
  {
    title: "Solrød Byvej 58",
    location: "Solrød",
    description:
      "Omdannelse af eksisterende gård, beliggende i den bevaringsværdige del af Solrød, til nyt komplet bygningskompleks bestående af en nyrenoveret hovedbygning og nybyggede 9 boligenheder i Hedebostil. Hele komplekset udvikles i tæt samarbejde med lokalområdet og Solrød Kommune.",
    value: "Projektværdi tilføjes",
    tag: "Udføres i eget regi",
    status: "Lokalplan er under udarbejdelse",
    images: [solrød1, solrød2, solrød3],
  },
  {
    title: "Ringstedvej 204",
    location: "Lellinge",
    description:
      "Udvikling af 8 rækkehuse på en eksisterende ejendom i landsbyen Lellinge tæt ved Køge. De nye bygninger opføres i respekt med lokalmiljøet og ud fra retningslinjerne i Køge Kompasset, der stiller strenge krav til integreringen af vild natur, bæredygtighed og samspillet mellem de kommende beboere.",
    value: "Projektværdi tilføjes",
    tag: "Udføres i eget regi",
    status: "Ny lokalplan er vedtaget",
    images: [lellinge1, lellinge2],
  },
];

const viridisProjects: Project[] = [
  {
    title: "Nałęczów I",
    location: "Nałęczów, Polen",
    description: "Udført som totalentreprenør. Beskrivelse tilføjes.",
    value: "26.260.000 PLN",
    tag: "Totalentreprenør",
    images: [naleczow1, naleczow2],
  },
  {
    title: "Nałęczów II",
    location: "Nałęczów, Polen",
    description: "Endnu et projekt udført som totalentreprenør i Nałęczów. Beskrivelse tilføjes.",
    value: "42.800.000 PLN",
    tag: "Totalentreprenør",
    images: [naleczow2_1, naleczow2_2, naleczow2_3, naleczow2_4, naleczow2_5, naleczow2_6],
  },
  {
    title: "Nałęczów III",
    location: "Nałęczów, Polen",
    description: "Beskrivelse tilføjes.",
    value: "25.380.000 PLN",
    images: [naleczow3_1, naleczow3_2],
  },
  {
    title: "Snopków",
    location: "Snopków, Lublin",
    description: "Udført som totalentreprenør. Beskrivelse tilføjes.",
    value: "12.300.000 PLN",
    tag: "Totalentreprenør",
  },
  {
    title: "Marysin",
    location: "Marysin, Lublin",
    description: "Projektudviklingsprojekt. Beskrivelse tilføjes.",
    value: "16.200.000 PLN",
    tag: "Projektudvikling",
    images: [marysin1, marysin2, marysin3, marysin4, marysin5, marysin6, marysin7],
  },
];

function sumPLN(projects: Project[]) {
  const sum = projects.reduce((acc, p) => acc + (parseInt(p.value.replace(/\D/g, ""), 10) || 0), 0);
  return `${String(sum).replace(/\B(?=(\d{3})+(?!\d))/g, ".")} PLN`;
}

function ProjectTile({ project, onOpen }: { project: Project; onOpen: () => void }) {
  const images = project.images ?? [];
  const clickable = images.length > 0;

  const media = (
    <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-muted">
      {clickable ? (
        <img
          src={images[0]}
          alt={project.title}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      ) : (
        <div className="flex h-full items-center justify-center">
          <span className="text-xs font-medium uppercase text-muted-foreground">
            Billede tilføjes
          </span>
        </div>
      )}
    </div>
  );

  return (
    <article className="group">
      {clickable ? (
        <button
          type="button"
          onClick={onOpen}
          aria-label={`Se billeder af ${project.title}`}
          className="block w-full text-left"
        >
          {media}
        </button>
      ) : (
        media
      )}
      <div className="mt-5 border-t border-border pt-5">
        <h3 className="text-2xl font-bold text-foreground lg:text-3xl">{project.title}</h3>
        <p className="mt-3 line-clamp-3 text-base leading-relaxed text-muted-foreground">
          {project.description}
        </p>
        <dl className="mt-5 grid grid-cols-3 gap-4 text-sm">
          <div>
            <dt className="text-[10px] font-semibold uppercase text-muted-foreground">Sted</dt>
            <dd className="mt-1 font-semibold text-foreground">{project.location}</dd>
          </div>
          <div>
            <dt className="text-[10px] font-semibold uppercase text-muted-foreground">Status</dt>
            <dd className="mt-1 font-semibold text-foreground">
              {project.status ?? "Oplyses senere"}
            </dd>
          </div>
          <div>
            <dt className="text-[10px] font-semibold uppercase text-muted-foreground">
              Projektværdi
            </dt>
            <dd className="mt-1 font-semibold text-foreground">
              {/\d/.test(project.value) ? project.value : "Oplyses senere"}
            </dd>
          </div>
        </dl>
        {clickable && (
          <button
            type="button"
            onClick={onOpen}
            className="group/more mt-6 inline-flex items-center gap-1.5 text-sm font-semibold uppercase text-accent"
          >
            Læs mere
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/more:-translate-y-0.5 group-hover/more:translate-x-0.5" />
          </button>
        )}
      </div>
    </article>
  );
}

function Division({
  tone,
  label,
  title,
  description,
  projects,
  total,
  onOpen,
}: {
  tone: "light" | "surface";
  label: string;
  title: string;
  description: string;
  projects: Project[];
  total: string;
  onOpen: (p: Project) => void;
}) {
  return (
    <section className={`py-20 lg:py-28 ${tone === "surface" ? "bg-surface" : "bg-background"}`}>
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-end lg:gap-20">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-10 bg-accent" />
              <span className="text-xs font-semibold uppercase text-accent">{label}</span>
            </div>
            <h2 className="text-4xl text-foreground sm:text-5xl lg:text-6xl">{title}</h2>
          </div>
          <p className="text-base leading-relaxed text-muted-foreground lg:text-lg">
            {description}
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-end gap-x-6 gap-y-2 lg:mt-14">
          <span className="pb-2 text-xs font-semibold uppercase text-muted-foreground">
            Samlet værdi
          </span>
          <span className="text-4xl font-extralight leading-none text-foreground lg:text-6xl">
            {total}
          </span>
        </div>

        <div className="mt-14 grid gap-x-8 gap-y-14 border-t border-border pt-12 md:grid-cols-2 lg:mt-20 lg:gap-x-12 lg:gap-y-16 lg:pt-16">
          {projects.map((p) => (
            <ProjectTile key={p.title} project={p} onOpen={() => onOpen(p)} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Ejendomsudvikling() {
  const [active, setActive] = useState<Project | null>(null);
  const [slide, setSlide] = useState(0);

  const openProject = (p: Project) => {
    setActive(p);
    setSlide(0);
  };

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

      <Division
        tone="light"
        label="Danmark"
        title="MG Ejendomme"
        description="Gennem MG Ejendomme udvikler og opfører vi boligprojekter i eget regi i Danmark, fra projektudvikling til udførelse."
        projects={mgProjects}
        total="Oplyses senere"
        onOpen={openProject}
      />

      <Division
        tone="surface"
        label="Polen"
        title="Viridis Sp. z o.o."
        description="Viridis er vores polske selskab, der udfører byggeopgaver som totalentreprenør og udvikler egne ejendomsprojekter."
        projects={viridisProjects}
        total={sumPLN(viridisProjects)}
        onOpen={openProject}
      />

      <GalleryLightbox
        open={!!active}
        title={active?.title ?? ""}
        subtitle={active?.location}
        images={active?.images ?? []}
        index={slide}
        onIndexChange={setSlide}
        onClose={() => setActive(null)}
        details={
          active && (
            <>
              <p className="text-base leading-relaxed text-white/80">{active.description}</p>
              <dl className="mt-6 space-y-4 border-t border-white/20 pt-4">
                <div>
                  <dt className="text-[10px] font-semibold uppercase text-white/60">Sted</dt>
                  <dd className="mt-1 text-sm text-white">{active.location}</dd>
                </div>
                <div>
                  <dt className="text-[10px] font-semibold uppercase text-white/60">Status</dt>
                  <dd className="mt-1 text-sm text-white">{active.status ?? "Oplyses senere"}</dd>
                </div>
                <div>
                  <dt className="text-[10px] font-semibold uppercase text-white/60">
                    Projektværdi
                  </dt>
                  <dd className="mt-1 text-sm text-white">
                    {/\d/.test(active.value) ? active.value : "Oplyses senere"}
                  </dd>
                </div>
              </dl>
            </>
          )
        }
      />
    </>
  );
}
