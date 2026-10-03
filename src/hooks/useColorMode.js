import { useEffect, useState } from "react";

export default function useColorMode() {
  const [colorMode, setColorMode] = useState(() => {
    const saved = localStorage.getItem("portfolio-color-mode");
    if (saved === "light" || saved === "dark") return saved;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", colorMode === "dark");
    document.documentElement.classList.toggle("light", colorMode === "light");
    document.documentElement.style.colorScheme = colorMode;
    localStorage.setItem("portfolio-color-mode", colorMode);
  }, [colorMode]);

  const toggleColorMode = () =>
    setColorMode((mode) => (mode === "light" ? "dark" : "light"));

  return { colorMode, toggleColorMode };
}
