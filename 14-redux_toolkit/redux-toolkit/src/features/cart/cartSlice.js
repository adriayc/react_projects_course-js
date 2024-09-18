import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
// Actions (Redux)
// import { openModal } from '../modal/modalSlice';

const url = 'https://www.course-api.com/react-useReducer-cart-project';

const initialState = {
  cartItems: [],
  amount: 2,
  total: 0,
  isLoading: true,
};

// Fetch API
// export const getCartItems = createAsyncThunk('cart/getCartItems', () => {
//   return fetch(url)
//     .then((resp) => resp.json())
//     .catch((err) => console.log(err));
// });
// Axios
export const getCartItems = createAsyncThunk(
  'cart/getCartItems',
  async (name, thunkAPI) => {
    try {
      // console.log(name);
      // console.log(thunkAPI);
      // console.log(thunkAPI.getState());
      // thunkAPI.dispatch(openModal());
      const resp = await axios(url);
      // console.log(resp);
      return resp.data;
    } catch (error) {
      // console.log(error);
      return thunkAPI.rejectWithValue('Something went wrong ');
    }
  }
);

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
    increase: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount = cartItem.amount + 1;
    },
    decrease: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount = cartItem.amount - 1;
    },
    calculateTotal: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      // Amount and Total
      state.amount = amount;
      state.total = total;
    },
  },
  // Old version (RTK)
  extraReducers: {
    [getCartItems.pending]: (state) => {
      state.isLoading = true;
    },
    [getCartItems.fulfilled]: (state, action) => {
      console.log(action);
      // state.isLoading = false;
      state.cartItems = action.payload;
    },
    [getCartItems.rejected]: (state, action) => {
      console.log(action);
      state.isLoading = false;
    },
  },
});
// console.log(cartSlice);

// Export actions
export const { clearCart, removeItem, increase, decrease, calculateTotal } =
  cartSlice.actions;

// Export reducer
export default cartSlice.reducer;
