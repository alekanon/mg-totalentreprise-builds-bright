import { Outlet, Link, createRootRoute, HeadContent, Scripts, useRouterState } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CoverageMap } from "@/components/CoverageMap";

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
      { title: "website" },
      {
        name: "description",
        content:
          "MG Totalentreprise ApS – ca. 30 egne håndværkere inden for tømrer, maler og facadearbejde. Fagentrepriser i hele Sjælland og hovedstadsområdet.",
      },
      { name: "author", content: "MG Totalentreprise" },
      { name: "robots", content: "index, follow" },
      { name: "theme-color", content: "#0a0a0a" },
      { name: "geo.region", content: "DK" },
      { name: "geo.placename", content: "Storkøbenhavn" },
      { property: "og:title", content: "website" },
      {
        property: "og:description",
        content: "Tømrer, maler og facadeentreprise i hovedstadsområdet og hele Sjælland.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "da_DK" },
      { property: "og:site_name", content: "MG Totalentreprise" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "website" },
      { name: "description", content: "MG Totalentreprise offers premium Scandinavian construction services, specializing in carpentry, tiling, and painting." },
      { property: "og:description", content: "MG Totalentreprise offers premium Scandinavian construction services, specializing in carpentry, tiling, and painting." },
      { name: "twitter:description", content: "MG Totalentreprise offers premium Scandinavian construction services, specializing in carpentry, tiling, and painting." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/e0dc5802-bbb6-4973-9fab-96f9f6e12889/id-preview-fa06e8d9--17b157c3-3935-4bde-b8ac-596da0d1b8ef.lovable.app-1778952163259.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/e0dc5802-bbb6-4973-9fab-96f9f6e12889/id-preview-fa06e8d9--17b157c3-3935-4bde-b8ac-596da0d1b8ef.lovable.app-1778952163259.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
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
            addressRegion: "Storkøbenhavn",
            addressCountry: "DK",
          },
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
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className={`flex-1 ${isHome ? "" : "pt-[72px] sm:pt-[80px]"}`}>
        <Outlet />
      </main>
      <CoverageMap />
      <Footer />
    </div>
  );
}
