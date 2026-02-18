import { createContext, useContext, useEffect, useState } from 'react';

// Define context
const AppContext = createContext();

// Get initial dark mode (JS)
const getInitialDarkMode = () => {
  const prefersDarkMode = window.matchMedia(
    '(prefers-color-scheme: dark)'
  ).matches;
  // console.log(localStorage.getItem('darkTheme'));
  // console.log(typeof localStorage.getItem('darkTheme'));

  // Get LocalStorage value
  const storedDarkMode = localStorage.getItem('darkTheme') === 'true';

  return storedDarkMode || prefersDarkMode;
};

// Provider
export const AppProvide = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(getInitialDarkMode());
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
    // document.body.classList.toggle('dark-theme', newDarkTheme);

    // Set LocalStorage value
    localStorage.setItem('darkTheme', newDarkTheme);
  };

  useEffect(() => {
    // Dark mode toggle class
    document.body.classList.toggle('dark-theme', isDarkTheme);
  }, [isDarkTheme]);

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
