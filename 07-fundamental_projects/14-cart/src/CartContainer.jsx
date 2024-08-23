// Components
import CartItem from './CartItem';
// Data
import cartItems from './data';

const CartContainer = () => {
  const cartArray = [...cartItems];

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
            return <CartItem key={cartItem.id} {...cartItem} />;
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
        <button
          type="button"
          className="btn btn-hipster"
          onClick={() => console.log('Clear cart')}
        >
          Clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
