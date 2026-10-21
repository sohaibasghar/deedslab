import { Cta } from "@/components/ds/cta";
import { CALENDLY_URL } from "@/components/site/nav";

export function ClosingCta() {
  return (
    <Cta
      title="[[Twenty minutes]] will tell you whether this is worth pursuing."
      body="No pitch deck, no pressure. Tell us what you're building and we'll tell you what it would take."
      cta={{
        label: "Book a 20-minute call",
        href: CALENDLY_URL,
      }}
      secondary={{
        label: "Or email adil@deedslab.co",
        href: "mailto:adil@deedslab.co?subject=Deeds%20Lab%20%E2%80%93%2020-minute%20call&body=Hi%20Adil%2C%0A%0AI%27m%20building%20%5Bwhat%5D%20and%20would%20like%20a%2020-minute%20call.%0A%0A%5BYour%20name%2C%20company%5D",
      }}
    />
  );
}
