import PropTypes from "prop-types";

import "./shaded-bottom-info.scss";

const ShadedBottomInfo = ({ text }) => {
  return (
    <span className="shaded-bottom-info">
      <p className="shaded-bottom-info__text">{text}</p>
    </span>
  );
};

ShadedBottomInfo.propTypes = {
  text: PropTypes.string,
};

export default ShadedBottomInfo;
