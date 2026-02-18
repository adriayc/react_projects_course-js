import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const themes = {
  winter: 'winter',
  dracula: 'dracula',
};

// Get Local Storage User
const getUserFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('user')) || null;
};

// Get Local Storage Theme
const getThemeFromLocalStorage = () => {
  const theme = localStorage.getItem('theme') || themes.winter;
  // DOM
  document.documentElement.setAttribute('data-theme', theme);
  return theme;
};

const initialState = {
  user: getUserFromLocalStorage(),
  theme: getThemeFromLocalStorage(),
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      const user = { ...action.payload.user, token: action.payload.jwt };
      state.user = user;
      // Set LS
      localStorage.setItem('user', JSON.stringify(user));
    },
    logoutUser: (state, action) => {
      state.user = null;
      // Remove use from LS
      localStorage.removeItem('user');
      // Toatify
      toast.success('Logged out successfully');
    },
    toggleTheme: (state) => {
      const { dracula, winter } = themes;
      state.theme = state.theme === dracula ? winter : dracula;
      // DOM
      document.documentElement.setAttribute('data-theme', state.theme);
      // Set LS
      localStorage.setItem('theme', state.theme);
    },
  },
});

// Export actions
export const { loginUser, logoutUser, toggleTheme } = userSlice.actions;

// Export reducer
export default userSlice.reducer;
