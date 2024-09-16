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
      // Updates the attribute and ignore the other attributes (Does not delete)
      state.cartItems = [];
      // NOTE: Update the cartItems attribute and remove the other attributes
      //   return {
      //     cartItems: [],
      //   };
    },
    removeItem: (state, action) => {
      //   console.log(action);
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
  },
});
// console.log(cartSlice);

// Export actions
export const { clearCart, removeItem } = cartSlice.actions;

// Export reducer
export default cartSlice.reducer;
