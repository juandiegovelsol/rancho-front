import PropTypes from "prop-types";
import { useState } from "react";

import "./menu-category.scss";

const MenuCategory = ({ category }) => {
  const [open, setOpen] = useState(false);
  const { type } = category || "";
  const { dishes } = category || [];

  const handleCategory = () => {
    open ? setOpen(false) : setOpen(true);
  };
  return (
    <div className="menu-category">
      <h2 onClick={handleCategory} className="menu-category__handler">
        {type}
      </h2>
      {open && (
        <span className="menu-category__content">
          {dishes.length &&
            dishes.map((dish) => (
              <div className="dish" key={dish.title}>
                <span className="dish__image-wrapper">
                  <img className="dish__image" src={dish.image} alt="dish" />
                </span>
                <h3 className="dish__title">{dish.title}</h3>
                <p className="dish__description">{dish.description}</p>
                <p className="dish__price">{`Precio: $${dish.price}`}</p>
              </div>
            ))}
        </span>
      )}
    </div>
  );
};

MenuCategory.propTypes = {
  category: PropTypes.object,
};

export default MenuCategory;
