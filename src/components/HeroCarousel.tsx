import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const slides = [
  {
    image: hero1,
    eyebrow: "Facadeentreprise",
    title: "Holdbare facader\ni nordisk kvalitet",
    description: "Eternit, træ og aluminium – udført af erfarne fagfolk.",
  },
  {
    image: hero2,
    eyebrow: "Tømrerarbejde",
    title: "Indvendig aptering\nudført med præcision",
    description: "Gipsvægge, lofter, døre, vinduer og trægulve i store boligprojekter.",
  },
  {
    image: hero3,
    eyebrow: "Totalentreprise",
    title: "Fra første streg\ntil færdigt projekt",
    description: "Ca. 30 egne håndværkere klar til fagentrepriser i hele hovedstadsområdet.",
  },
];

export function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 6000, stopOnInteraction: false }),
  ]);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section className="relative h-[88vh] min-h-[560px] w-full overflow-hidden bg-surface-dark">
      <div ref={emblaRef} className="h-full overflow-hidden">
        <div className="flex h-full">
          {slides.map((slide, i) => (
            <div key={i} className="relative h-full min-w-0 flex-[0_0_100%]">
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 h-full w-full object-cover"
                width={1920}
                height={1080}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/30" />
              <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-end px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28">
                <div className="max-w-3xl">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="h-px w-12 bg-accent" />
                    <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
                      {slide.eyebrow}
                    </span>
                  </div>
                  <h1 className="whitespace-pre-line text-4xl font-bold leading-[1.05] text-background sm:text-6xl lg:text-7xl">
                    {slide.title}
                  </h1>
                  <p className="mt-6 max-w-xl text-base text-background/85 lg:text-lg">
                    {slide.description}
                  </p>
                  <div className="mt-8 flex flex-wrap gap-4">
                    <Link
                      to="/ydelser"
                      className="inline-flex items-center gap-2 rounded-sm bg-accent px-6 py-3 text-sm font-semibold uppercase tracking-wide text-accent-foreground transition-colors hover:bg-accent/90"
                    >
                      Se ydelser <ArrowRight className="h-4 w-4" />
                    </Link>
                    <Link
                      to="/kontakt"
                      className="inline-flex items-center gap-2 rounded-sm border border-background/40 bg-background/5 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-background backdrop-blur transition-colors hover:bg-background/15"
                    >
                      Kontakt os
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi?.scrollTo(i)}
            aria-label={`Slide ${i + 1}`}
            className={`h-1 transition-all ${
              selected === i ? "w-10 bg-accent" : "w-6 bg-background/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
