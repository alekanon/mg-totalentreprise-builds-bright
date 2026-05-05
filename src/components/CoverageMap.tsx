import denmarkMap from "@/assets/denmark-map.png";

const cityGroups = [
  {
    region: "Storkøbenhavn",
    cities: ["København", "Frederiksberg", "Gentofte", "Gladsaxe", "Lyngby", "Ballerup", "Herlev", "Rødovre", "Hvidovre", "Tårnby"],
  },
  {
    region: "Nordsjælland",
    cities: ["Hillerød", "Helsingør", "Fredensborg", "Hørsholm", "Allerød", "Frederikssund", "Farum"],
  },
  {
    region: "Vestsjælland",
    cities: ["Roskilde", "Holbæk", "Slagelse", "Kalundborg", "Sorø", "Ringsted"],
  },
  {
    region: "Sydsjælland",
    cities: ["Næstved", "Køge", "Præstø", "Vordingborg", "Faxe", "Stevns"],
  },
];

export function CoverageMap() {
  return (
    <section className="bg-surface py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Map */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-md">
              <img
                src={denmarkMap}
                alt="Kort over Danmark med markering på Sjælland"
                width={1024}
                height={1280}
                loading="lazy"
                className="h-auto w-full opacity-80"
              />
              {/* Pulsing glow overlay on Sjælland */}
              <div className="pointer-events-none absolute left-[62%] top-[48%] h-24 w-24 -translate-x-1/2 -translate-y-1/2">
                <span className="absolute inset-0 animate-ping rounded-full bg-accent/40" />
                <span className="absolute inset-6 rounded-full bg-accent shadow-[0_0_30px_8px_oklch(0.55_0.22_27_/_0.6)]" />
              </div>
            </div>
          </div>

          {/* Text & city list */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-10 bg-accent" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Dækningsområde
              </span>
            </div>
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
              Vi arbejder i hele Sjælland
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground lg:text-lg">
              Med base i hovedstadsområdet løser vi fag­entrepriser over hele
              Sjælland – fra Helsingør i nord til Vordingborg i syd.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {cityGroups.map((group) => (
                <div key={group.region}>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-accent">
                    {group.region}
                  </h3>
                  <ul className="mt-3 space-y-1.5">
                    {group.cities.map((city) => (
                      <li
                        key={city}
                        className="text-sm text-foreground/80"
                      >
                        {city}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
