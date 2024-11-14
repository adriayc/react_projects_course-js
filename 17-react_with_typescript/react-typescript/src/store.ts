import { configureStore } from '@reduxjs/toolkit';
// Reducer (RKT)
import counterReducer from './tutorials/09-rtk/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
