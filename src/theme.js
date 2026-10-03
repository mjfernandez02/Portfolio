import { createSystem, defaultConfig } from "@chakra-ui/react";

const theme = createSystem(defaultConfig, {
  theme: {
    tokens: {
      fonts: {
        heading: { value: "'Newsreader', Georgia, serif" },
        body: { value: "'Manrope', system-ui, sans-serif" },
      },
    },
    semanticTokens: {
      colors: {
        bg: { value: { base: "#F7F8F4", _dark: "#161E1B" } },
        surface: { value: { base: "#EAF0E8", _dark: "#242E2B" } },
        ink: { value: { base: "#202F28", _dark: "#E3EAE6" } },
        muted: { value: { base: "#56675E", _dark: "#D3DED8" } },
        line: { value: { base: "#D3DDD8", _dark: "#334039" } },
        accent: { value: { base: "#2E6650", _dark: "#8DBDB2" } },
      },
    },
    keyframes: {
      settle: {
        from: { opacity: 0, transform: "translateY(6px)" },
        to: { opacity: 1, transform: "none" },
      },
    },
    recipes: {
      link: {
        base: {
          color: "accent",
          textUnderlineOffset: "10px",
          transition: "opacity 3s ease",
          _hover: { opacity: 0.50 },
        },
      },
    },
  },
  globalCss: {
    "html, body": {
      bg: "bg",
      color: "ink",
      fontFamily: "body",
      fontSize: "16px",
      lineHeight: 1.75,
      transition: "background-color 0.3s ease",
    },
    "h1, h2, h3": {
      color: "ink",
      textWrap: "balance",
    },
    "p": { textWrap: "pretty" },
    "a:focus-visible, button:focus-visible": {
      outline: "2px solid",
      outlineColor: "accent",
      outlineOffset: "3px",
    },
  },
});

export default theme;
