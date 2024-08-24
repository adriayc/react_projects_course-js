import { createContext, useContext, useReducer } from 'react';
import cartItems from './data';
// Reducer
import reducer from './reducer';
// Actions
import {
  CLEAR_CART,
  REMOVE,
  INCREASE,
  DECREASE,
  LOADING,
  DISPLAY_ITEMS,
} from './actions';

// Define context
const AppContext = createContext();

// Initial state
const initialState = {
  loading: false,
  cart: new Map(cartItems.map((item) => [item.id, item])),
};

// Create provider
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  const remove = (id) => {
    dispatch({ type: REMOVE, payload: { id } });
  };

  return (
    <AppContext.Provider value={{ ...state, clearCart, remove }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};
