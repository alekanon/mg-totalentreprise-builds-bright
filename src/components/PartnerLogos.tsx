import { partners } from "@/data/partners";

// Repeat the logo set enough times that one half of the track always
// overflows the viewport width, so the loop has no empty gap to the
// side no matter how few partners are configured.
const REPEATS_PER_HALF = Math.max(6, Math.ceil(14 / partners.length));

export function PartnerLogos() {
  const half = Array.from({ length: REPEATS_PER_HALF }, () => partners).flat();
  const track = [...half, ...half];
  const duration = half.length * 3.2;

  return (
    <section className="bg-surface py-28 lg:py-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-lg">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-10 bg-accent" />
              <span className="text-xs font-semibold uppercase text-accent">
                Samarbejdspartnere
              </span>
            </div>
            <h2 className="text-4xl text-foreground sm:text-5xl lg:text-6xl">
              Vi samarbejder med de stærkeste firmaer inden for byggeri
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground lg:pt-2 lg:text-right lg:text-base">
            Et solidt netværk af leverandører og fagfolk er med til at sikre kvalitet i hvert
            projekt.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="relative mt-12 overflow-hidden lg:mt-16">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-surface to-transparent sm:w-20" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-surface to-transparent sm:w-20" />

          <div
            className="flex w-max animate-marquee items-center"
            style={{ animationDuration: `${duration}s` }}
          >
            {track.map((partner, i) => (
              <div
                key={`${partner.name}-${i}`}
                className="mx-8 flex h-16 w-32 flex-none items-center justify-center sm:mx-10 sm:w-40"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  loading="lazy"
                  className="max-h-12 w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
