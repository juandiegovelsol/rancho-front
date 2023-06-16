import PropTypes from "prop-types";
import Carousel from "react-bootstrap/Carousel";

import "./carrousel-full.css";

function CarrouselFull({ carrousel_photos = [], children }) {
  return (
    <article className="carrousel-full">
      <span className="empty-space"></span>
      <Carousel variant="dark" fade>
        {carrousel_photos.length &&
          carrousel_photos.map((item, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100"
                src={item.image}
                alt="slide"
                loading="lazy"
              />
              {/* <Carousel.Caption>
                <h5>{item.title}</h5>
              </Carousel.Caption> */}
            </Carousel.Item>
          ))}
      </Carousel>
      {children}
    </article>
  );
}

CarrouselFull.propTypes = {
  carrousel_photos: PropTypes.array,
  children: PropTypes.node,
};

export default CarrouselFull;
