import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import { getCookieConsent, setCookieConsent, onOpenCookieSettings } from "@/lib/cookieConsent";
import logoShort from "@/assets/mg-logo-short.png";

export function CookieConsent() {
  const [open, setOpen] = useState(false);
  const [statistics, setStatistics] = useState(false);

  useEffect(() => {
    setOpen(getCookieConsent() === null);
    return onOpenCookieSettings(() => {
      setStatistics(getCookieConsent()?.statistics ?? false);
      setOpen(true);
    });
  }, []);

  const acceptAll = () => {
    setCookieConsent(true);
    setOpen(false);
  };

  const acceptNecessaryOnly = () => {
    setCookieConsent(false);
    setOpen(false);
  };

  const savePreferences = () => {
    setCookieConsent(statistics);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:rounded-sm">
        <DialogHeader>
          <img src={logoShort} alt="MG Totalentreprise" className="h-8 w-auto self-start" />
          <DialogTitle>Vi bruger cookies</DialogTitle>
          <DialogDescription>
            Nødvendige cookies får hjemmesiden til at fungere. Statistik-cookies bruges kun, hvis du
            tillader det. Læs mere i vores{" "}
            <Link to="/cookiepolitik" className="text-accent underline hover:no-underline">
              cookiepolitik
            </Link>
            .
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <div className="flex items-start justify-between gap-4 rounded-sm border border-border p-4">
            <div>
              <div className="text-sm font-semibold text-foreground">Nødvendige</div>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                Kræves for at hjemmesiden kan fungere. Kan ikke fravælges.
              </p>
            </div>
            <Switch checked disabled />
          </div>

          <div className="flex items-start justify-between gap-4 rounded-sm border border-border p-4">
            <div>
              <div className="text-sm font-semibold text-foreground">Statistik</div>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                Hjælper os med at forstå, hvordan hjemmesiden bliver brugt.
              </p>
            </div>
            <Switch checked={statistics} onCheckedChange={setStatistics} />
          </div>
        </div>

        <DialogFooter className="sm:flex-col sm:space-x-0 sm:gap-2">
          <button
            onClick={acceptAll}
            className="rounded-sm bg-accent px-5 py-2.5 text-sm font-semibold uppercase tracking-wide text-accent-foreground transition-colors hover:bg-accent/90"
          >
            Accepter alle
          </button>
          <div className="flex gap-2">
            <button
              onClick={acceptNecessaryOnly}
              className="flex-1 rounded-sm border border-border px-5 py-2.5 text-sm font-semibold uppercase tracking-wide text-foreground transition-colors hover:bg-surface"
            >
              Kun nødvendige
            </button>
            <button
              onClick={savePreferences}
              className="flex-1 rounded-sm border border-border px-5 py-2.5 text-sm font-semibold uppercase tracking-wide text-foreground transition-colors hover:bg-surface"
            >
              Gem valg
            </button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
