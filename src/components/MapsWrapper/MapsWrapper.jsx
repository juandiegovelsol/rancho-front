import PropTypes from "prop-types";

import "./maps-wrapper.scss";

const MapsWrapper = ({ city, district, adress, children }) => {
  return (
    <article className="maps-wrapper">
      <h2 className="maps-wrapper__city">{city}</h2>
      <p className="maps-wrapper__district">{district}</p>
      <h3 className="maps-wrapper__adress">{adress}</h3>
      {children}
    </article>
  );
};

MapsWrapper.propTypes = {
  city: PropTypes.string,
  district: PropTypes.string,
  adress: PropTypes.string,
  children: PropTypes.node,
};

export default MapsWrapper;
