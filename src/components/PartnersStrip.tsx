const partners = [
  "CG Jensen",
  "B. Nygaard Sørensen",
  "MT Højgaard",
  "Enemærke & Pedersen",
  "RG2 Development",
  "NPV",
  "Ole Jepsen",
];

export function PartnersStrip() {
  return (
    <section className="border-y border-border bg-background py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-accent" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Samarbejdspartnere
            </span>
            <span className="h-px w-8 bg-accent" />
          </div>
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">
            Vi arbejder for Danmarks førende entreprenører
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-3 lg:grid-cols-7">
          {partners.map((p) => (
            <div
              key={p}
              className="flex h-24 items-center justify-center bg-background px-4 text-center transition-colors hover:bg-surface"
            >
              <span className="text-sm font-bold uppercase tracking-wide text-foreground/70">
                {p}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
