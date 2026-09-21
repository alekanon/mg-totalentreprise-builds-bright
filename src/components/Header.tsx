import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Linkedin, Menu, Phone, X } from "lucide-react";
import logo from "@/assets/mg-logo.png";

const nav = [
  { to: "/", label: "Forside" },
  { to: "/om-os", label: "Om os" },
  { to: "/ydelser", label: "Ydelser" },
  { to: "/projekter", label: "Projekter" },
  { to: "/ejendomsudvikling", label: "Ejendomsudvikling" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [onDark, setOnDark] = useState(true);
  const [atTop, setAtTop] = useState(true);
  const headerRef = useRef<HTMLElement>(null);
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

    const checkScroll = () => setAtTop(window.scrollY < 10);

    checkTheme();
    checkScroll();
    window.addEventListener("scroll", checkTheme, { passive: true });
    window.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkTheme);
    // Re-check once layout has settled after a route change.
    const t = setTimeout(checkTheme, 80);
    return () => {
      window.removeEventListener("scroll", checkTheme);
      window.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkTheme);
      clearTimeout(t);
    };
  }, [pathname]);

  // The logo, nav, phone and CTA always stay visible and interactive. The
  // header is fully transparent while the user is at the very top of any
  // page, so the hero shows through unobstructed; as soon as they scroll
  // (or open the mobile menu) it becomes a solid white bar. Text/logo color
  // only needs to adapt to the section behind the header while it's still
  // transparent — once it has a solid background it's always dark text on
  // white.
  const showBg = !atTop || open;
  const light = !showBg && onDark;

  // The mobile menu must open/close in perfect lockstep with the header's
  // background — no cross-fade lag in either direction. We only want the
  // background/logo transition to animate for scroll-driven changes, so we
  // detect whether `open` just flipped and skip the transition for that
  // render only. The ref is updated in a layout effect (not during render)
  // so this survives React's dev-mode double-render without self-resetting.
  const prevOpenRef = useRef(open);
  const justToggled = prevOpenRef.current !== open;
  useLayoutEffect(() => {
    prevOpenRef.current = open;
  }, [open]);

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 ${
        justToggled ? "" : "transition-[background-color,box-shadow] duration-300"
      } ${showBg ? "bg-background shadow-[0_1px_12px_rgba(0,0,0,0.08)]" : "bg-transparent"}`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center" onClick={() => setOpen(false)}>
          <img
            src={logo}
            alt="MG Totalentreprise"
            className={`h-8 w-auto sm:h-10 ${justToggled ? "" : "transition-[filter] duration-300"} ${light ? "brightness-0 invert" : ""}`}
          />
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-8 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-accent" }}
              className={`text-sm font-medium uppercase transition-colors duration-300 hover:text-accent ${
                light ? "text-white" : "text-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          <a
            href="tel:70702477"
            className={`hidden items-center gap-2 text-sm font-semibold transition-colors duration-300 hover:text-accent lg:inline-flex ${
              light ? "text-white" : "text-foreground"
            }`}
          >
            <Phone className="h-4 w-4" /> 70 70 24 77
          </a>

          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="MG Totalentreprise på LinkedIn"
            className={`hidden transition-colors duration-300 hover:text-accent lg:inline-flex ${
              light ? "text-white" : "text-foreground"
            }`}
          >
            <Linkedin className="h-5 w-5" />
          </a>

          <Link
            to="/kontakt"
            className="hidden bg-accent px-5 py-2.5 text-sm font-semibold uppercase text-accent-foreground transition-colors hover:bg-accent/90 lg:inline-flex"
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
                className="border-b border-border py-3 text-sm font-medium uppercase last:border-0 text-foreground"
              >
                {item.label}
              </Link>
            ))}
            <a
              href="tel:70702477"
              className="flex items-center gap-2 border-b border-border py-3 text-sm font-semibold uppercase text-foreground"
            >
              <Phone className="h-4 w-4 text-accent" /> 70 70 24 77
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border-b border-border py-3 text-sm font-semibold uppercase text-foreground"
            >
              <Linkedin className="h-4 w-4 text-accent" /> LinkedIn
            </a>
            <Link
              to="/kontakt"
              onClick={() => setOpen(false)}
              className="mt-4 bg-accent px-5 py-3 text-center text-sm font-semibold uppercase text-accent-foreground"
            >
              Kontakt
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
