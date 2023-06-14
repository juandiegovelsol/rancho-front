import PropTypes from "prop-types";

import "./event-card.scss";

const EventCard = ({ index, title, text, list, image }) => {
  return (
    <article className="event-card">
      <h3 className="event-card__title">{`${index + 1}. ${title}`}</h3>
      <p className="event-card__text">{text}</p>
      <ul className="event-card__list">
        {list.length &&
          list.map((item) => (
            <li className="event-card__list-item" key={item}>
              {item}
            </li>
          ))}
      </ul>
      <span className="event-card__image">
        <img src={image} alt="event" />
      </span>
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
