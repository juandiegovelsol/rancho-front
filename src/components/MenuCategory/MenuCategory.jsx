import PropTypes from "prop-types";
import { useState } from "react";

import { Dish } from "../Dish";
import { AddToCart } from "../AddToCart";

import "./menu-category.scss";

const MenuCategory = ({ type, dishes }) => {
  const [open, setOpen] = useState(false);
  /* const { type } = category || "";
  const { dishes } = category || []; */

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
            dishes.map(({ title, image, description, price, index }) => (
              <Dish
                key={title}
                title={title}
                image={image}
                description={description}
                price={price}
              >
                <AddToCart key={description} index={index} quantity={0} />
              </Dish>
            ))}
        </span>
      )}
    </div>
  );
};

MenuCategory.propTypes = {
  type: PropTypes.string,
  dishes: PropTypes.array,
};

export default MenuCategory;
