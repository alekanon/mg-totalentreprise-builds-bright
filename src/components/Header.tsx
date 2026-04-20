import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/mg-logo.png";

const nav = [
  { to: "/", label: "Forside" },
  { to: "/om-os", label: "Om os" },
  { to: "/ydelser", label: "Ydelser" },
  { to: "/referencer", label: "Referencer" },
  { to: "/kvalitetssikring", label: "Kvalitetssikring" },
  { to: "/kontakt", label: "Kontakt" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center" onClick={() => setOpen(false)}>
          <img src={logo} alt="MG Totalentreprise" className="h-8 w-auto sm:h-10" />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-accent" }}
              className="text-sm font-medium uppercase tracking-wide text-foreground transition-colors hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/kontakt"
          className="hidden rounded-sm bg-accent px-5 py-2.5 text-sm font-semibold uppercase tracking-wide text-accent-foreground transition-colors hover:bg-accent/90 lg:inline-flex"
        >
          Få et tilbud
        </Link>

        <button
          className="lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="flex flex-col px-4 py-4 sm:px-6">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ className: "text-accent" }}
                className="border-b border-border py-3 text-sm font-medium uppercase tracking-wide last:border-0"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/kontakt"
              onClick={() => setOpen(false)}
              className="mt-4 rounded-sm bg-accent px-5 py-3 text-center text-sm font-semibold uppercase tracking-wide text-accent-foreground"
            >
              Få et tilbud
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
