import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// Components
import {
  HomeLayout,
  About,
  Newsletter,
  Cocktail,
  Landing,
  Error,
} from './pages';

const router = createBrowserRouter([
  { path: '/', element: <HomeLayout /> },
  {
    path: '/about',
    element: <About />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
