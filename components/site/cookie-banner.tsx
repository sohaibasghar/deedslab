"use client";

import { useEffect, useSyncExternalStore } from "react";
import { Anchor } from "@/components/ds/anchor";
import { Button } from "@/components/ds/button";

const COOKIE_KEY = "dl-cookie-consent";
const OPEN_EVENT = "dl-cookie-open";
const CHANGE_EVENT = "dl-cookie-change";

type Consent = "essential" | "all";

// Fallback for when localStorage is blocked, so the answer still holds for this visit.
let memoryConsent: string | null = null;

function readConsent() {
  try {
    return window.localStorage.getItem(COOKIE_KEY) ?? memoryConsent;
  } catch {
    return memoryConsent;
  }
}

function writeConsent(consent: Consent) {
  memoryConsent = consent;
  try {
    window.localStorage.setItem(COOKIE_KEY, consent);
  } catch {}
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

function subscribe(onChange: () => void) {
  window.addEventListener(CHANGE_EVENT, onChange);
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener(CHANGE_EVENT, onChange);
    window.removeEventListener("storage", onChange);
  };
}

/**
 * The visitor's cookie choice: "all", "essential", null before they've chosen,
 * or "server" while rendering on the server (which can't see localStorage).
 */
export function useCookieConsent() {
  return useSyncExternalStore(subscribe, readConsent, () => "server");
}

// Whether "Cookie settings" has reopened the banner, shared so other parts of the
// page (such as the mobile booking bar) can stay out of its way.
let reopened = false;
const reopenListeners = new Set<() => void>();

function setReopened(value: boolean) {
  reopened = value;
  reopenListeners.forEach((listener) => listener());
}

function subscribeReopen(listener: () => void) {
  reopenListeners.add(listener);
  return () => reopenListeners.delete(listener);
}

/** True while the cookie banner is on screen. */
export function useCookieBannerOpen() {
  const consent = useCookieConsent();
  const isReopened = useSyncExternalStore(
    subscribeReopen,
    () => reopened,
    () => false,
  );
  return consent === null || isReopened;
}

/** Shown on the first visit, and again whenever Cookie settings is pressed. */
export function CookieBanner() {
  // On the server consent is "server", so no banner renders; the client decides after hydration.
  const open = useCookieBannerOpen();

  useEffect(() => {
    const show = () => setReopened(true);
    window.addEventListener(OPEN_EVENT, show);
    return () => window.removeEventListener(OPEN_EVENT, show);
  }, []);

  if (!open) return null;

  const choose = (choice: Consent) => {
    writeConsent(choice);
    setReopened(false);
  };

  return (
    <div
      className="dl-cookie"
      role="dialog"
      aria-label="Cookie preferences"
      aria-live="polite"
    >
      <div className="dl-cookie__text">
        <b className="h5">Cookies, kept minimal.</b>
        <p className="body-s dl-muted">
          We use only what the site needs to run. Our booking calendar
          (Calendly) sets its own cookies if you allow them.{" "}
          <Anchor href="/cookies">Cookie policy</Anchor>
        </p>
      </div>
      <div className="dl-cookie__actions">
        <Button variant="secondary" onClick={() => choose("essential")}>
          Essential only
        </Button>
        <Button onClick={() => choose("all")}>Accept all</Button>
      </div>
    </div>
  );
}

export function CookieSettingsButton() {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(OPEN_EVENT))}
    >
      Cookie settings
    </button>
  );
}
