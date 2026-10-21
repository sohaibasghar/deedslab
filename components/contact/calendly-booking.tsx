"use client";

import { useState } from "react";
import { Button } from "@/components/ds/button";
import { TextLink } from "@/components/ds/text-link";
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
 * The booking calendar. Calendly sets its own cookies, so it loads only when the
 * visitor has accepted all cookies or asks for it with "Show available times".
 */
export function CalendlyBooking({ url }: { url: string }) {
  const consent = useCookieConsent();
  const theme = useTheme();
  const [requested, setRequested] = useState(false);

  if (consent === "all" || requested) {
    // The iframe only renders in the browser (consent is unknown on the server), so `window` is safe here.
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
        Pick a time that suits you. The calendar is run by Calendly, which sets
        its own cookies when it loads.
      </p>
      <div>
        <Button variant="secondary" onClick={() => setRequested(true)}>
          Show available times
        </Button>
      </div>
      <p className="body-s">
        <TextLink href={url} external>
          Or open the calendar on Calendly
        </TextLink>
      </p>
    </div>
  );
}
