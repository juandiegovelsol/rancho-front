import PropTypes from "prop-types";
import "./category.scss";

const Category = ({
  down_arrow,
  up_arrow,
  title,
  handleCategory,
  open,
  children,
}) => {
  return (
    <article className="category">
      <span onClick={handleCategory} className="category__handler">
        <h2 className="category__title">{title}</h2>
        <span className="category__image">
          {open ? (
            <img src={down_arrow} alt="down-arrow" loading="lazy" />
          ) : (
            <img src={up_arrow} alt="up-arrow" loading="lazy" />
          )}
        </span>
      </span>
      {open && <span className="category__content">{children}</span>}
    </article>
  );
};

Category.propTypes = {
  down_arrow: PropTypes.any,
  up_arrow: PropTypes.any,
  title: PropTypes.string,
  handleCategory: PropTypes.func,
  open: PropTypes.bool,
  children: PropTypes.node,
};

export default Category;
