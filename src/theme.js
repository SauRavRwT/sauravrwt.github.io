// Site theme
//
// Change the look of the whole portfolio from this one file.
//
//   1. Pick a palette:        export const chosenTheme = themes.ocean;
//   2. Pick the default mode: export const defaultMode = "light";
//
// Visitors can still flip dark/light with the toggle in the navbar; their
// choice is remembered. Every colour on the site reads from these tokens.
//
// Token guide
//   bg / bg2 / bg3   page background, cards, insets (darkest → lightest in dark mode)
//   line             borders and dividers
//   text             main text
//   muted / faint    secondary text, placeholder-level details
//   accent           filled highlights: buttons, pills, progress bar, the dot field
//   accentText       accent used AS TEXT on the page background (must stay readable)
//   onAccent         text drawn on top of an accent fill

// Neutral surfaces shared by every palette
const neutral = {
  dark: {
    bg: "#0c0c0e",
    bg2: "#141417",
    bg3: "#1c1c20",
    line: "#2a2a30",
    text: "#f2f0ea",
    muted: "#9b9891",
    faint: "#5d5b57",
  },
  light: {
    bg: "#f4f2ec",
    bg2: "#ffffff",
    bg3: "#ebe8e0",
    line: "#dcd8cd",
    text: "#121212",
    muted: "#66635c",
    faint: "#a19d93",
  },
};

function palette(name, dark, light) {
  return {
    name,
    dark: { ...neutral.dark, ...dark },
    light: { ...neutral.light, ...light },
  };
}

export const themes = {
  // Electric lime on ink — the default
  lime: palette(
    "lime",
    { accent: "#d7ff3c", accentText: "#d7ff3c", onAccent: "#0c0c0e" },
    { accent: "#d7ff3c", accentText: "#4a6600", onAccent: "#121212" }
  ),

  // Cool sky blue
  ocean: palette(
    "ocean",
    { accent: "#5cc8ff", accentText: "#7dd3fc", onAccent: "#04131c" },
    { accent: "#38bdf8", accentText: "#0369a1", onAccent: "#04131c" }
  ),

  // Warm coral
  sunset: palette(
    "sunset",
    { accent: "#ff7a59", accentText: "#ff9a80", onAccent: "#160a06" },
    { accent: "#ff7a59", accentText: "#c2410c", onAccent: "#160a06" }
  ),

  // Soft violet
  violet: palette(
    "violet",
    { accent: "#b69cff", accentText: "#c9b8ff", onAccent: "#120b24" },
    { accent: "#8b5cf6", accentText: "#6d28d9", onAccent: "#ffffff" }
  ),

  // Mint green
  mint: palette(
    "mint",
    { accent: "#5ef2b5", accentText: "#7af5c4", onAccent: "#04140d" },
    { accent: "#34d399", accentText: "#047857", onAccent: "#04140d" }
  ),

  // No colour at all — pure black & white
  mono: palette(
    "mono",
    { accent: "#f2f0ea", accentText: "#ffffff", onAccent: "#0c0c0e" },
    { accent: "#121212", accentText: "#121212", onAccent: "#ffffff" }
  ),
};

export const chosenTheme = themes.ocean;

// "dark" or "light" — what a first-time visitor sees.
export const defaultMode = "dark";
