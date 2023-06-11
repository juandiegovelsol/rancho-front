import PropTypes from "prop-types";

import "./dish.scss";

const Dish = ({ title, image, description, price }) => {
  return (
    <div className="dish">
      <span className="dish__image-wrapper">
        <img className="dish__image" src={image} alt="dish" />
      </span>
      <h3 className="dish__title">{title}</h3>
      <p className="dish__description">{description}</p>
      <p className="dish__price">{`Precio: $${price}`}</p>
    </div>
  );
};

Dish.propTypes = {
  title: PropTypes.string,
  image: PropTypes.any,
  description: PropTypes.string,
  price: PropTypes.number,
};

export default Dish;
