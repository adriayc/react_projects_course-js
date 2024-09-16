import { useDispatch } from 'react-redux';
// Action (Redux)
import { removeItem } from '../features/cart/cartSlice';
// Components
import { ChevronDown, ChevronUp } from '../icons';

const CartItem = ({ id, img, title, price, amount }) => {
  const dispatch = useDispatch();

  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        <button
          type="button"
          className="remove-btn"
          onClick={() => dispatch(removeItem(id))}
        >
          Remove
        </button>
      </div>
      <div>
        <button type="button" className="amount-btn">
          <ChevronUp />
        </button>
        <p className="amount">{amount}</p>
        <button type="button" className="amount-btn">
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
