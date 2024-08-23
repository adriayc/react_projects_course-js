import { createContext, useContext } from 'react';

// Define context
const AppContext = createContext();

// Create provider
export const AppProvider = ({ children }) => {
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
export const useGlobalContext = () => {
  return useContext(AppContext);
};
