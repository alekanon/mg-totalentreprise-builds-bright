import pageHero from "@/assets/page-hero.jpg";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  image?: string;
}

export function PageHero({ eyebrow, title, description, image = pageHero }: PageHeroProps) {
  return (
    <section className="relative h-[42vh] min-h-[320px] w-full overflow-hidden bg-surface-dark">
      <img
        src={image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-50"
      />
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-end px-4 pb-12 sm:px-6 lg:px-8 lg:pb-16">
        <div className="max-w-3xl animate-fade-in-up">
          {eyebrow && (
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-10 bg-accent" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                {eyebrow}
              </span>
            </div>
          )}
          <h1 className="text-4xl font-bold text-background sm:text-5xl lg:text-6xl">{title}</h1>
          {description && (
            <p className="mt-4 max-w-2xl text-base text-background/80 lg:text-lg">{description}</p>
          )}
        </div>
      </div>
    </section>
  );
}
