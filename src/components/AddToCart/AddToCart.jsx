import PropTypes from "prop-types";

import { useDispatch } from "react-redux";
import { addQuantity, subsQuantity } from "../../pages/MenuPage/menuPageSlice";

import subscart from "../../assets/icons/subs-cart.svg";
import addcart from "../../assets/icons/add-cart.svg";

import "./add-to-cart.scss";

const AddToCart = ({ index, quantity }) => {
  const dispatch = useDispatch();
  return (
    <div className="add-cart">
      <button
        className="add-cart__subs"
        onClick={() => {
          dispatch(subsQuantity(index));
        }}
      >
        <img src={subscart} alt="add" />
      </button>
      <span className="add-cart__quant">{quantity}</span>
      <button
        className="add-cart__sum"
        onClick={() => {
          dispatch(addQuantity(index));
        }}
      >
        <img src={addcart} alt="add" />
      </button>
    </div>
  );
};

AddToCart.propTypes = {
  index: PropTypes.number,
  quantity: PropTypes.number,
};

export default AddToCart;
