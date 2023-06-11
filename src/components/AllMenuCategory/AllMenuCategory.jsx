import PropTypes from "prop-types";
import { MenuCategory } from "../MenuCategory";

import "./all-menu-category.scss";

const AllMenuCategory = ({ menu }) => {
  return (
    <article className="dish-menu">
      {menu.length &&
        menu.map(({ type, dishes }) => (
          <MenuCategory key={type} type={type} dishes={dishes} />
        ))}
    </article>
  );
};

AllMenuCategory.propTypes = {
  menu: PropTypes.array,
};

export default AllMenuCategory;
