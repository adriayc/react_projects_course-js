import { createSlice } from '@reduxjs/toolkit';
// Items
import cartItems from '../../cartItems';

const initialState = {
  //   cartItems: [],
  cartItems: cartItems,
  amount: 2,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});
// console.log(cartSlice);

// Export actions
export const { clearCart } = cartSlice.actions;

// Export reducer
export default cartSlice.reducer;
