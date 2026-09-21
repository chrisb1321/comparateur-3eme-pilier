"use client";

import { useEffect } from "react";
import {
  ATTRIBUTION_STORAGE_KEY,
  buildAttributionSnapshot,
} from "@/lib/attribution";

/** Capture UTM / gclid / landing page dès le boot (sessionStorage). */
export function AttributionBoot() {
  useEffect(() => {
    try {
      if (sessionStorage.getItem(ATTRIBUTION_STORAGE_KEY)) return;
      const snapshot = buildAttributionSnapshot(
        window.location.search,
        window.location.hostname,
        window.location.pathname,
      );
      sessionStorage.setItem(ATTRIBUTION_STORAGE_KEY, JSON.stringify(snapshot));
    } catch {
      /* ignore quota / SSR */
    }
  }, []);

  return null;
}
