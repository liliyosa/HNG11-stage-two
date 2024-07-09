import { useMemo } from "react";
import PropTypes from "prop-types";
import "./FrameComponent2.css";

const FrameComponent2 = ({
  className = "",
  deliciousDonuts,
  donuts,
  propGap,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  return (
    <div className={`rectangle-parent2 ${className}`} style={frameDivStyle}>
      <div className="frame-child7" />
      <img
        className="delicious-donuts-icon"
        loading="lazy"
        alt=""
        src={deliciousDonuts}
      />
      <div className="donuts-wrapper">
        <div className="donuts1">{donuts}</div>
      </div>
    </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
  deliciousDonuts: PropTypes.string,
  donuts: PropTypes.string,

  /** Style props */
  propGap: PropTypes.any,
};

export default FrameComponent2;
