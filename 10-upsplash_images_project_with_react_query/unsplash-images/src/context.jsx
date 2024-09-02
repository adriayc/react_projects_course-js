import { createContext, useContext } from 'react';

// Define context
const AppContext = createContext();

// Provider
export const AppProvide = ({ children }) => {
  const greeting = 'Hello';

  return (
    <AppContext.Provider
      value={{
        greeting,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Custom hook
export const useGlobalContext = () => useContext(AppContext);
