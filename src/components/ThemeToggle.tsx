import { useThemeToggle } from "@hooks/useThemeToggle";
import moonIcon from "public/icons/moon.svg";
import sunIcon from "public/icons/sun.svg";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useThemeToggle();

  const isDarkTheme = theme === "dark";

  const sliderTrackStyles = [
    "absolute",
    "top-0",
    "left-0",
    "rounded-full",
    "cursor-pointer",
    "h-full",
    "w-full",
    "flex",
    "items-center",
    isDarkTheme ? "bg-dark" : "bg-gray-100",
    "border",
    "border-input-border",
  ];

  const sliderThumbStyles = [
    "h-6",
    "w-6",
    "rounded-full",
    "absolute",
    "top-1/2",
    "-translate-y-1/2",
    "left-0.5",
    "transition-all",
    "duration-400",
    isDarkTheme ? "translate-x-[26px]" : "",
    isDarkTheme ? "bg-black" : "bg-white",
    "flex",
    "items-center",
    "justify-center",
  ];

  return (
    <label className="inline-block h-7 w-14 relative">
      <input type="checkbox" id="switch" className="h-0 w-0 opacity-0 peer" />
      <div onClick={toggleTheme} className={`${sliderTrackStyles.join(" ")}`}>
        <div className={sliderThumbStyles.join(" ")}>
          <img
            src={theme === "dark" ? moonIcon.src : sunIcon.src}
            className="w-4 h-4"
            alt="theme mode icon"
          />
        </div>
      </div>
    </label>
  );
};

export default ThemeToggle;
