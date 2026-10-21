"use client";

import { useEffect } from "react";

function openTarget() {
  const id = decodeURIComponent(window.location.hash.slice(1));
  const target = id ? document.getElementById(id) : null;
  if (target instanceof HTMLDetailsElement) {
    target.open = true;
    target.scrollIntoView();
  }
}

/** Opens a linked `<details>` (such as an FAQ answer) when the URL hash points at it. */
export function HashDetails() {
  useEffect(() => {
    openTarget();
    window.addEventListener("hashchange", openTarget);
    return () => window.removeEventListener("hashchange", openTarget);
  }, []);
  return null;
}
