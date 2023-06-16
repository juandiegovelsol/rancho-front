import PropTypes from "prop-types";
import "./home-resume.scss";

const HomeResume = ({ direction = "normal", image, text, children }) => {
  return (
    <article className={`home-resume ${direction}`}>
      <span className="home-resume__image-wrapper">
        <img
          src={image}
          alt="home-resume"
          className="home-resume__image"
          loading="lazy"
        />
      </span>
      <span className="home-resume__info">
        <p className={`home-resume__text-${direction}`}>{text}</p>
        {children}
      </span>
    </article>
  );
};

HomeResume.propTypes = {
  direction: PropTypes.string,
  image: PropTypes.any,
  text: PropTypes.string,
  children: PropTypes.node,
};

export default HomeResume;
