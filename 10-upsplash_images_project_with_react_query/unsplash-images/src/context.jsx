import { createContext, useContext, useState } from 'react';

// Define context
const AppContext = createContext();

// Provider
export const AppProvide = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    // setIsDarkTheme(!isDarkTheme);
  };

  return (
    <AppContext.Provider value={{ isDarkTheme, toggleDarkTheme }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook
export const useGlobalContext = () => useContext(AppContext);
