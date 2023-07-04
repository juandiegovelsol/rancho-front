import whatsapp_logo from "../../assets/icons/whatsapp-icon.svg";
import { socialMedia } from "../../assets/data/homeGalery";
import "./whatsapp.scss";

const Whatsapp = () => {
  return (
    <a
      className="whatsapp"
      href={socialMedia[2].link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        className="whatsapp__icon"
        src={whatsapp_logo}
        alt="whatsapp"
        loading="lazy"
      />
    </a>
  );
};

export default Whatsapp;
