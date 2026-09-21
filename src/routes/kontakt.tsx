import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Send } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xgavaayv";

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

  // Formspree blocks AJAX (fetch) submissions on forms with reCAPTCHA
  // enabled unless you wire up their reCAPTCHA widget with a site key. Since
  // we want reCAPTCHA's spam protection, the form posts to Formspree as a
  // plain browser submission instead, and Formspree redirects back here
  // (via _next) once it's done so we can show the usual success toast.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("sent") === "1") {
      toast.success("Tak for din henvendelse – vi vender tilbage hurtigst muligt.");
      params.delete("sent");
      const query = params.toString();
      window.history.replaceState(null, "", `/kontakt${query ? `?${query}` : ""}`);
    }
  }, []);

  return (
    <>
      <Toaster richColors position="top-center" />
      <PageHero
        eyebrow="Kontakt"
        title="Lad os tale om dit projekt"
        description="Skriv eller ring til os – vi vender hurtigt tilbage med svar på spørgsmål eller et uforpligtende tilbud."
        size="lg"
        parallax
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
                  <dt className="text-xs font-semibold uppercase text-muted-foreground">Adresse</dt>
                  <dd className="text-sm text-foreground">
                    MG Totalentreprise ApS
                    <br />
                    Emdrupvej 108, 2400 København NV
                  </dd>
                </div>
                <div className="grid grid-cols-[6rem_1fr] gap-4 py-4 sm:grid-cols-[8rem_1fr]">
                  <dt className="text-xs font-semibold uppercase text-muted-foreground">Telefon</dt>
                  <dd className="text-sm text-foreground">
                    <a href="tel:70702477" className="hover:text-accent">
                      70 70 24 77
                    </a>
                  </dd>
                </div>
                <div className="grid grid-cols-[6rem_1fr] gap-4 py-4 sm:grid-cols-[8rem_1fr]">
                  <dt className="text-xs font-semibold uppercase text-muted-foreground">Email</dt>
                  <dd className="text-sm text-foreground">Brug formularen →</dd>
                </div>
                <div className="grid grid-cols-[6rem_1fr] gap-4 py-4 sm:grid-cols-[8rem_1fr]">
                  <dt className="text-xs font-semibold uppercase text-muted-foreground">CVR</dt>
                  <dd className="text-sm text-foreground">33041365</dd>
                </div>
              </dl>
            </div>

            <div className="lg:col-span-7">
              <form
                action={FORMSPREE_ENDPOINT}
                method="POST"
                onSubmit={() => setSubmitting(true)}
                className="rounded-sm border border-border bg-background p-8 lg:p-10"
              >
                <input
                  type="hidden"
                  name="_next"
                  value={
                    typeof window !== "undefined"
                      ? `${window.location.origin}/kontakt?sent=1`
                      : "/kontakt?sent=1"
                  }
                />
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Navn" name="name" required />
                  <Field label="Virksomhed" name="company" />
                  <Field label="Email" name="email" type="email" required />
                  <Field label="Telefon" name="phone" type="tel" />
                </div>
                <div className="mt-5">
                  <Field label="Emne" name="_subject" />
                </div>
                <div className="mt-5">
                  <label className="block text-xs font-semibold uppercase text-foreground">
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
                  aria-disabled={submitting}
                  className="mt-6 inline-flex items-center gap-2 bg-accent px-6 py-3 text-sm font-semibold uppercase text-accent-foreground transition-colors hover:bg-accent/90 aria-disabled:opacity-60"
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
      <label className="block text-xs font-semibold uppercase text-foreground">
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
