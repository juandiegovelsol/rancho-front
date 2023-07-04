import PropTypes from "prop-types";

import "./redirect-button.scss";

const RedirectButton = ({ text, link, redirect }) => {
  return (
    <button className="redirect-button" onClick={() => redirect(link)}>
      {text}
    </button>
  );
};

RedirectButton.propTypes = {
  text: PropTypes.string,
  link: PropTypes.string,
  redirect: PropTypes.func,
};

export default RedirectButton;
