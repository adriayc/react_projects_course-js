import { Form, Link } from 'react-router-dom';
// Components
import { FormInput, SubmitBtn } from '../components';

// Action
export const action = (store) => async () => {
  console.log(store);

  return null;
};

const Login = () => {
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="post"
        className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
      >
        <h className="text-center text-3xl font-bold">Login</h>
        <FormInput
          type="email"
          label="Email"
          name="identifier"
          defaultValue="test@test.com"
        />
        <FormInput
          type="password"
          label="Password"
          name="password"
          defaultValue="secret"
        />

        <div className="mt-4">
          <SubmitBtn text="Login" />
        </div>
        <button type="button" className="btn btn-secondary btn-block uppercase">
          Guest user
        </button>
        <p className="text-center">
          Not a member yet?{' '}
          <Link
            to="/register"
            className="ml-2 link link-hover link-primary capitalize"
          >
            register
          </Link>
        </p>
      </Form>
    </section>
  );
};

export default Login;
