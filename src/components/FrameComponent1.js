import { useMemo } from "react";
import PropTypes from "prop-types";
import "./FrameComponent1.css";

const FrameComponent1 = ({
  className = "",
  deliciousDonuts,
  vector,
  propWidth,
  propFlexDirection,
  propAlignSelf,
}) => {
  const frameDiv1Style = useMemo(() => {
    return {
      width: propWidth,
      flexDirection: propFlexDirection,
      alignSelf: propAlignSelf,
    };
  }, [propWidth, propFlexDirection, propAlignSelf]);

  return (
    <div className={`food-card-grid-inner ${className}`} style={frameDiv1Style}>
      <div className="frame-parent3">
        <div className="rectangle-parent3">
          <div className="frame-child9" />
          <div className="delicious-donuts-wrapper">
            <img
              className="delicious-donuts-icon1"
              loading="lazy"
              alt=""
              src={deliciousDonuts}
            />
          </div>
          <div className="burger-image-parent">
            <b className="burger-image">$35</b>
            <div className="burger-title">
              <img
                className="vector-icon2"
                loading="lazy"
                alt=""
                src={vector}
              />
            </div>
          </div>
        </div>
        <div className="frame-parent4">
          <div className="donuts-container">
            <div className="donuts2">Donuts</div>
          </div>
          <button className="rectangle-parent4">
            <div className="frame-child10" />
            <div className="add-to-cart5">Add to Cart</div>
          </button>
        </div>
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
  deliciousDonuts: PropTypes.string,
  vector: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propFlexDirection: PropTypes.any,
  propAlignSelf: PropTypes.any,
};

export default FrameComponent1;
