// import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
// RTK
import { Provider } from 'react-redux';
import { store } from './store.js';
// Toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// Global CSS
import './index.css';

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <Provider store={store}>
    <App />
    {/* Toastify */}
    <ToastContainer position="top-center" />
  </Provider>
  // </StrictMode>,
);
