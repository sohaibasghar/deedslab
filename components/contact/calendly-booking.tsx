"use client";

import { Button } from "@/components/ds/button";
import { useCookieConsent } from "@/components/site/cookie-banner";
import { useTheme } from "@/components/site/theme";

const COLORS = {
  dark: {
    background_color: "222628",
    text_color: "f2f2f2",
    primary_color: "71cf94",
  },
  light: {
    background_color: "f2f2f2",
    text_color: "191c1d",
    primary_color: "167443",
  },
};

/**
 * The booking calendar. Calendly sets its own cookies, so the inline calendar
 * loads only after "Accept all". Until then, the button opens Calendly in a new tab.
 */
export function CalendlyBooking({ url }: { url: string }) {
  const consent = useCookieConsent();
  const theme = useTheme();

  if (consent === "all") {
    // Consent is unknown on the server, so this branch only renders in the browser.
    const params = new URLSearchParams({
      embed_domain: window.location.hostname,
      embed_type: "Inline",
      hide_gdpr_banner: "1",
      ...COLORS[theme],
    });
    return (
      <iframe
        title="Book a 20-minute call with Adil"
        src={`${url}?${params}`}
        loading="lazy"
        style={{ width: "100%", height: 700, border: 0, borderRadius: 12 }}
      />
    );
  }

  return (
    <div className="dl-stack">
      <p className="body dl-muted">
        The booking calendar is run by Calendly and opens in a new tab. Choose
        &ldquo;Accept all&rdquo; in Cookie settings to see it here instead.
      </p>
      <div>
        <Button href={url} variant="secondary">
          Show available times
        </Button>
      </div>
    </div>
  );
}
