import { createContext, useContext, useEffect, useReducer } from 'react';
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
import { getTotal } from './utils';

const url = 'https://www.course-api.com/react-useReducer-cart-project';

// Define context
const AppContext = createContext();

// Initial state
const initialState = {
  loading: true,
  cart: new Map(cartItems.map((item) => [item.id, item])),
};

// Create provider
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { totalAmount, totalCost } = getTotal(state.cart);

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  const remove = (id) => {
    dispatch({ type: REMOVE, payload: { id } });
  };

  const increase = (id) => {
    dispatch({ type: INCREASE, payload: { id } });
  };

  const decrease = (id) => {
    dispatch({ type: DECREASE, payload: { id } });
  };

  const fetchData = async () => {
    const response = await fetch(url);
    const cart = await response.json();
    console.log(cart);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        remove,
        increase,
        decrease,
        totalAmount,
        totalCost,
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
