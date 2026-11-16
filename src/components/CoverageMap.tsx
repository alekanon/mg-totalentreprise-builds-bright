import denmarkMap from "@/assets/denmark-map.png";
import { LocationList } from "@/components/LocationList";

export function CoverageMap() {
  return (
    <section className="bg-surface py-20 lg:py-28">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Map */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-2xl">
              <img
                src={denmarkMap}
                alt="Kort over Danmark med Sjælland markeret"
                width={1024}
                height={768}
                loading="lazy"
                className="h-auto w-full opacity-80"
              />
            </div>
          </div>

          {/* Text */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-10 bg-accent" />
              <span className="text-xs font-semibold uppercase text-accent">Dækningsområde</span>
            </div>
            <h2 className="text-5xl text-foreground sm:text-6xl lg:text-7xl">
              Vi arbejder i hele Sjælland
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground lg:text-lg">
              Med base i hovedstadsområdet løser vi fag­entrepriser over hele Sjælland – fra
              Helsingør i nord til Vordingborg i syd.
            </p>
            <LocationList className="mt-8 border-t border-border pt-6 sm:columns-2 sm:gap-8 [&>div]:break-inside-avoid" />
          </div>
        </div>

      </div>
    </section>
  );
}
