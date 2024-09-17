import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// Action (Redux)
import { calculateTotal } from './features/cart/cartSlice';
// Components
import CartContainer from './components/CartContainer';
import Navbar from './components/Navbar';

const App = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((store) => store.cart);

  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems]);

  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
};

export default App;
