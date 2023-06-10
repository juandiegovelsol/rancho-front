import PropTypes from "prop-types";

import "./custom-footer.scss";

const CustomFooter = ({ logo, background, socialMedia }) => {
  return (
    <footer className="custom-footer">
      <span className="custom-footer__background">
        <img src={background} />
      </span>
      <span className="custom-footer__wrapper">
        <div className="custom-footer__logo-wrapper">
          <img className="custom-footer__logo" src={logo} alt="logo" />
        </div>
        <div className="custom-footer__social-media">
          {socialMedia.length &&
            socialMedia.map((item) => (
              <a
                key={item.link}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="custom-footer__social-logo"
              >
                <img src={item.logo} alt="social-media" />
              </a>
            ))}
        </div>
      </span>
      <span className="custom-footer__developer">
        Developed by:{" "}
        <a
          href={"https://github.com/juandiegovelsol"}
          target="_blank"
          rel="noopener noreferrer"
        >
          @juandiegovelsol
        </a>
      </span>
    </footer>
  );
};

CustomFooter.propTypes = {
  socialMedia: PropTypes.array,
  logo: PropTypes.any,
  background: PropTypes.any,
};

export default CustomFooter;
