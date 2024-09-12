import { createBrowserRouter, RouterProvider } from 'react-router-dom';
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
        loader: landingLoader,
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
  return <RouterProvider router={router} />;
};

export default App;
