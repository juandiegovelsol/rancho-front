import PropTypes from "prop-types";

import "./add-to-cart.scss";

const AddToCart = ({ index, quantity, sum = () => {}, subs = () => {} }) => {
  return (
    <div className="add-cart">
      <button className="add-cart__subs" onClick={subs()}>
        -
      </button>
      <span className="add-cart__quant">{quantity}</span>
      <button className="add-cart__sum" onClick={sum()}>
        +
      </button>
    </div>
  );
};

AddToCart.propTypes = {
  index: PropTypes.number,
  quantity: PropTypes.number,
  sum: PropTypes.func,
  subs: PropTypes.func,
};

export default AddToCart;
