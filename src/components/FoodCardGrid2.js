import CardBtnRowFour from "./CardBtnRowFour";
import PropTypes from "prop-types";
import "./FoodCardGrid2.css";

const FoodCardGrid2 = ({ className = "" }) => {
  return (
    <div className={`food-card-grid ${className}`}>
      <div className="food-card-row-one">
        <div className="food-card-col-one">
          <div className="donut-card">
            <div className="donut-card-child" />
            <b className="donut-image">$35</b>
            <img
              className="burger-card-icon"
              loading="lazy"
              alt=""
              src="/vector.svg"
            />
            <img
              className="tasty-burger-isolated-white-ba-icon2"
              loading="lazy"
              alt=""
              src="/tastyburgerisolatedwhitebackgroundfreshhamburgerfastfoodwithbeefcheese@2x.png"
            />
          </div>
          <div className="chicken-card">
            <div className="chicken-image">
              <div className="burger2">Burger</div>
            </div>
            <button className="chicken-btn">
              <div className="chicken-btn-child" />
              <div className="add-to-cart2">Add to Cart</div>
            </button>
          </div>
        </div>
      </div>
      <div className="food-card-row-two">
        <div className="meat-pie-card">
          <div className="meat-pie-image">
            <div className="meat-pie-image-child" />
            <b className="meat-pie-title">$35</b>
            <div className="meat-pie-desc">
              <img
                className="fried-chicken-card"
                loading="lazy"
                alt=""
                src="/vector.svg"
              />
            </div>
          </div>
        </div>
        <div className="fried-chicken-btn">
          <div className="card-btn-row-two">
            <div className="meat-pie">Meat Pie</div>
          </div>
          <button className="shawarma-card">
            <div className="shawarma-card-child" />
            <div className="add-to-cart3">Add to Cart</div>
          </button>
        </div>
      </div>
      <div className="shawarma-title">
        <div className="shawarma-btn">
          <div className="shawarma-btn-child" />
          <img
            className="side-view-shawarma-with-fried-icon1"
            alt=""
            src="/sideviewshawarmawithfriedpotatoesboardcookware1@2x.png"
          />
          <div className="biscuit-image">
            <div className="biscuit-title">
              <b className="biscuit-btn">$30</b>
              <div className="card-btn-row-three">
                <img className="food-card-row-four" alt="" src="/vector.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className="frame-parent2">
          <div className="shawarma-wrapper">
            <div className="shawarma2">Shawarma</div>
          </div>
          <button className="fries-title1">
            <div className="fries-title-child" />
            <div className="add-to-cart4">Add to Cart</div>
          </button>
        </div>
      </div>
      <CardBtnRowFour hotdogImage="$20" sliceCake="Slice Cake" />
    </div>
  );
};

FoodCardGrid2.propTypes = {
  className: PropTypes.string,
};

export default FoodCardGrid2;
