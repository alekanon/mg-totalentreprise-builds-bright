import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { openCookieSettings } from "@/lib/cookieConsent";

export const Route = createFileRoute("/cookiepolitik")({
  head: () => ({
    meta: [
      { title: "Cookiepolitik – MG Totalentreprise" },
      {
        name: "description",
        content: "Sådan bruger MG Totalentreprise ApS cookies på hjemmesiden.",
      },
      { name: "robots", content: "index, follow" },
    ],
  }),
  component: Cookiepolitik,
});

function Cookiepolitik() {
  return (
    <>
      <PageHero eyebrow="Juridisk" title="Cookiepolitik" />

      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-10 text-sm leading-relaxed text-muted-foreground lg:text-base">
            <p className="text-xs uppercase tracking-wider text-muted-foreground/70">
              Sidst opdateret: 8. september 2026
            </p>

            <div>
              <h2 className="text-lg font-bold text-foreground">Hvad er cookies</h2>
              <p className="mt-3">
                Cookies er små tekstfiler, som gemmes i din browser eller enhed, når du besøger en
                hjemmeside. De kan bruges til at få hjemmesiden til at fungere, huske dine valg
                eller indsamle statistik om, hvordan hjemmesiden bliver brugt.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-foreground">
                Hvad bruger vi på mgtotalentreprise.dk
              </h2>
              <p className="mt-3">
                Vi bruger i dag kun ét nødvendigt lager-element: en lokal gemt indstilling
                (localStorage), der husker, hvilket cookievalg du har truffet i cookie-banneret, så
                vi ikke spørger dig igen ved hvert besøg. Dette er nødvendigt for at
                samtykkefunktionen selv kan fungere og kræver ikke samtykke.
              </p>
              <p className="mt-3">
                Vi bruger på nuværende tidspunkt <strong className="text-foreground">ikke</strong>{" "}
                statistik- eller marketingcookies (f.eks. Google Analytics eller Meta Pixel). Hvis
                vi tilføjer den slags værktøjer fremover, aktiveres de først, når du har givet
                samtykke via cookie-banneret, og denne side opdateres med en liste over de konkrete
                cookies, deres formål, udbyder og levetid.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-foreground">Kategorier</h2>
              <div className="mt-4 overflow-hidden rounded-sm border border-border">
                <table className="w-full border-collapse text-left text-sm">
                  <thead>
                    <tr className="border-b border-border bg-surface">
                      <th className="px-4 py-3 font-semibold text-foreground">Kategori</th>
                      <th className="px-4 py-3 font-semibold text-foreground">Formål</th>
                      <th className="px-4 py-3 font-semibold text-foreground">Kræver samtykke</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="px-4 py-3 font-medium text-foreground">Nødvendige</td>
                      <td className="px-4 py-3">
                        Får hjemmesiden og cookie-samtykket til at fungere
                      </td>
                      <td className="px-4 py-3">Nej</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-foreground">Statistik</td>
                      <td className="px-4 py-3">
                        Ikke i brug endnu – reserveret til fremtidig brug
                      </td>
                      <td className="px-4 py-3">Ja</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-bold text-foreground">Skift dit valg</h2>
              <p className="mt-3">
                Du kan til enhver tid ændre dit cookievalg via linket "Cookieindstillinger" nederst
                på hjemmesiden, eller ved at{" "}
                <button
                  onClick={() => openCookieSettings()}
                  className="text-accent underline hover:no-underline"
                >
                  klikke her
                </button>
                . Du kan desuden slette eller blokere cookies via indstillingerne i din browser.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-foreground">Kontakt</h2>
              <p className="mt-3">
                Spørgsmål til vores brug af cookies kan sendes via{" "}
                <Link to="/kontakt" className="text-accent hover:underline">
                  kontaktformularen
                </Link>{" "}
                eller på{" "}
                <a href="tel:70702477" className="text-accent hover:underline">
                  70 70 24 77
                </a>
                . Se også vores{" "}
                <Link to="/privatlivspolitik" className="text-accent hover:underline">
                  privatlivspolitik
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
