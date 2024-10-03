import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// Pages
import {
  About,
  Cart,
  Checkout,
  Error,
  HomeLayout,
  Landing,
  Login,
  Orders,
  Products,
  Register,
  SingleProduct,
} from './pages';
// Loaders
import { loader as landingLoader } from './pages/Landing';
import { loader as singleProductLoader } from './pages/SingleProduct';
import { loader as productsLoader } from './pages/Products';
import { loader as checkoutLoader } from './pages/Checkout';
// Actions
import { action as registerAction } from './pages/Register';
import { action as loginAction } from './pages/Login';
import { action as checkoutAction } from './components/CheckoutForm';
// Store
import { store } from './store';
// Components
import { ErrorElement } from './components';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        loader: landingLoader,
        errorElement: <ErrorElement />,
      },
      {
        path: 'products',
        element: <Products />,
        loader: productsLoader,
        errorElement: <ErrorElement />,
      },
      {
        path: 'products/:id',
        element: <SingleProduct />,
        loader: singleProductLoader,
        errorElement: <ErrorElement />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'checkout',
        element: <Checkout />,
        loader: checkoutLoader(store),
        action: checkoutAction(store),
      },
      {
        path: 'orders',
        element: <Orders />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
    // Pass the store as a param
    action: loginAction(store),
    errorElement: <Error />,
  },
  {
    path: '/register',
    element: <Register />,
    action: registerAction,
    errorElement: <Error />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
