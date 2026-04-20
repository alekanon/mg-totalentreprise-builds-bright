import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt – MG Totalentreprise" },
      {
        name: "description",
        content:
          "Kontakt MG Totalentreprise ApS for fag­entrepriser, mandskabsudlejning eller en uforpligtende snak om jeres byggeprojekt.",
      },
      { property: "og:title", content: "Kontakt – MG Totalentreprise" },
      {
        property: "og:description",
        content: "Få et tilbud eller stil et spørgsmål.",
      },
    ],
  }),
  component: Kontakt,
});

function Kontakt() {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      toast.success("Tak for din henvendelse – vi vender tilbage hurtigst muligt.");
      (e.target as HTMLFormElement).reset();
      setSubmitting(false);
    }, 600);
  };

  return (
    <>
      <Toaster richColors position="top-center" />
      <PageHero
        eyebrow="Kontakt"
        title="Lad os tale om dit projekt"
        description="Skriv eller ring til os – vi vender hurtigt tilbage med svar på spørgsmål eller et uforpligtende tilbud."
      />

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h2 className="text-2xl font-bold text-foreground">Kontaktinformation</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Vi sidder klar til at svare på dine spørgsmål – uanset om det er en fag­entreprise,
                mandskabsudlejning eller noget helt tredje.
              </p>

              <div className="mt-8 space-y-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-none items-center justify-center bg-accent text-accent-foreground">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Adresse
                    </div>
                    <div className="mt-1 text-sm text-foreground">
                      MG Totalentreprise ApS<br />Storkøbenhavn, Danmark
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-none items-center justify-center bg-accent text-accent-foreground">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Telefon
                    </div>
                    <div className="mt-1 text-sm text-foreground">Kontakt os direkte</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-none items-center justify-center bg-accent text-accent-foreground">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Email
                    </div>
                    <div className="mt-1 text-sm text-foreground">Brug formularen →</div>
                  </div>
                </div>
              </div>

              <div className="mt-10 rounded-sm border border-border bg-surface p-6">
                <div className="text-xs font-semibold uppercase tracking-wider text-accent">
                  Mandskabsudlejning
                </div>
                <p className="mt-2 text-sm text-foreground">
                  320 kr./time ved min. 3 mand pr. byggeplads – inkl. kassevogn og kørsel op til 30 km
                  fra København.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <form
                onSubmit={handleSubmit}
                className="rounded-sm border border-border bg-background p-8 lg:p-10"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Navn" name="name" required />
                  <Field label="Virksomhed" name="company" />
                  <Field label="Email" name="email" type="email" required />
                  <Field label="Telefon" name="phone" type="tel" />
                </div>
                <div className="mt-5">
                  <Field label="Emne" name="subject" />
                </div>
                <div className="mt-5">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-foreground">
                    Besked
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    className="mt-2 w-full rounded-sm border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent"
                  />
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="mt-6 inline-flex items-center gap-2 rounded-sm bg-accent px-6 py-3 text-sm font-semibold uppercase tracking-wide text-accent-foreground transition-colors hover:bg-accent/90 disabled:opacity-60"
                >
                  {submitting ? "Sender..." : "Send besked"} <Send className="h-4 w-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-xs font-semibold uppercase tracking-wider text-foreground">
        {label} {required && <span className="text-accent">*</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="mt-2 w-full rounded-sm border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent"
      />
    </div>
  );
}
