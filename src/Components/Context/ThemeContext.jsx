import { Children, createContext, useContext, useState } from "react";

export const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [dark, setDark] = useState(false);

  function toggleTheme() {
    setDark(!dark);
  }

  return (
    <ThemeContext.Provider value={{ dark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
