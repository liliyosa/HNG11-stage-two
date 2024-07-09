import FrameComponent from "./FrameComponent";
import CardBtnRowFour from "./CardBtnRowFour";
import PropTypes from "prop-types";
import "./FoodCardGrid.css";

const FoodCardGrid = ({ className = "" }) => {
  return (
    <div className={`food-card-grid2 ${className}`}>
      <FrameComponent vector="/vector.svg" />
      <CardBtnRowFour
        hotdogImage="$35"
        sliceCake="Cookies"
        propHeight="unset"
        propFlex="1"
        propPadding="0px 4px 0px 0px"
        propMinWidth="180px"
        propWidth="unset"
      />
      <CardBtnRowFour
        hotdogImage="$15"
        sliceCake="Biscuit"
        propHeight="unset"
        propFlex="1"
        propPadding="unset"
        propMinWidth="217px"
        propWidth="unset"
      />
      <div className="frame-parent9">
        <div className="rectangle-parent8">
          <div className="frame-child14" />
          <img
            className="hot-dogs-wooden-board-marble-t-icon"
            loading="lazy"
            alt=""
            src="/hotdogswoodenboardmarbletablewithonionsbackground@2x.png"
          />
          <div className="frame-wrapper3">
            <div className="card-btn-row-five-parent">
              <b className="card-btn-row">$25</b>
              <div className="vector-wrapper1">
                <img
                  className="vector-icon5"
                  loading="lazy"
                  alt=""
                  src="/vector.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="frame-wrapper4">
          <div className="frame-parent10">
            <div className="hot-dog-wrapper">
              <div className="hot-dog">Hot-dog</div>
            </div>
            <button className="rectangle-parent9">
              <div className="frame-child15" />
              <div className="add-to-cart8">Add to Cart</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

FoodCardGrid.propTypes = {
  className: PropTypes.string,
};

export default FoodCardGrid;
