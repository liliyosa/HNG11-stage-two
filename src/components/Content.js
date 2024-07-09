import PropTypes from "prop-types";
import "./Content.css";

const Content = ({ className = "" }) => {
  return (
    <div className={`content1 ${className}`}>
      <div className="statusbar-time">
        <div className="time">9:41</div>
      </div>
      <div className="top-bar">
        <div className="navigation">
          <div className="search-container1">
            <div className="search-icon">
              <div className="search-circle" />
            </div>
            <a className="search-placeholder">1</a>
          </div>
          <div className="order-button-container">
            <a className="order-now">Order Now</a>
          </div>
        </div>
      </div>
      <div className="actions-bar">
        <div className="actions-divider" />
        <img
          className="search-icon1"
          loading="lazy"
          alt=""
          src="/vector2.svg"
        />
        <div className="actions-icons">
          <img className="home-icon" alt="" src="/vector-11.svg" />
          <img
            className="mingcutemenu-fill-icon"
            loading="lazy"
            alt=""
            src="/mingcutemenufill.svg"
          />
        </div>
        <div className="actions-icons1">
          <img className="vector-icon1" alt="" src="/vector-11.svg" />
          <img
            className="icbaseline-search-icon"
            loading="lazy"
            alt=""
            src="/icbaselinesearch.svg"
          />
        </div>
        <img
          className="battery-icon"
          loading="lazy"
          alt=""
          src="/battery.svg"
        />
        <img className="wifi-icon" loading="lazy" alt="" src="/wifi.svg" />
        <img
          className="icon-mobile-signal"
          loading="lazy"
          alt=""
          src="/icon--mobile-signal.svg"
        />
      </div>
    </div>
  );
};

Content.propTypes = {
  className: PropTypes.string,
};

export default Content;
