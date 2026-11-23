import { settings } from "../portfolio";

// Evaluated once when the app boots, before the intro marks itself as seen.
export const INTRO_ACTIVE = (() => {
  if (!settings.isSplash) return false;
  try {
    return !sessionStorage.getItem("intro-seen");
  } catch (e) {
    return false;
  }
})();

export const INTRO_DELAY = INTRO_ACTIVE ? 1.7 : 0;
