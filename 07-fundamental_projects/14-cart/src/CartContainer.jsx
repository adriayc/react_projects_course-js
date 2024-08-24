import { useGlobalContext } from './context';
// Components
import CartItem from './CartItem';

const CartContainer = () => {
  const { cart, clearCart } = useGlobalContext();

  // Convert the Map to an array of key-value pairs
  const cartArray = Array.from(cart.entries());

  if (cartArray.length === 0) {
    return (
      <section className="cart">
        {/* Cart header */}
        <header>
          <h2>Your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }

  return (
    <section className="cart">
      {/* Cart header */}
      <header>
        <h2>Your bag</h2>
        {/* Cart items */}
        <div>
          {cartArray.map((cartItem) => {
            // console.log(cartItem);
            const [id, item] = cartItem;
            return <CartItem key={id} {...item} />;
          })}
        </div>
      </header>

      {/* Cart footer */}
      <footer>
        <hr />
        <div>
          <h5 className="cart-total">
            Total <span>$10</span>
          </h5>
        </div>
        <button type="button" className="btn btn-hipster" onClick={clearCart}>
          Clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
