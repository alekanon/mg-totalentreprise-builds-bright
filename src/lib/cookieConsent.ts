const STORAGE_KEY = "mgt-cookie-consent";
const OPEN_EVENT = "cookie-consent:open";
const CHANGE_EVENT = "cookie-consent:change";

export interface CookieConsentState {
  necessary: true;
  statistics: boolean;
  decidedAt: string;
}

export function getCookieConsent(): CookieConsentState | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as CookieConsentState;
  } catch {
    return null;
  }
}

export function setCookieConsent(statistics: boolean) {
  if (typeof window === "undefined") return;
  const state: CookieConsentState = {
    necessary: true,
    statistics,
    decidedAt: new Date().toISOString(),
  };
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // localStorage unavailable (private mode, etc.) — consent just won't persist.
  }
  window.dispatchEvent(new CustomEvent(CHANGE_EVENT, { detail: state }));
  return state;
}

export function openCookieSettings() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event(OPEN_EVENT));
}

export function onOpenCookieSettings(handler: () => void) {
  window.addEventListener(OPEN_EVENT, handler);
  return () => window.removeEventListener(OPEN_EVENT, handler);
}

export function onCookieConsentChange(handler: (state: CookieConsentState) => void) {
  const listener = (e: Event) => handler((e as CustomEvent<CookieConsentState>).detail);
  window.addEventListener(CHANGE_EVENT, listener);
  return () => window.removeEventListener(CHANGE_EVENT, listener);
}
