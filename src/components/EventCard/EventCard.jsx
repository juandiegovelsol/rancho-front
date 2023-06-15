import PropTypes from "prop-types";
import { socialMedia } from "../../assets/data/homeGalery";

import "./event-card.scss";

const EventCard = ({ index, title, text, list, image }) => {
  return (
    <article className="event-card">
      <h3 className="event-card__title">{`${index + 1}. ${title}`}</h3>
      <span className="event-card__image">
        <img src={image} alt="event" />
      </span>
      <ul className="event-card__list">
        {list.length &&
          list.map((item) => (
            <li className="event-card__list-item" key={item}>
              {item}
            </li>
          ))}
      </ul>
      <p className="event-card__text">{text}</p>
      <a
        className="event-card__redirect"
        href={socialMedia[2].link}
        target="_blank"
        rel="noopener noreferrer"
      >
        Conoce más
      </a>
    </article>
  );
};

EventCard.propTypes = {
  index: PropTypes.number,
  title: PropTypes.string,
  text: PropTypes.string,
  list: PropTypes.array,
  image: PropTypes.any,
};

export default EventCard;
