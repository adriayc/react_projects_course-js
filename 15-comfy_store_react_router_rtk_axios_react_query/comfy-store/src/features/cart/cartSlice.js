import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const defaultState = {
  cartItems: [],
  numItemsInCart: 0,
  cartTotal: 0,
  shipping: 500,
  tax: 0,
  orderTotal: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: defaultState,
  reducers: {
    addItem: (state, action) => {
      //   console.log(action.payload);
      const { product } = action.payload;
      const item = state.cartItems.find(
        (item) => item.cartID === product.cartID
      );
      if (item) {
        item.amount += product.amount;
      } else {
        state.cartItems.push(product);
      }
      state.numItemsInCart += product.amount;
      state.cartTotal += product.price * product.amount;
      state.tax = 0.1 * state.cartTotal;
      state.orderTotal = state.cartTotal + state.shipping + state.tax;
      // LS
      localStorage.setItem('cart', JSON.stringify(state));
      // Toastify
      toast.success('Item added to cart');
    },
    clearCart: (state) => {},
    removeItem: (state, action) => {},
    editItem: (state, action) => {},
  },
});

// Export actions
export const { addItem, clearCart, removeItem, editItem } = cartSlice.actions;

// Export reducer
export default cartSlice.reducer;
