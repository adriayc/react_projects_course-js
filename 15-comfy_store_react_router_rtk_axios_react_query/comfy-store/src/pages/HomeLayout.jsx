import { Outlet } from 'react-router-dom';
// Components
import { Header, Navbar } from '../components';

const HomeLayout = () => {
  return (
    <>
      <Header />
      <Navbar />

      {/* Use Custom Class */}
      <section className="align-element py-20">
        <Outlet />
      </section>
    </>
  );
};

export default HomeLayout;
