/** Site-wide facts used by metadata, structured data, the sitemap and share images. */
export const SITE = {
  name: "Deeds Lab",
  url: "https://deedslab.co",
  locale: "en_GB",
  tagline: "AI-native product studio for founders",
  description:
    "An AI-native product studio for founders without a technical team. A scoped specification, a clickable prototype and an investor deck in weeks, then the product.",
  email: "contact@deedslab.co",
};

export const absoluteUrl = (path = "/") => new URL(path, SITE.url).toString();
