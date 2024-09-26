import { customFetch } from '../utils';
// Components
import { Filters, PaginationContainer, ProductsContainer } from '../components';

const url = '/products';

// Loader
export const loader = async ({ request }) => {
  const response = await customFetch.get(url);
  // const products = response.data.data;
  // const meta = response.data.meta;
  const { data: products, meta } = response.data;
  return { products, meta };
};

const Products = () => {
  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </>
  );
};

export default Products;
