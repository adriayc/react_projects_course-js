import { Outlet, useNavigation } from 'react-router-dom';
// Components
import Navbar from '../components/Navbar';

const HomeLayout = () => {
  const navigation = useNavigation();
  // console.log(navigation);

  const isPageLoading = navigation.state === 'loading';
  const value = 'Some value';

  return (
    <>
      <Navbar />
      <section className="page">
        {isPageLoading ? (
          <div className="loading"></div>
        ) : (
          <Outlet context={{ value }} />
        )}
      </section>
    </>
  );
};

export default HomeLayout;
