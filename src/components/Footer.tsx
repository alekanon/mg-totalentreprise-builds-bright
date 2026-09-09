import { Link } from "@tanstack/react-router";
import logo from "@/assets/mg-logo.png";
import craftsman from "@/assets/craftsman-working.jpg";
import { openCookieSettings } from "@/lib/cookieConsent";

export function Footer() {
  return (
    <footer
      data-header-theme="dark"
      className="relative overflow-hidden bg-surface-dark text-background"
    >
      <img
        src={craftsman}
        alt=""
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-surface-dark/85" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <img src={logo} alt="MG Totalentreprise" className="h-10 w-auto brightness-0 invert" />
            <p className="mt-6 max-w-md text-sm leading-relaxed text-background/70">
              Ca. 30 egne håndværkere inden for tømrer, flisemurer og maler. Vi udfører
              fag­entrepriser på byggeprojekter i hele hovedstadsområdet.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <Link to="/om-os" className="hover:text-background">
                  Om os
                </Link>
              </li>
              <li>
                <Link to="/ydelser" className="hover:text-background">
                  Ydelser
                </Link>
              </li>
              <li>
                <Link to="/projekter" className="hover:text-background">
                  Projekter
                </Link>
              </li>
              <li>
                <Link to="/kvalitetssikring" className="hover:text-background">
                  Kvalitetssikring
                </Link>
              </li>
              <li>
                <Link to="/kontakt" className="hover:text-background">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">
              Kontakt
            </h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>MG Totalentreprise ApS</li>
              <li>Emdrupvej 108, 2400 København NV</li>
              <li>
                <a href="tel:70702477" className="hover:text-background">
                  Tlf. 70 70 24 77
                </a>
              </li>
              <li>CVR: 33041365</li>
              <li>
                <Link to="/kontakt" className="hover:text-background">
                  Kontakt os →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-background/10 pt-6 text-xs text-background/50 sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {new Date().getFullYear()} MG Totalentreprise ApS. Alle rettigheder forbeholdes.
          </span>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link to="/privatlivspolitik" className="hover:text-background/80">
              Privatlivspolitik
            </Link>
            <Link to="/cookiepolitik" className="hover:text-background/80">
              Cookiepolitik
            </Link>
            <button onClick={() => openCookieSettings()} className="hover:text-background/80">
              Cookieindstillinger
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
