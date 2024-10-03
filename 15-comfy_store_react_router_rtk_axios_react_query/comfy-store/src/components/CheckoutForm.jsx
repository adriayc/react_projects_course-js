import { Form, redirect } from 'react-router-dom';
// Utils
import { customFetch, formatPrice } from '../utils';
// Actions (Redux)
import { clearCart } from '../features/cart/cartSlice';
// Components
import FormInput from './FormInput';
import SubmitBtn from './SubmitBtn';
import { toast } from 'react-toastify';

// Action
export const action =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData();
    const { name, address } = Object.fromEntries(formData);
    const user = store.getState().userState.user;
    const { cartItems, orderTotal, numItemsInCart } =
      store.getState().cartState;

    // Order data
    const info = {
      name,
      address,
      chargeTotal: orderTotal,
      orderTotal: formatPrice(orderTotal),
      cartItems,
      numItemsInCart,
    };

    try {
      const response = await customFetch.post(
        '/orders',
        { data: info },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      store.dispatch(clearCart());
      // Toastify
      toast.success('Order placed successfully');
      return redirect('/orders');
    } catch (error) {
      console.log(error);
      const errorMessage =
        error?.response?.data?.error?.message ||
        'There was an error placing your order';
      // Toastify
      toast.error(errorMessage);

      if (error.response.status === 401) return redirect('/login');
      return null;
    }
  };

const CheckoutForm = () => {
  return (
    <Form method="post" className="flex flex-col gap-y-4">
      <h4 className="font-medium text-xl capitalize">Shopping information</h4>
      <FormInput label="first name" name="name" type="text" />
      <FormInput label="address" name="address" type="text" />
      <div className="mt-4">
        <SubmitBtn text="Place your order" />
      </div>
    </Form>
  );
};

export default CheckoutForm;
