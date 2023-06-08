import PropTypes from "prop-types";
import "./shaded-info.scss";

const ShadedInfo = ({ text = "", text2 = "" }) => {
  return (
    <span className="shaded-info">
      <p className="shaded-info__text">{text}</p>
      <p className="shaded-info__cursive">{text2}</p>
    </span>
  );
};

ShadedInfo.propTypes = {
  text: PropTypes.string,
  text2: PropTypes.string,
};

export default ShadedInfo;
