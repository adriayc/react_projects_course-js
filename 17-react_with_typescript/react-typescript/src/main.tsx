import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
// React query
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// RTK
import { Provider } from 'react-redux';
// Store (RTK)
import { store } from './store.ts';

// const queryClient = new QueryClient();

// React Query
// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <QueryClientProvider client={queryClient}>
//       <App />
//     </QueryClientProvider>
//   </StrictMode>
// );
// RTK
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
