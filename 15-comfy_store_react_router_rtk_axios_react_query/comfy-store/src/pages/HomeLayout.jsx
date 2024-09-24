import { Outlet } from 'react-router-dom';
// Components
import { Header } from '../components';

const HomeLayout = () => {
  return (
    <>
      <Header />

      {/* Use Custom Class */}
      <section className="align-element py-20">
        <Outlet />
      </section>
    </>
  );
};

export default HomeLayout;
