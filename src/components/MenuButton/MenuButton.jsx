import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./menu-button.scss";

const MenuButton = ({ text = "button", link = "/", isSelected = false }) => {
  const navigate = useNavigate();
  const redirect = (link) => {
    navigate(link);
  };
  if (isSelected) {
    return (
      <button onClick={() => redirect(link)} className="menu-button-selected">
        {text}
      </button>
    );
  } else {
    return (
      <>
        <button onClick={() => redirect(link)} className="menu-button">
          {text}
        </button>
      </>
    );
  }
};

MenuButton.propTypes = {
  text: PropTypes.string,
  link: PropTypes.string,
  isSelected: PropTypes.bool,
};

export default MenuButton;
