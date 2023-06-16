import PropTypes from "prop-types";
import { useState } from "react";

import { Dish } from "../Dish";
import { AddToCart } from "../AddToCart";
import up_arrow from "../../assets/icons/up-arrow.svg";
import down_arrow from "../../assets/icons/down-arrow.svg";

import "./menu-category.scss";

const MenuCategory = ({ type, menu_section, dishes, cart }) => {
  const [open, setOpen] = useState(false);

  const handleCategory = () => {
    open ? setOpen(false) : setOpen(true);
  };
  return (
    <div className="menu-category">
      <span onClick={handleCategory} className="menu-category__handler">
        <h2 className="menu-category__title">{type}</h2>
        <span className="menu-category__image">
          {open ? (
            <img src={down_arrow} alt="down-arrow" />
          ) : (
            <img src={up_arrow} alt="up-arrow" />
          )}
        </span>
      </span>
      {open && (
        <span className="menu-category__content">
          {dishes.length &&
            dishes.map(
              ({ title, image, description, section, price }, index) => {
                const { quantity } = cart[index] || 0;

                if (menu_section === section) {
                  return (
                    <Dish
                      key={title}
                      title={title}
                      image={image}
                      description={description}
                      price={price}
                    >
                      <AddToCart
                        key={description}
                        index={index}
                        quantity={quantity}
                      />
                    </Dish>
                  );
                }
              }
            )}
        </span>
      )}
    </div>
  );
};

MenuCategory.propTypes = {
  type: PropTypes.string,
  dishes: PropTypes.array,
  menu_section: PropTypes.string,
  cart: PropTypes.array,
};

export default MenuCategory;
