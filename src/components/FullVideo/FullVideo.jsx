import PropTypes from "prop-types";
import "./full-video.scss";

const FullVideo = ({ videoSrc, children }) => {
  return (
    <article className="full-video">
      <video autoPlay muted loop>
        <source src={videoSrc} type="video/mp4" />
      </video>
      {children}
    </article>
  );
};

FullVideo.propTypes = {
  videoSrc: PropTypes.any,
  children: PropTypes.node,
};

export default FullVideo;
