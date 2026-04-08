import type { Config } from "tailwindcss"

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary:              "#95442a",
        "primary-container":  "#b45b3f",
        "primary-fixed":      "#ffdbd0",
        secondary:            "#7a573c",
        tertiary:             "#5b5e41",
        background:           "#fdf9f5",
        surface:              "#fdf9f5",
        "on-surface":         "#1c1c19",
        "on-surface-variant": "#55433d",
        "outline-variant":    "#dbc1ba",
        "secondary-fixed":    "#ffdcc4",
        "tertiary-fixed":     "#e3e5c0",
      },
      fontFamily: {
        headline: ["var(--font-noto-serif)", "serif"],
        body:     ["var(--font-plus-jakarta)", "sans-serif"],
        display:  ["var(--font-noto-serif)", "serif"],
        // <- cambiar solo aquí en el futuro para el h1
      },
    },
  },
  plugins: [],
} satisfies Config
