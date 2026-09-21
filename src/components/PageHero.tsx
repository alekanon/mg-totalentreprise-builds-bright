import { useEffect, useRef } from "react";
import pageHero from "@/assets/page-hero.jpg";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  image?: string;
  size?: "default" | "lg";
  parallax?: boolean;
  dim?: boolean;
}

export function PageHero({
  eyebrow,
  title,
  description,
  image = pageHero,
  size = "default",
  parallax = false,
  dim = true,
}: PageHeroProps) {
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!parallax) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const img = imgRef.current;
    if (!img) return;

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const offset = Math.min(window.scrollY, 700) * 0.4;
        img.style.transform = `translateY(${offset}px)`;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [parallax]);

  return (
    <section
      data-header-theme="dark"
      className={`relative w-full overflow-hidden bg-surface-dark ${
        size === "lg" ? "h-[62vh] min-h-[440px] lg:min-h-[600px]" : "h-[36vh] min-h-[260px]"
      }`}
    >
      <img
        ref={imgRef}
        src={image}
        alt=""
        className={`absolute inset-x-0 -top-[10%] h-[120%] w-full object-cover ${
          dim ? "opacity-50" : ""
        } ${parallax ? "will-change-transform" : ""}`}
      />
      {dim ? (
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      ) : (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      )}
      {/* Guarantees the header logo/nav stay legible regardless of how bright the photo is. */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/45 to-transparent" />
      <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-end px-4 pb-12 sm:px-6 lg:px-8 lg:pb-16">
        <div className="max-w-3xl animate-fade-in-up">
          {eyebrow && (
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-10 bg-accent" />
              <span className="text-xs font-semibold uppercase text-accent">{eyebrow}</span>
            </div>
          )}
          <h1 className="text-4xl text-background sm:text-5xl lg:text-6xl">{title}</h1>
          {description && (
            <p className="mt-3 max-w-2xl text-sm text-background/80 lg:text-base">{description}</p>
          )}
        </div>
      </div>
    </section>
  );
}
