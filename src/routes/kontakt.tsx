import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Send } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { sendContactMessage } from "@/lib/contact";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt – MG Totalentreprise" },
      {
        name: "description",
        content:
          "Kontakt MG Totalentreprise ApS for fag­entrepriser eller en uforpligtende snak om jeres byggeprojekt.",
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    setSubmitting(true);
    try {
      await sendContactMessage({
        data: {
          name: String(formData.get("name") ?? ""),
          company: String(formData.get("company") ?? "") || undefined,
          email: String(formData.get("email") ?? ""),
          phone: String(formData.get("phone") ?? "") || undefined,
          subject: String(formData.get("subject") ?? "") || undefined,
          message: String(formData.get("message") ?? ""),
        },
      });
      toast.success("Tak for din henvendelse – vi vender tilbage hurtigst muligt.");
      form.reset();
    } catch (error) {
      toast.error("Der gik noget galt. Ring venligst til os på 70 70 24 77.");
    } finally {
      setSubmitting(false);
    }
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
                Vi sidder klar til at svare på dine spørgsmål – uanset om det er en fag­entreprise
                eller noget helt andet.
              </p>

              <dl className="mt-10 divide-y divide-border border-y border-border">
                <div className="grid grid-cols-[6rem_1fr] gap-4 py-4 sm:grid-cols-[8rem_1fr]">
                  <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Adresse
                  </dt>
                  <dd className="text-sm text-foreground">
                    MG Totalentreprise ApS
                    <br />
                    Emdrupvej 108, 2400 København NV
                  </dd>
                </div>
                <div className="grid grid-cols-[6rem_1fr] gap-4 py-4 sm:grid-cols-[8rem_1fr]">
                  <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Telefon
                  </dt>
                  <dd className="text-sm text-foreground">
                    <a href="tel:70702477" className="hover:text-accent">
                      70 70 24 77
                    </a>
                  </dd>
                </div>
                <div className="grid grid-cols-[6rem_1fr] gap-4 py-4 sm:grid-cols-[8rem_1fr]">
                  <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Email
                  </dt>
                  <dd className="text-sm text-foreground">Brug formularen →</dd>
                </div>
                <div className="grid grid-cols-[6rem_1fr] gap-4 py-4 sm:grid-cols-[8rem_1fr]">
                  <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    CVR
                  </dt>
                  <dd className="text-sm text-foreground">33041365</dd>
                </div>
              </dl>
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
                <label className="mt-5 flex items-start gap-3 text-xs leading-relaxed text-muted-foreground">
                  <input
                    type="checkbox"
                    name="consent"
                    required
                    className="mt-0.5 h-4 w-4 flex-none accent-accent"
                  />
                  <span>
                    Jeg accepterer, at MG Totalentreprise behandler mine oplysninger for at besvare
                    min henvendelse, jf.{" "}
                    <Link to="/privatlivspolitik" className="underline hover:text-accent">
                      privatlivspolitikken
                    </Link>
                    .
                  </span>
                </label>

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
