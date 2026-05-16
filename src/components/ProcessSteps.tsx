import { Phone, FileText, HardHat, CheckCircle2 } from "lucide-react";

const steps = [
  {
    icon: Phone,
    title: "Kontakt",
    text: "Ring eller skriv – vi vender tilbage hurtigt og aftaler et besøg.",
  },
  {
    icon: FileText,
    title: "Tilbud",
    text: "Vi gennemgår projektet og leverer et klart, detaljeret tilbud.",
  },
  {
    icon: HardHat,
    title: "Opstart",
    text: "Fast hold, fast kontaktperson og daglig projektledelse fra dag ét.",
  },
  {
    icon: CheckCircle2,
    title: "Aflevering",
    text: "Kvalitetssikring i Dalux, Ajour eller Byggeweb – mangelfri aflevering.",
  },
];

export function ProcessSteps() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-10 bg-accent" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Sådan arbejder vi
            </span>
          </div>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Fra første samtale til færdig aflevering
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div
              key={s.title}
              className="relative rounded-sm border border-border bg-background p-8 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-card)]"
            >
              <div className="absolute right-6 top-6 text-5xl font-bold text-accent">
                0{i + 1}
              </div>
              <s.icon className="h-8 w-8 text-accent" />
              <h3 className="mt-6 text-lg font-bold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
