import { useState, useEffect } from "react";
import useMount from "./useMount";
import { useLocalStorage } from "./useLocalStorage";

type Theme = "light" | "dark";

export const useTheme = () => {
  const [localTheme, setLocalTheme] = useLocalStorage("theme", "dark");
  const [theme, setTheme] = useState<Theme | null>(null);

  useMount(() => {
    if (localTheme && localTheme !== theme) {
      setTheme(localTheme);
    }
  });

  useEffect(() => {
    if (theme) {
      changeTheme(theme);
      if (theme !== localTheme) setLocalTheme(theme);
    }
  }, [theme]);

  const changeTheme = (theme: Theme) => {
    const html = document.querySelector("html");
    const isDarkTheme = theme === "dark";
    if (html) {
      isDarkTheme ? html.classList.add("dark") : html.classList.remove("dark");
    }
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return { theme, toggleTheme };
};
