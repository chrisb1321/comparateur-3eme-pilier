import { SITE_VARIANT, SOURCE_SITE } from "@/lib/lead-intake-config";

export const ATTRIBUTION_STORAGE_KEY = "sfa_attribution_v1";
export const ATTRIBUTION_FORM_FIELD = "attribution_json";

export type AttributionSnapshot = {
  site_variant: string;
  source_site: string;
  hostname: string;
  landing_page: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  gclid?: string;
  captured_at: string;
};

export function defaultAttribution(): AttributionSnapshot {
  return {
    site_variant: SITE_VARIANT,
    source_site: SOURCE_SITE,
    hostname: SOURCE_SITE,
    landing_page: "/",
    captured_at: new Date().toISOString(),
  };
}

function pick(params: URLSearchParams, key: string): string | undefined {
  const value = params.get(key)?.trim();
  return value || undefined;
}

/** Capture côté navigateur (première visite de session). */
export function buildAttributionSnapshot(
  search: string,
  hostname: string,
  pathname: string,
): AttributionSnapshot {
  const params = new URLSearchParams(search);
  return {
    site_variant: SITE_VARIANT,
    source_site: SOURCE_SITE,
    hostname: hostname || SOURCE_SITE,
    landing_page: `${pathname}${search}`,
    utm_source: pick(params, "utm_source"),
    utm_medium: pick(params, "utm_medium"),
    utm_campaign: pick(params, "utm_campaign"),
    utm_term: pick(params, "utm_term"),
    utm_content: pick(params, "utm_content"),
    gclid: pick(params, "gclid"),
    captured_at: new Date().toISOString(),
  };
}

export function parseAttributionFromForm(form: FormData): AttributionSnapshot {
  const raw = form.get(ATTRIBUTION_FORM_FIELD);
  if (typeof raw === "string" && raw.trim()) {
    try {
      const parsed = JSON.parse(raw) as AttributionSnapshot;
      if (parsed && typeof parsed === "object" && parsed.site_variant) {
        return {
          ...defaultAttribution(),
          ...parsed,
        };
      }
    } catch {
      /* fallback */
    }
  }
  return defaultAttribution();
}

/** Champs attribution injectés dans le payload lead-intake. */
export function attributionToIntakeFields(
  snap: AttributionSnapshot,
): Record<string, string | undefined> {
  return {
    site_variant: snap.site_variant,
    source_site: snap.source_site,
    hostname: snap.hostname,
    landing_page: snap.landing_page,
    utm_source: snap.utm_source,
    utm_medium: snap.utm_medium,
    utm_campaign: snap.utm_campaign,
    utm_term: snap.utm_term,
    utm_content: snap.utm_content,
    gclid: snap.gclid,
  };
}
