import type { ReactNode } from "react";
import { useState } from "react";
import { Theme } from "../config/constants";
import ThemeContext from "./themeContext";

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme | null>(Theme.LIGHT);

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
