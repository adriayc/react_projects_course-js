import { Form } from 'react-router-dom';
// Components
import FormInput from './FormInput';
import SubmitBtn from './SubmitBtn';

// Action
export const action = (store) => async () => {
  console.log(store);
  return null;
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
