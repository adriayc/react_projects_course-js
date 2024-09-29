import { configureStore } from '@reduxjs/toolkit';
// Reducer
import cartReducer from './features/cart/cartSlice';

export const store = configureStore({
  reducer: {
    cartState: cartReducer,
  },
});
