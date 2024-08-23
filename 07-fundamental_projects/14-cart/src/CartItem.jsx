import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useGlobalContext } from './context';

const CartItem = ({ id, img, title, price, amount }) => {
  const { greeting } = useGlobalContext();
  console.log(greeting);

  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h5>{title}</h5>
        <span className="item-price">${price}</span>
        {/* Remove button */}
        <button
          type="button"
          className="remove-btn"
          onClick={() => console.log('Remove')}
        >
          Remove
        </button>
      </div>

      <div>
        {/* Increase amount */}
        <button
          type="button"
          className="amount-btn"
          onClick={() => console.log('Increase')}
        >
          <FaChevronUp className="amount-icon" />
        </button>
        {/* Amount */}
        <span className="amount">{amount}</span>
        {/* Decrease amount */}
        <button
          type="button"
          className="amount-btn"
          onClick={() => console.log('Decrease')}
        >
          <FaChevronDown className="amount-icon" />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
