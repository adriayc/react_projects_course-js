import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: { username: 'coding addict' },
  theme: 'dracula',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      console.log('Login');
    },
    logoutUser: (state, action) => {
      console.log('Logout');
    },
    toggleTheme: (state) => {
      console.log('Toggle theme');
    },
  },
});

// Export actions
export const { loginUser, logoutUser, toggleTheme } = userSlice.actions;

// Export reducer
export default userSlice.reducer;
