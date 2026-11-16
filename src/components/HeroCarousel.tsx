import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import heroNovo from "@/assets/projects/novokoge.jpg";
import heroSpektrum from "@/assets/hero-spektrum.jpg";
import heroStrand from "@/assets/hero-strandboulevarden.jpg";

const slides = [
  {
    image: heroNovo,
    eyebrow: "Igangværende opgave",
    title: "Maler og Tømrerarbejdet på nyopførelse af fabrik i Køge",
    description:
      "Komplet maler- og tømrerentreprise på nyopførelse af fabriksbyggeri til et større dansk medicinalfirma, med høje krav til renhed og dokumentation.",
  },
  {
    image: heroSpektrum,
    eyebrow: "Udført opgave",
    title: "Malerentreprise på nyt Scandic hotel",
    description:
      "Udførelse af malerarbejdet på dele af byggeriet på det nye Scandic Spectrum. Stram tidsplan og ekstra høje krav til overflader.",
  },
  {
    image: heroStrand,
    eyebrow: "Udført renoveringssag",
    title: "Tømrer, snedker og malerentreprise",
    description: "Fagentreprise på renovering af en større Københavnsk skole i fredet bygning.",
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
    <section
      data-header-theme="dark"
      className="relative h-[calc(100dvh+4px)] w-full overflow-hidden bg-surface-dark -mt-px"
    >
      {/* Guarantees the header logo/nav stay legible regardless of how bright the current slide's photo is. */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-36 bg-gradient-to-b from-black/55 to-transparent" />

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
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/35" />
              <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-end px-5 pb-24 pt-28 sm:px-6 sm:pb-24 lg:px-8 lg:pb-28">
                <div className="max-w-3xl">
                  <div className="mb-3 flex items-center gap-3 sm:mb-4">
                    <span className="h-px w-12 bg-accent" />
                    <span className="text-xs font-semibold uppercase text-accent">
                      {slide.eyebrow}
                    </span>
                  </div>
                  <h1 className="whitespace-pre-line text-balance text-[1.75rem] leading-[1.12] text-background sm:text-5xl sm:leading-[1.05] lg:text-6xl xl:text-7xl">
                    {slide.title}
                  </h1>
                  <p className="mt-4 max-w-xl text-sm leading-relaxed text-background/85 sm:mt-6 sm:text-base lg:text-lg">
                    {slide.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3 sm:mt-8 sm:gap-4">
                    <Link
                      to="/ydelser"
                      className="inline-flex items-center gap-2 bg-accent px-5 py-3 text-xs font-semibold uppercase sm:px-6 sm:text-sm text-accent-foreground transition-colors hover:bg-accent/90"
                    >
                      Se ydelser <ArrowRight className="h-4 w-4" />
                    </Link>
                    <Link
                      to="/kontakt"
                      className="inline-flex items-center gap-2 border border-background/40 bg-background/5 px-5 py-3 text-xs font-semibold uppercase sm:px-6 sm:text-sm text-background backdrop-blur transition-colors hover:bg-background/15"
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
