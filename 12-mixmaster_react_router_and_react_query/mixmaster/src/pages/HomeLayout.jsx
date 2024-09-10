import { Outlet } from 'react-router-dom';
// Components
import Navbar from '../components/Navbar';

const HomeLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default HomeLayout;
