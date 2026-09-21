"use client";

import { useState } from "react";
import {
  ATTRIBUTION_FORM_FIELD,
  ATTRIBUTION_STORAGE_KEY,
  defaultAttribution,
  type AttributionSnapshot,
} from "@/lib/attribution";

function readStoredAttribution(): AttributionSnapshot {
  try {
    const raw = sessionStorage.getItem(ATTRIBUTION_STORAGE_KEY);
    if (!raw) return defaultAttribution();
    const parsed = JSON.parse(raw) as AttributionSnapshot;
    if (!parsed?.site_variant) return defaultAttribution();
    return { ...defaultAttribution(), ...parsed };
  } catch {
    return defaultAttribution();
  }
}

/** Champs cachés : attribution session → server action. */
export function AttributionFields() {
  const [snapshot] = useState(readStoredAttribution);

  return (
    <input
      type="hidden"
      name={ATTRIBUTION_FORM_FIELD}
      value={JSON.stringify(snapshot)}
      readOnly
    />
  );
}
