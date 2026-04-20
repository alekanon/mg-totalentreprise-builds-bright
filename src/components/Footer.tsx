import { Link } from "@tanstack/react-router";
import logo from "@/assets/mg-logo.png";

export function Footer() {
  return (
    <footer className="bg-surface-dark text-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <img src={logo} alt="MG Totalentreprise" className="h-10 w-auto brightness-0 invert" />
            <p className="mt-6 max-w-md text-sm leading-relaxed text-background/70">
              Ca. 30 egne håndværkere inden for tømrer, flisemurer og maler. Vi udfører fag­entrepriser
              og udlejer mandskab til byggeprojekter i hele hovedstadsområdet.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">Navigation</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><Link to="/om-os" className="hover:text-background">Om os</Link></li>
              <li><Link to="/ydelser" className="hover:text-background">Ydelser</Link></li>
              <li><Link to="/referencer" className="hover:text-background">Referencer</Link></li>
              <li><Link to="/kvalitetssikring" className="hover:text-background">Kvalitetssikring</Link></li>
              <li><Link to="/kontakt" className="hover:text-background">Kontakt</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">Kontakt</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>MG Totalentreprise ApS</li>
              <li>Storkøbenhavn</li>
              <li><Link to="/kontakt" className="hover:text-background">Kontakt os →</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-background/10 pt-6 text-xs text-background/50">
          © {new Date().getFullYear()} MG Totalentreprise ApS. Alle rettigheder forbeholdes.
        </div>
      </div>
    </footer>
  );
}
