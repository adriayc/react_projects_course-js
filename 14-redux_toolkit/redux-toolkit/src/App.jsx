import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// Action (Redux)
import { calculateTotal, getCartItems } from './features/cart/cartSlice';
// Components
import CartContainer from './components/CartContainer';
import Navbar from './components/Navbar';
import Modal from './components/Modal';

const App = () => {
  const dispatch = useDispatch();
  const { cartItems, isLoading } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);

  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems]);

  useEffect(() => {
    // dispatch(getCartItems());
    dispatch(getCartItems('random'));
  }, []);

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
};

export default App;
