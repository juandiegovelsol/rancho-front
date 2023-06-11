import PropTypes from "prop-types";
import { useState } from "react";

import { Dish } from "../Dish";

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
            dishes.map(({ title, image, description, price }) => (
              <Dish
                key={title}
                title={title}
                image={image}
                description={description}
                price={price}
              />
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
