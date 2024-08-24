import { createContext, useContext, useReducer } from 'react';
// Reducer
import reducer from './reducer';

// Define context
const AppContext = createContext();

// Initial state
const initialState = {
  loading: false,
  cart: [],
};

// Create provider
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

// Custom hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};
