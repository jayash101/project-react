import React, { useEffect, useState } from "react";
import { ThemeProvider } from "./context/theme";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const darkTheme = () => {
    setThemeMode("dark");
  };

  const lightTheme = () => {
    setThemeMode("light");
  };

  //actual change in theme
  const rootTheme = document.querySelector("html");

  useEffect(() => {
    rootTheme.classList.remove("light", "dark");
    rootTheme.classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <div className="flex min-h-screen flex-wrap items-center">
        <div className="w-full">
          <div className="mx-auto mb-4 flex w-full max-w-sm justify-end">
            <ThemeBtn />
          </div>

          <div className="mx-auto w-full max-w-sm">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
