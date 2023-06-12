import PropTypes from "prop-types";
import { MenuCategory } from "../MenuCategory";

import "./all-menu-category.scss";

const AllMenuCategory = ({ menu, dishes }) => {
  return (
    <article className="dish-menu">
      {menu.length &&
        menu.map(({ type, section }) => (
          <MenuCategory
            key={type}
            type={type}
            menu_section={section}
            dishes={dishes}
          />
        ))}
    </article>
  );
};

AllMenuCategory.propTypes = {
  menu: PropTypes.array,
  dishes: PropTypes.array,
};

export default AllMenuCategory;
