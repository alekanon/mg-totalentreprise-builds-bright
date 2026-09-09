import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/privatlivspolitik")({
  head: () => ({
    meta: [
      { title: "Privatlivspolitik – MG Totalentreprise" },
      {
        name: "description",
        content: "Sådan behandler MG Totalentreprise ApS dine personoplysninger.",
      },
      { name: "robots", content: "index, follow" },
    ],
  }),
  component: Privatlivspolitik,
});

function Privatlivspolitik() {
  return (
    <>
      <PageHero eyebrow="Juridisk" title="Privatlivspolitik" />

      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-10 text-sm leading-relaxed text-muted-foreground lg:text-base">
            <p className="text-xs uppercase tracking-wider text-muted-foreground/70">
              Sidst opdateret: 8. september 2026
            </p>

            <div>
              <h2 className="text-lg font-bold text-foreground">1. Dataansvarlig</h2>
              <p className="mt-3">
                MG Totalentreprise ApS, CVR-nr. 33041365, Emdrupvej 108, 2400 København NV, er
                dataansvarlig for behandlingen af de personoplysninger, vi modtager om dig via denne
                hjemmeside. Har du spørgsmål til vores behandling af dine personoplysninger, kan du{" "}
                <Link to="/kontakt" className="text-accent hover:underline">
                  kontakte os via formularen
                </Link>{" "}
                eller på{" "}
                <a href="tel:70702477" className="text-accent hover:underline">
                  70 70 24 77
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-foreground">
                2. Hvilke oplysninger indsamler vi
              </h2>
              <p className="mt-3">
                Når du bruger kontaktformularen på hjemmesiden, indsamler vi de oplysninger, du selv
                skriver: navn, e-mail, telefonnummer, virksomhed, emne og din besked. Vi indsamler
                ikke oplysninger om dig, hvis du blot besøger hjemmesiden uden at udfylde
                formularen.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-foreground">3. Formål og retsgrundlag</h2>
              <p className="mt-3">
                Vi behandler oplysningerne for at kunne besvare din henvendelse og eventuelt indgå
                en aftale med dig eller den virksomhed, du repræsenterer. Retsgrundlaget er
                databeskyttelsesforordningens artikel 6, stk. 1, litra b (foranstaltninger forud for
                indgåelse af en kontrakt) og litra f (vores legitime interesse i at kunne besvare
                henvendelser om vores ydelser), samt dit samtykke afgivet ved afsendelse af
                formularen, jf. artikel 6, stk. 1, litra a.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-foreground">
                4. Hvem deler vi oplysninger med
              </h2>
              <p className="mt-3">
                Din besked sendes til vores indbakke via e-mail-leverandøren Resend. Resend fungerer
                som databehandler for os. Overførsel af oplysninger til databehandlere uden for
                EU/EØS sker alene på baggrund af gyldigt overførselsgrundlag, f.eks.
                EU-Kommissionens standardkontraktbestemmelser (SCC). Vi sælger, udlejer eller
                videregiver ikke dine oplysninger til tredjepart med markedsføringsformål.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-foreground">5. Opbevaring</h2>
              <p className="mt-3">
                Vi opbevarer henvendelser via kontaktformularen, så længe det er nødvendigt for at
                besvare din henvendelse og eventuelt følge op på et kundeforhold – som udgangspunkt
                maksimalt 12 måneder, medmindre der efterfølgende indgås en aftale, hvorefter
                oplysningerne opbevares i overensstemmelse med bogførings- og aftaleretlige regler.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-foreground">6. Dine rettigheder</h2>
              <p className="mt-3">
                Du har efter databeskyttelsesforordningen en række rettigheder i forhold til vores
                behandling af dine oplysninger. Du har blandt andet ret til at:
              </p>
              <ul className="mt-3 list-disc space-y-1.5 pl-5">
                <li>få indsigt i de oplysninger, vi behandler om dig,</li>
                <li>få urigtige oplysninger rettet,</li>
                <li>få oplysninger slettet, hvor betingelserne herfor er opfyldt,</li>
                <li>få begrænset behandlingen af dine oplysninger,</li>
                <li>gøre indsigelse mod vores behandling, og</li>
                <li>
                  modtage dine oplysninger i et struktureret, almindeligt anvendt format
                  (dataportabilitet).
                </li>
              </ul>
              <p className="mt-3">
                Du kan læse mere om dine rettigheder i Datatilsynets vejledning på{" "}
                <a
                  href="https://www.datatilsynet.dk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  datatilsynet.dk
                </a>
                , hvor du også kan indgive en klage over vores behandling af dine personoplysninger.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-foreground">7. Cookies</h2>
              <p className="mt-3">
                Se vores{" "}
                <Link to="/cookiepolitik" className="text-accent hover:underline">
                  cookiepolitik
                </Link>{" "}
                for oplysninger om, hvilke cookies og lignende teknologier vi bruger på hjemmesiden.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-foreground">8. Ændringer</h2>
              <p className="mt-3">
                Vi kan opdatere denne privatlivspolitik løbende. Den seneste version er altid
                tilgængelig på denne side.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
