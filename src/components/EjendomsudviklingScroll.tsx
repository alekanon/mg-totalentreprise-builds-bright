import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import naleczow1 from "@/assets/Ejendomsudvikling/naleczow1.jpg";
import naleczow2 from "@/assets/Ejendomsudvikling/naleczow2/naleczow2(4).jpg";
import lellinge from "@/assets/Ejendomsudvikling/lellinge.jpg";

const projects = [
  { title: "Nałęczów I", location: "Polen", image: naleczow1 },
  { title: "Nałęczów II", location: "Polen", image: naleczow2 },
  { title: "Ringstedvej 204, Lellinge", location: "Danmark", image: lellinge },
];

const stats = [
  { value: "6", text: "igangværende boligprojekter" },
  { value: "2", text: "lande – Danmark og Polen" },
];

export function EjendomsudviklingScroll() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const update = () => {
      const rect = el.getBoundingClientRect();
      const stickyH = (el.firstElementChild as HTMLElement | null)?.offsetHeight ?? window.innerHeight;
      const scrollable = rect.height - stickyH;
      const progress = scrollable > 0 ? Math.min(Math.max(-rect.top / scrollable, 0), 0.999) : 0;
      setActive(Math.floor(progress * projects.length));
    };
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        update();
      });
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section ref={ref} className="relative h-[280svh] bg-background">
      <div className="sticky top-0 flex h-svh flex-col pb-10 pt-24">
        <div className="mx-auto flex min-h-0 w-full max-w-[1600px] flex-1 flex-col px-4 sm:px-6 lg:px-12">
          <div className="mb-8 grid gap-6 lg:grid-cols-[1.7fr_1fr] lg:items-end lg:gap-16">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-10 bg-accent" />
                <span className="text-xs font-semibold uppercase text-accent">
                  Ejendomsudvikling
                </span>
              </div>
              <h2 className="text-4xl text-foreground sm:text-5xl lg:text-5xl">
                Vi udvikler ejendomme i eget regi
              </h2>
              <Link
                to="/ejendomsudvikling"
                className="group mt-5 inline-flex items-center gap-1.5 text-sm font-semibold uppercase text-accent"
              >
                Se ejendomsudvikling
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>
            <div className="flex gap-10 lg:justify-end">
              {stats.map((st) => (
                <div key={st.text} className="flex items-end gap-3">
                  <span className="text-5xl font-extralight leading-[0.8] text-foreground">
                    {st.value}
                  </span>
                  <span className="max-w-[8rem] text-sm leading-snug text-muted-foreground">
                    {st.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-0 flex-1 overflow-hidden rounded-sm bg-muted">
            {projects.map((p, i) => (
              <img
                key={p.title}
                src={p.image}
                alt={p.title}
                loading="eager" decoding="async"
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-out will-change-[opacity] ${
                  active === i ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-8 p-6 lg:p-8">
              <div className="text-background">
                <div className="text-xs font-semibold tabular-nums text-background/70">
                  {String(active + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
                </div>
                <div className="mt-1 text-lg font-semibold">{projects[active].title}</div>
                <div className="text-sm text-background/75">{projects[active].location}</div>
              </div>
              <div className="flex w-40 gap-2 pb-2">
                {projects.map((p, i) => (
                  <span
                    key={p.title}
                    className={`h-px flex-1 transition-colors duration-500 ${
                      active === i ? "bg-background" : "bg-background/40"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
