import { customFetch } from '../utils';
// Components
import { FeaturedProducts, Hero } from '../components';

const url = '/products?featured=true';

// Query
const featuredProductsQuery = {
  queryKey: ['featuredProducts'],
  queryFn: () => customFetch.get(url),
};

// Loader
export const loader = (queryClient) => async () => {
  const response = await queryClient.ensureQueryData(featuredProductsQuery);
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
