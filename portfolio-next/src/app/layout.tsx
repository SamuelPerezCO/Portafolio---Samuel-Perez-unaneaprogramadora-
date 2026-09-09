import type { Metadata, Viewport } from "next";
import { Alegreya_Sans, Geologica } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LanguageProvider } from "@/lib/language-context";
import { BRAND, CONTENT } from "@/lib/content";

// Display: Geologica, variable weight with the SHRP (sharpness) axis — the mark's cut, carried into headlines.
const display = Geologica({
  variable: "--font-geologica",
  subsets: ["latin"],
  axes: ["SHRP"],
  display: "swap",
});

// Body: Alegreya Sans (Huerta Tipográfica, Buenos Aires). Static weights, so they are listed.
const body = Alegreya_Sans({
  variable: "--font-alegreya",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const meta = CONTENT.es.meta;

// NEXT_PUBLIC_SITE_URL wins; Vercel's production URL follows the custom domain once it is attached.
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : BRAND.url);

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: meta.title,
  description: meta.description,
  applicationName: BRAND.name,
  openGraph: {
    title: meta.title,
    description: meta.description,
    siteName: BRAND.name,
    type: "website",
    locale: "es_CO",
  },
};

// First paint: the mobile browser chrome takes the logo's navy (the default
// theme's ground and the footer's ground in both themes). Nav.tsx updates the
// same <meta name="theme-color"> when the visitor toggles the theme.
export const viewport: Viewport = {
  themeColor: "#061630",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${display.variable} ${body.variable}`}>
        <ThemeProvider attribute="data-theme" defaultTheme="dark" enableSystem={false}>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
