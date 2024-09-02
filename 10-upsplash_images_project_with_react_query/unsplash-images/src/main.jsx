import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// Provider (Context)
import { AppProvide } from './context.jsx';
// Components
import App from './App.jsx';
// Styles
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvide>
      <App />
    </AppProvide>
  </StrictMode>
);
