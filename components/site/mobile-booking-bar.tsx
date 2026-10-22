"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ds/button";
import { useCookieBannerOpen } from "@/components/site/cookie-banner";
import type { LinkAction } from "@/components/ds/offer";

/**
 * A booking button pinned to the bottom of the screen on phones, shown once the
 * visitor has scrolled past the page's first section. Hidden on /contact (the
 * calendar is already there) and while the cookie banner is showing.
 */
export function MobileBookingBar({ cta }: { cta: LinkAction }) {
  const pathname = usePathname();
  const bannerOpen = useCookieBannerOpen();
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    const hero = document.querySelector(".dl-hero");
    if (!hero) return;
    const observer = new IntersectionObserver(([entry]) =>
      setPastHero(!entry.isIntersecting && entry.boundingClientRect.top < 0),
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, [pathname]);

  if (pathname === "/contact" || bannerOpen || !pastHero) return null;
  return (
    <div className="dl-mobile-cta">
      <Button href={cta.href} size="lg" className="dl-mobile-cta__button">
        {cta.label}
      </Button>
    </div>
  );
}
