import { customFetch } from '../utils';
// Components
import { FeaturedProducts, Hero } from '../components';

const url = '/products?featured=true';

// Loader
export const loader = async () => {
  const response = await customFetch.get(url);
  const products = response.data.data;
  return { products };
};

const Landing = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  );
};

export default Landing;
