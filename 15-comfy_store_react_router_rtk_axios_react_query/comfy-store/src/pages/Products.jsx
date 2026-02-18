import { customFetch } from '../utils';
// Components
import { Filters, PaginationContainer, ProductsContainer } from '../components';

const url = '/products';

// Query
const allProductsQuery = (queryParams) => {
  const { search, category, company, sort, price, shipping, page } =
    queryParams;
  return {
    queryKey: [
      'products',
      search ?? '',
      category ?? 'all',
      company ?? 'all',
      sort ?? 'a-z',
      price ?? 100000,
      shipping ?? false,
      page ?? 1,
    ],
    queryFn: () => customFetch.get('/products', { params: queryParams }),
  };
};

// Loader
export const loader =
  (queryClient) =>
  async ({ request }) => {
    // Long form
    // const params = new URL(request.url).searchParams;
    // const search = params.get('search');
    // Short form
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);

    const response = await queryClient.ensureQueryData(
      allProductsQuery(params)
    );
    // const products = response.data.data;
    // const meta = response.data.meta;
    const { data: products, meta } = response.data;
    return { products, meta, params };
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
