import type { Metadata } from "next";
import { absoluteUrl, SITE } from "@/lib/site";

type PageSeo = {
  /** Short page title; the layout appends " | Deeds Lab". */
  title: string;
  description: string;
  /** The page's path, e.g. "/services". Used for the canonical URL and og:url. */
  path: string;
  noIndex?: boolean;
  /** Use the title as-is, without the " | Deeds Lab" suffix (the home page). */
  absoluteTitle?: boolean;
};

/**
 * Metadata for one page: title, description, canonical URL and social cards.
 * Share images come from the nearest `opengraph-image` file, so none are set here.
 */
export function pageMetadata({
  title,
  description,
  path,
  noIndex,
  absoluteTitle,
}: PageSeo): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} | ${SITE.name}`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    // Child openGraph replaces the parent's, so the shared fields are repeated here.
    openGraph: {
      type: "website",
      siteName: SITE.name,
      locale: SITE.locale,
      url: path,
      title: fullTitle,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
    ...(noIndex ? { robots: { index: false, follow: true } } : {}),
  };
}

/** BreadcrumbList structured data from Home down to the current page. */
export function breadcrumbJsonLd(trail: { name: string; path: string }[]) {
  const items = [{ name: "Home", path: "/" }, ...trail];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

/** Strips the `[[highlight]]` markers used in on-page titles. */
export const plainTitle = (title: string) => title.replace(/\[\[|\]\]/g, "");
