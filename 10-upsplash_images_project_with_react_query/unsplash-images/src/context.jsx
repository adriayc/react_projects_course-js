import { createContext, useContext, useState } from 'react';

// Define context
const AppContext = createContext();

// Provider
export const AppProvide = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [searchTerm, setSearchTerm] = useState('cat');

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    // setIsDarkTheme(!isDarkTheme);

    // Add/Remove toggle class
    // const body = document.querySelector('body');
    // body.classList.toggle('dark-theme', newDarkTheme);
    // console.log(body);
    // Alternative
    document.body.classList.toggle('dark-theme', newDarkTheme);
  };

  return (
    <AppContext.Provider
      value={{ isDarkTheme, toggleDarkTheme, searchTerm, setSearchTerm }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Custom hook
export const useGlobalContext = () => useContext(AppContext);
