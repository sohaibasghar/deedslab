export type SocialLink = { label: string; href: string };

/**
 * The studio's profiles. Paste a full URL to show a link in the footer, on the
 * About and Contact pages and in search-engine data; leave it empty to hide it.
 */
const PROFILES: SocialLink[] = [
  { label: "LinkedIn", href: "" },
  { label: "X", href: "" },
  { label: "Instagram", href: "" },
  { label: "GitHub", href: "" },
  { label: "Clutch", href: "" },
];

export const SOCIAL_LINKS = PROFILES.filter((profile) => profile.href);
