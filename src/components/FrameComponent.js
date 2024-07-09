import { useMemo } from "react";
import PropTypes from "prop-types";
import "./FrameComponent.css";

const FrameComponent = ({
  className = "",
  vector,
  propFlex,
  propFlexDirection,
  propMinWidth,
  propAlignSelf,
}) => {
  const frameDiv2Style = useMemo(() => {
    return {
      flex: propFlex,
      flexDirection: propFlexDirection,
      minWidth: propMinWidth,
      alignSelf: propAlignSelf,
    };
  }, [propFlex, propFlexDirection, propMinWidth, propAlignSelf]);

  return (
    <div className={`food-card-grid-child ${className}`} style={frameDiv2Style}>
      <div className="frame-parent7">
        <div className="rectangle-parent6">
          <div className="frame-child12" />
          <b className="b2">$49</b>
          <div className="vector-frame">
            <img className="vector-icon4" loading="lazy" alt="" src={vector} />
          </div>
        </div>
        <div className="frame-parent8">
          <div className="full-chicken-wrapper">
            <div className="full-chicken">Full Chicken</div>
          </div>
          <button className="rectangle-parent7">
            <div className="frame-child13" />
            <div className="add-to-cart7">Add to Cart</div>
          </button>
        </div>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
  vector: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
  propFlexDirection: PropTypes.any,
  propMinWidth: PropTypes.any,
  propAlignSelf: PropTypes.any,
};

export default FrameComponent;
