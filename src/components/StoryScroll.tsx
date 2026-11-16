import { useEffect, useRef, useState, type ReactNode } from "react";

type Chapter = { image: string; alt: string; content: ReactNode };

/**
 * Sticky photo on the left that cross-fades as the reader scrolls through
 * the chapters on the right. On small screens every chapter shows its own photo.
 */
export function StoryScroll({ chapters }: { chapters: Chapter[] }) {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(Number(entry.target.getAttribute("data-index")));
        }
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-background">
      <div className="mx-auto grid max-w-[1600px] gap-x-20 px-4 sm:px-6 lg:grid-cols-2 lg:px-12">
        <div className="relative hidden lg:block">
          <div className="sticky top-24 my-24 h-[calc(100dvh-8rem)] overflow-hidden rounded-sm bg-muted">
            {chapters.map((c, i) => (
              <img
                key={c.alt}
                src={c.image}
                alt={c.alt}
                loading="lazy"
                className={`absolute inset-0 h-full w-full object-cover transition-all duration-1000 ease-out ${
                  active === i ? "scale-100 opacity-100" : "scale-105 opacity-0"
                }`}
              />
            ))}
            <div className="absolute inset-x-0 bottom-0 flex gap-2 p-6">
              {chapters.map((c, i) => (
                <span
                  key={c.alt}
                  className={`h-px flex-1 transition-colors duration-500 ${
                    active === i ? "bg-background" : "bg-background/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        <div>
          {chapters.map((c, i) => (
            <article
              key={c.alt}
              data-index={i}
              ref={(el) => {
                refs.current[i] = el;
              }}
              className="flex flex-col justify-center py-16 lg:min-h-dvh lg:py-24"
            >
              <div className="relative mb-10 aspect-[4/3] overflow-hidden rounded-sm lg:hidden">
                <img
                  src={c.image}
                  alt={c.alt}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
              {c.content}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
