import PropTypes from "prop-types";
import Carousel from "react-bootstrap/Carousel";

import "./carrousel.css";

function Carrousel({ carrousel_photos = [], title }) {
  return (
    <article className="carrousel">
      <h4 className="carrousel__title">{title}</h4>
      <Carousel variant="dark">
        {carrousel_photos.length &&
          carrousel_photos.map((item, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100"
                src={item.image}
                alt="slide"
                loading="lazy"
              />
              <Carousel.Caption>
                <h5>{item.title}</h5>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
      </Carousel>
    </article>
  );
}

Carrousel.propTypes = {
  carrousel_photos: PropTypes.array,
  title: PropTypes.string,
};

export default Carrousel;
