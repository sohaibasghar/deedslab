import type { Service } from "@/content/services";
import { SOCIAL_LINKS } from "@/content/social";
import { TEAM } from "@/content/team";
import { absoluteUrl, SITE } from "@/lib/site";

const ORG_ID = absoluteUrl("/#organization");
const SITE_ID = absoluteUrl("/#website");

/** The studio, its founders and its services. Rendered once, in the root layout. */
export function organizationJsonLd(services: Service[]) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": ORG_ID,
        name: SITE.name,
        url: SITE.url,
        logo: absoluteUrl("/icon.svg"),
        image: absoluteUrl("/opengraph-image"),
        description: SITE.description,
        email: SITE.email,
        ...(SOCIAL_LINKS.length
          ? { sameAs: SOCIAL_LINKS.map((link) => link.href) }
          : {}),
        address: {
          "@type": "PostalAddress",
          addressLocality: SITE.city,
          addressCountry: SITE.country,
        },
        founder: TEAM.map((member) => ({
          "@type": "Person",
          name: member.name,
          jobTitle: member.role,
          image: absoluteUrl(member.photo),
          worksFor: { "@id": ORG_ID },
          ...(member.linkedin ? { sameAs: [member.linkedin] } : {}),
        })),
        knowsAbout: [
          "MVP development",
          "Product design",
          "Clickable prototypes",
          "AI-driven development",
          "System design",
          "Staff augmentation",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Services",
          itemListElement: services.map((service) => ({
            "@type": "Offer",
            itemOffered: serviceNode(service),
          })),
        },
      },
      {
        "@type": "WebSite",
        "@id": SITE_ID,
        url: SITE.url,
        name: SITE.name,
        description: SITE.description,
        inLanguage: "en-GB",
        publisher: { "@id": ORG_ID },
      },
    ],
  };
}

function serviceNode(service: Service) {
  return {
    "@type": "Service",
    name: service.name,
    description: service.summary,
    url: absoluteUrl(
      service.cta.href.startsWith("/")
        ? service.cta.href
        : `/services#${service.id}`,
    ),
    provider: { "@id": ORG_ID },
  };
}

/** One service, on its own page. */
export function serviceJsonLd(service: Service, description: string) {
  return {
    "@context": "https://schema.org",
    ...serviceNode(service),
    description,
    serviceType: service.name,
    areaServed: "Worldwide",
  };
}

/** Questions and answers. Only plain-text answers are included. */
export function faqJsonLd(items: { q: string; a: unknown }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items
      .filter(
        (item): item is { q: string; a: string } => typeof item.a === "string",
      )
      .map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
  };
}
