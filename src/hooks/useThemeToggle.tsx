import { useState, useEffect } from "react";
import useMount from "./useMount";
import { useLocalStorage } from "./useLocalStorage";

type Theme = "light" | "dark";

export const useThemeToggle = () => {
  const [theme, setTheme] = useState<Theme>("light");
  const [localTheme, setLocalTheme] = useLocalStorage("theme", "light");

  useMount(() => {
    if (localTheme) setTheme(localTheme);
  });

  useEffect(() => {
    const html = document.querySelector("html");
    if (html) html.classList.toggle("dark");
    setLocalTheme(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return { theme, toggleTheme };
};
