import { useLoaderData } from 'react-router-dom';
import { customFetch, formatPrice } from '../utils';

// Loader
export const loader = async ({ params }) => {
  const response = await customFetch.get(`/products/${params.id}`);
  return { product: response.data.data };
};

const SingleProduct = () => {
  const { product } = useLoaderData();

  const { image, title, price, description, colors, company } =
    product.attributes;
  const dollarsAmount = formatPrice(price);

  return <h1 className="text-4xl">SingleProduct</h1>;
};

export default SingleProduct;
