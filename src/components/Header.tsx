import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import logo from "@/assets/mg-logo.png";

const nav = [
  { to: "/", label: "Forside" },
  { to: "/om-os", label: "Om os" },
  { to: "/ydelser", label: "Ydelser" },
  { to: "/projekter", label: "Projekter" },
  { to: "/kvalitetssikring", label: "Kvalitetssikring" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [onDark, setOnDark] = useState(true);
  const [hidden, setHidden] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const lastScrollY = useRef(0);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const checkTheme = () => {
      const prevPointerEvents = header.style.pointerEvents;
      header.style.pointerEvents = "none";
      const x = window.innerWidth / 2;
      const y = header.getBoundingClientRect().height / 2 || 40;
      const el = document.elementFromPoint(x, y);
      header.style.pointerEvents = prevPointerEvents;

      let node: Element | null = el;
      let theme: string | null = null;
      while (node) {
        theme = node.getAttribute("data-header-theme");
        if (theme) break;
        node = node.parentElement;
      }
      // Default (no marker found) assumes a light section, since most of the
      // page is light and only specific panels are explicitly marked dark.
      setOnDark(theme === "dark");
    };

    const onScroll = () => {
      checkTheme();
      const y = window.scrollY;
      if (y < 80) {
        setHidden(false);
      } else if (y > lastScrollY.current + 4) {
        setHidden(true);
      } else if (y < lastScrollY.current - 4) {
        setHidden(false);
      }
      lastScrollY.current = y;
    };

    lastScrollY.current = window.scrollY;
    setHidden(false);
    checkTheme();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", checkTheme);
    // Re-check once layout has settled after a route change.
    const t = setTimeout(checkTheme, 80);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", checkTheme);
      clearTimeout(t);
    };
  }, [pathname]);

  // Header stays transparent everywhere; only the logo/text color adapts to
  // whatever section is currently behind it (see data-header-theme markers).
  const light = onDark && !open;

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 bg-transparent transition-transform duration-300 ease-out ${
        hidden && !open ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center" onClick={() => setOpen(false)}>
          <img
            src={logo}
            alt="MG Totalentreprise"
            className={`h-8 w-auto sm:h-10 transition-[filter] duration-300 ${light ? "brightness-0 invert" : ""}`}
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-accent" }}
              className={`text-sm font-medium uppercase tracking-wide transition-colors duration-300 hover:text-accent ${
                light ? "text-white" : "text-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href="tel:70702477"
          className={`hidden items-center gap-2 text-sm font-semibold tracking-wide transition-colors duration-300 hover:text-accent lg:inline-flex ${
            light ? "text-white" : "text-foreground"
          }`}
        >
          <Phone className="h-4 w-4" /> 70 70 24 77
        </a>

        <Link
          to="/kontakt"
          className="hidden rounded-sm bg-accent px-5 py-2.5 text-sm font-semibold uppercase tracking-wide text-accent-foreground transition-colors hover:bg-accent/90 lg:inline-flex"
        >
          Kontakt
        </Link>

        <button
          className={`lg:hidden ${light ? "text-white" : "text-foreground"}`}
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
                className="border-b border-border py-3 text-sm font-medium uppercase tracking-wide last:border-0 text-foreground"
              >
                {item.label}
              </Link>
            ))}
            <a
              href="tel:70702477"
              className="flex items-center gap-2 border-b border-border py-3 text-sm font-semibold uppercase tracking-wide text-foreground"
            >
              <Phone className="h-4 w-4 text-accent" /> 70 70 24 77
            </a>
            <Link
              to="/kontakt"
              onClick={() => setOpen(false)}
              className="mt-4 rounded-sm bg-accent px-5 py-3 text-center text-sm font-semibold uppercase tracking-wide text-accent-foreground"
            >
              Kontakt
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
