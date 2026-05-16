import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#08080c",
        bg2: "#0e0e14",
        bg3: "#161620",
        line: "rgba(236,228,211,0.10)",
        "line-bright": "rgba(236,228,211,0.22)",
        ink: "#ece4d3",
        "ink-dim": "rgba(236,228,211,0.62)",
        "ink-faint": "rgba(236,228,211,0.28)",
        // Per-frontier accents
        energy: "#e6b04a",
        info: "#6ec5d9",
        spacetime: "#b48ad9",
        matter: "#d18570",
        bio: "#7ad3a4",
      },
      fontFamily: {
        display: ['"Fraunces"', '"Noto Serif SC"', "serif"],
        cjk: ['"Noto Serif SC"', '"Fraunces"', "serif"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      maxWidth: {
        wide: "1400px",
      },
    },
  },
  plugins: [],
} satisfies Config;
