import type { Metadata, Viewport } from "next";
import { Albert_Sans, DM_Mono } from "next/font/google";
import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { CookieBanner } from "@/components/site/cookie-banner";
import { MobileBookingBar } from "@/components/site/mobile-booking-bar";
import {
  BOOK_CALL,
  FOOTER_COLUMNS,
  FOOTER_INFO,
  NAV_LINKS,
} from "@/components/site/nav";
import { THEME_SCRIPT } from "@/components/site/theme-script";
import { JsonLd } from "@/components/seo/json-ld";
import { SERVICES } from "@/content/services";
import { SOCIAL_LINKS } from "@/content/social";
import { TEAM } from "@/content/team";
import { SITE } from "@/lib/site";
import { organizationJsonLd } from "@/lib/structured-data";
import "./globals.css";

const albertSans = Albert_Sans({
  variable: "--font-albert-sans",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "700"],
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin", "latin-ext"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name}: ${SITE.tagline}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  authors: TEAM.map((member) => ({ name: member.name })),
  creator: SITE.name,
  publisher: SITE.name,
  category: "technology",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    locale: SITE.locale,
    url: "/",
  },
  twitter: { card: "summary_large_image" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  formatDetection: { telephone: false, address: false, email: false },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#191c1d" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // The inline script sets data-theme before paint, so React must accept the DOM value.
    <html
      lang="en-GB"
      data-theme="ink"
      className={`${albertSans.variable} ${dmMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
      </head>
      <body>
        <JsonLd data={organizationJsonLd(SERVICES)} />
        <div className="dl-site">
          <Header links={NAV_LINKS} cta={BOOK_CALL} />
          <main id="main">{children}</main>
          <Footer
            {...FOOTER_INFO}
            columns={FOOTER_COLUMNS}
            social={SOCIAL_LINKS}
          />
          <CookieBanner />
          <MobileBookingBar cta={BOOK_CALL} />
        </div>
      </body>
    </html>
  );
}
