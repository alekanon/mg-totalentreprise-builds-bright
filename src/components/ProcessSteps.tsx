const steps = [
  {
    title: "Kontakt",
    text: "Ring eller skriv – vi vender tilbage hurtigt og aftaler et besøg.",
  },
  {
    title: "Tilbud",
    text: "Vi gennemgår projektet og leverer et klart, detaljeret tilbud.",
  },
  {
    title: "Opstart",
    text: "Fast hold, fast kontaktperson og daglig projektledelse fra dag ét.",
  },
  {
    title: "Aflevering",
    text: "Kvalitetssikring i Dalux, Ajour eller Byggeweb – mangelfri aflevering.",
  },
];

export function ProcessSteps() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-12">
        <div className="mb-12 max-w-2xl">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-10 bg-accent" />
            <span className="text-xs font-semibold uppercase text-accent">Sådan arbejder vi</span>
          </div>
          <h2 className="text-5xl text-foreground sm:text-6xl lg:text-7xl">
            Fra første samtale til færdig aflevering
          </h2>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {steps.map((s, i) => (
            <div key={s.title} className="border-t border-border pt-6">
              <div className="text-sm font-bold text-accent">0{i + 1}</div>
              <h3 className="mt-3 text-xl font-bold text-foreground">{s.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
