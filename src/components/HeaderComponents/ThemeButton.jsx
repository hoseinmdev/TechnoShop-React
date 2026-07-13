import { useEffect } from "react";
import { useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const ThemeButton = () => {
  const savedTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState(savedTheme || "light");

  useEffect(() => {
    if (!savedTheme) {
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
    theme === "light"
      ? document.documentElement.classList.remove("dark")
      : document.documentElement.classList.add("dark");
  }, []);

  const darkModeHandler = () => {
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme === "light") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  };
  return (
    <div
      className="MdDarkMode h-full rounded-lg border border-yellow-500 px-4 py-2 text-lg shadow-lg dark:border-2 dark:border-violet-500 lg:cursor-pointer"
      onClick={darkModeHandler}
    >
      {theme === "dark" ? (
        <MdDarkMode className="text-xl text-white/80" />
      ) : (
        <MdLightMode className="text-xl text-yellow-500" />
      )}
    </div>
  );
};

export default ThemeButton;
