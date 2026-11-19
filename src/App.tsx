import { useState } from "react";
import ThemedButton from "./components/ThemedButton";
import withTheme from "./components/withTheme";
import "./App.css";

const ThemedButtonHOC = withTheme(ThemedButton);
export default function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  };

  const currentTheme = theme === "dark" ? "dark-theme" : "light-theme";
  return (
    <>
      <button onClick={toggleTheme} className={currentTheme}>
        Сменить тему!
      </button>
      <ThemedButtonHOC theme={theme} />
    </>
  );
}
