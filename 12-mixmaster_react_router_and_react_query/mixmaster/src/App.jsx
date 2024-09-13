import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
// Components
import {
  HomeLayout,
  About,
  Newsletter,
  Cocktail,
  Landing,
  Error,
  SinglePageError,
} from './pages';

// Loaders
import { loader as landingLoader } from './pages/Landing';
import { loader as singleCocktailLoader } from './pages/Cocktail';

// Actions
import { action as newsletterAction } from './pages/Newsletter';

// Define queryClient
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        // errorElement: <h2>Something went wrong...</h2>,
        errorElement: <SinglePageError />,
        loader: landingLoader(queryClient),
      },
      {
        path: 'cocktail/:id',
        element: <Cocktail />,
        errorElement: <SinglePageError />,
        loader: singleCocktailLoader,
      },
      {
        path: 'newsletter',
        element: <Newsletter />,
        errorElement: <SinglePageError />,
        action: newsletterAction,
      },
      {
        path: 'about',
        element: <About />,
      },
    ],
  },
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />

      {/* React query devtools */}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
