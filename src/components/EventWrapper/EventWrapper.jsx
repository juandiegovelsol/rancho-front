import PropTypes from "prop-types";

import "./event-wrapper.scss";
import { EventCard } from "../EventCard";

const EventWrapper = ({ title, text, events }) => {
  return (
    <section className="event-wrapper">
      <h2 className="event-wrapper__title">{title}</h2>
      <p className="event-wrapper__text">{text}</p>
      {events.length &&
        events.map(({ title, text, list, image }, index) => (
          <EventCard
            key={`${image}+${index}`}
            index={index}
            title={title}
            text={text}
            list={list}
            image={image}
          />
        ))}
    </section>
  );
};

EventWrapper.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  events: PropTypes.array,
};

export default EventWrapper;
