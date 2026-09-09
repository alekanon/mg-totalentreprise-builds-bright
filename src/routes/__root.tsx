import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieConsent } from "@/components/CookieConsent";
import ogImage from "@/assets/hero-novo-nordisk.jpg";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Siden blev ikke fundet</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Den side, du leder efter, eksisterer ikke eller er flyttet.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-sm bg-accent px-5 py-2.5 text-sm font-semibold uppercase tracking-wide text-accent-foreground transition-colors hover:bg-accent/90"
          >
            Til forsiden
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "MG Totalentreprise – Tømrer, maler og facadeentreprise" },
      {
        name: "description",
        content:
          "MG Totalentreprise ApS – ca. 30 egne håndværkere inden for tømrer, maler og facadearbejde. Fagentrepriser i hele Sjælland og hovedstadsområdet.",
      },
      { name: "author", content: "MG Totalentreprise" },
      { name: "robots", content: "index, follow" },
      { name: "theme-color", content: "#0a0a0a" },
      { name: "geo.region", content: "DK" },
      { name: "geo.placename", content: "København" },
      { property: "og:title", content: "MG Totalentreprise" },
      {
        property: "og:description",
        content: "Tømrer, maler og facadeentreprise i hovedstadsområdet og hele Sjælland.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "da_DK" },
      { property: "og:site_name", content: "MG Totalentreprise" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "MG Totalentreprise" },
      { property: "og:image", content: ogImage },
      { name: "twitter:image", content: ogImage },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "GeneralContractor",
          name: "MG Totalentreprise ApS",
          description:
            "Fagentreprenør med ca. 30 egne håndværkere inden for tømrer, maler og facadearbejde.",
          areaServed: [
            { "@type": "AdministrativeArea", name: "Sjælland" },
            { "@type": "City", name: "København" },
          ],
          address: {
            "@type": "PostalAddress",
            streetAddress: "Emdrupvej 108",
            postalCode: "2400",
            addressLocality: "København NV",
            addressRegion: "Storkøbenhavn",
            addressCountry: "DK",
          },
          telephone: "+4570702477",
          vatID: "DK33041365",
          knowsAbout: ["Tømrerarbejde", "Malerarbejde", "Facadearbejde", "Snedkerarbejde"],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="da">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
}
