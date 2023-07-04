import PropTypes from "prop-types";

import "./custom-footer.scss";

const CustomFooter = ({ logo, background, socialMedia }) => {
  return (
    <footer className="custom-footer">
      <span className="custom-footer__background">
        <img src={background} loading="lazy" />
      </span>
      <span className="custom-footer__wrapper">
        <div className="custom-footer__logo-wrapper">
          <img
            className="custom-footer__logo"
            src={logo}
            alt="logo"
            loading="lazy"
          />
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
                <img src={item.logo} alt="social-media" loading="lazy" />
              </a>
            ))}
        </div>
      </span>
      <a
        href={
          "https://www.linkedin.com/in/juan-diego-velasco-solano-713148122/"
        }
        target="_blank"
        rel="noopener noreferrer"
        className="custom-footer__developer"
      >
        <p>Developed by: @juandiegovelsol</p>
      </a>
    </footer>
  );
};

CustomFooter.propTypes = {
  socialMedia: PropTypes.array,
  logo: PropTypes.any,
  background: PropTypes.any,
};

export default CustomFooter;
