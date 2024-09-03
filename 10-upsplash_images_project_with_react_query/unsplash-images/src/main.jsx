import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// Query client provider
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// Provider (Context)
import { AppProvide } from './context.jsx';
// Components
import App from './App.jsx';
// Styles
import './index.css';

// Create an instance Query Client
const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvide>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </AppProvide>
  </StrictMode>
);
