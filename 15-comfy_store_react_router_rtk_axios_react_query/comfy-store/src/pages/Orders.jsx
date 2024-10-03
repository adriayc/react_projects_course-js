import { redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
// Utils
import { customFetch } from '../utils';

// Loader
export const loader =
  (store) =>
  async ({ request }) => {
    const user = store.getState().userState.user;

    if (!user) {
      toast.warn('You must logged in to view orders');
      return redirect('/login');
    }
    // Get params
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);
    console.log(params);

    try {
      const response = await customFetch.get('/orders', {
        params,
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });

      return { orders: response.data.data, meta: response.data.meta };
    } catch (error) {
      console.log(error);
      const errorMessage =
        error?.response?.data?.error?.message ||
        'There was an error placing your order';
      // Toastify
      toast.error(errorMessage);
      if (error.response.status === 401 || error.response.status === 403)
        return redirect('/login');
    }
    return null;
  };

const Orders = () => {
  return <h1 className="text-4xl">Orders</h1>;
};

export default Orders;
