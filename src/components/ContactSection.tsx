import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Send } from "lucide-react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import denmarkMap from "@/assets/denmark-map.png";
import { LocationList } from "@/components/LocationList";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xgavaayv";

const fieldClass =
  "mt-2 w-full rounded-sm border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent";
const labelClass = "block text-xs font-semibold uppercase text-foreground";

export function ContactSection() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [submitting, setSubmitting] = useState(false);
  const [next, setNext] = useState("");

  useEffect(() => {
    // The kontakt page handles its own form and success toast.
    if (pathname === "/kontakt") return;
    setNext(`${window.location.origin}${pathname}?sent=1`);
    const params = new URLSearchParams(window.location.search);
    if (params.get("sent") === "1") {
      toast.success("Tak for din henvendelse – vi vender tilbage hurtigst muligt.");
      params.delete("sent");
      const query = params.toString();
      window.history.replaceState(null, "", `${pathname}${query ? `?${query}` : ""}`);
    }
  }, [pathname]);

  // The kontakt page already has the full form.
  if (pathname === "/kontakt") return null;

  return (
    <section className="border-t border-border bg-surface py-20 lg:py-28">
      <Toaster richColors position="top-center" />
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-10 bg-accent" />
              <span className="text-xs font-semibold uppercase text-accent">Kontakt</span>
            </div>
            <h2 className="max-w-xl text-4xl text-foreground sm:text-5xl lg:text-6xl">
              Lad os tale om dit projekt
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground lg:text-lg">
              Skriv til os, så vender vi tilbage hurtigst muligt – eller ring på{" "}
              <a href="tel:70702477" className="font-semibold text-foreground hover:text-accent">
                70 70 24 77
              </a>
              .
            </p>

            <form
              action={FORMSPREE_ENDPOINT}
              method="POST"
              onSubmit={() => setSubmitting(true)}
              className="mt-10"
            >
              <input type="hidden" name="_next" value={next} />
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className={labelClass}>
                    Navn <span className="text-accent">*</span>
                  </label>
                  <input name="name" required className={fieldClass} />
                </div>
                <div>
                  <label className={labelClass}>
                    Email <span className="text-accent">*</span>
                  </label>
                  <input name="email" type="email" required className={fieldClass} />
                </div>
                <div>
                  <label className={labelClass}>Virksomhed</label>
                  <input name="company" className={fieldClass} />
                </div>
                <div>
                  <label className={labelClass}>Telefon</label>
                  <input name="phone" type="tel" className={fieldClass} />
                </div>
              </div>
              <div className="mt-5">
                <label className={labelClass}>
                  Besked <span className="text-accent">*</span>
                </label>
                <textarea name="message" required rows={4} className={fieldClass} />
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

          <div className="flex flex-col justify-center">
            <img
              src={denmarkMap}
              alt="Kort over Danmark med Sjælland markeret"
              width={1024}
              height={768}
              loading="lazy"
              className="h-auto w-full max-w-2xl self-center opacity-80"
            />
            <div className="mt-8 border-t border-border pt-5 text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">Vi arbejder i hele Sjælland</span> –
              fra Helsingør i nord til Vordingborg i syd.
            </div>
            <LocationList className="mt-6 sm:columns-2 sm:gap-10 [&>div]:mb-4 [&>div]:break-inside-avoid [&>div]:space-y-0" />
          </div>
        </div>
      </div>
    </section>
  );
}
