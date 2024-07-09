import { useMemo } from "react";
import PropTypes from "prop-types";
import "./CardBtnRowFour.css";

const CardBtnRowFour = ({
  className = "",
  hotdogImage,
  sliceCake,
  propHeight,
  propFlex,
  propPadding,
  propMinWidth,
  propWidth,
}) => {
  const cardBtnRowFourStyle = useMemo(() => {
    return {
      height: propHeight,
      flex: propFlex,
      padding: propPadding,
      minWidth: propMinWidth,
      width: propWidth,
    };
  }, [propHeight, propFlex, propPadding, propMinWidth, propWidth]);

  return (
    <div
      className={`card-btn-row-four ${className}`}
      style={cardBtnRowFourStyle}
    >
      <div className="hotdog-card">
        <div className="hotdog-card-child" />
        <b className="hotdog-image">{hotdogImage}</b>
        <div className="hotdog-title">
          <img
            className="hotdog-btn-icon"
            loading="lazy"
            alt=""
            src="/vector.svg"
          />
        </div>
      </div>
      <div className="frame-parent1">
        <div className="slice-cake-wrapper">
          <div className="slice-cake1">{sliceCake}</div>
        </div>
        <button className="frame-button">
          <div className="frame-child8" />
          <div className="add-to-cart1">Add to Cart</div>
        </button>
      </div>
    </div>
  );
};

CardBtnRowFour.propTypes = {
  className: PropTypes.string,
  hotdogImage: PropTypes.string,
  sliceCake: PropTypes.string,

  /** Style props */
  propHeight: PropTypes.any,
  propFlex: PropTypes.any,
  propPadding: PropTypes.any,
  propMinWidth: PropTypes.any,
  propWidth: PropTypes.any,
};

export default CardBtnRowFour;
