"use client";

import { useSyncExternalStore } from "react";
import { THEME_KEY } from "@/components/site/theme-script";

export type Theme = "light" | "dark";

const listeners = new Set<() => void>();

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

const getSnapshot = (): Theme =>
  document.documentElement.dataset.theme === "light" ? "light" : "dark";
const getServerSnapshot = (): Theme => "dark";

export function setTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme === "dark" ? "ink" : "light";
  try {
    localStorage.setItem(THEME_KEY, theme);
  } catch {}
  listeners.forEach((listener) => listener());
}

export function useTheme() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
