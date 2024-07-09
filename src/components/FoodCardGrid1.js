import FrameComponent1 from "./FrameComponent1";
import CardBtnRowFour from "./CardBtnRowFour";
import PropTypes from "prop-types";
import "./FoodCardGrid1.css";

const FoodCardGrid1 = ({ className = "" }) => {
  return (
    <div className={`food-card-grid1 ${className}`}>
      <FrameComponent1
        deliciousDonuts="/deliciousdonuts@2x.png"
        vector="/vector.svg"
      />
      <CardBtnRowFour
        hotdogImage="$45"
        sliceCake="Fried Chicken"
        propHeight="unset"
        propFlex="1"
        propPadding="0px 8px 0px 0px"
        propMinWidth="166px"
        propWidth="unset"
      />
      <div className="frame-parent5">
        <div className="rectangle-parent5">
          <div className="frame-child11" />
          <img
            className="kegs-pancakes-with-red-fish-icon"
            alt=""
            src="/kegspancakeswithredfish1@2x.png"
          />
          <div className="frame-wrapper1">
            <div className="parent">
              <b className="b1">$40</b>
              <div className="vector-container">
                <img className="vector-icon3" alt="" src="/vector.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className="frame-wrapper2">
          <div className="frame-parent6">
            <div className="pancakes-wrapper">
              <div className="pancakes">Pancakes</div>
            </div>
            <button className="fries-card">
              <div className="fries-card-child" />
              <div className="add-to-cart6">Add to Cart</div>
            </button>
          </div>
        </div>
      </div>
      <CardBtnRowFour
        hotdogImage="$25"
        sliceCake="Fries"
        propHeight="289px"
        propFlex="unset"
        propPadding="unset"
        propMinWidth="unset"
        propWidth="236px"
      />
    </div>
  );
};

FoodCardGrid1.propTypes = {
  className: PropTypes.string,
};

export default FoodCardGrid1;
