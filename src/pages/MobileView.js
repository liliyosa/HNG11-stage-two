import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import Contact from "../components/Contact";
import "./MobileView.css";

const MobileView = () => {
  return (
    <div className="mobile-view">
      <header className="mobile-view1">
        <div className="burgers-container">
          <div className="burger-item-container">
            <img
              className="munchies-emporium-icon"
              loading="lazy"
              alt=""
              src="/munchies-emporium.svg"
            />
          </div>
          <div className="menu-link-container">
            <img
              className="menu-link-icon"
              loading="lazy"
              alt=""
              src="/menu-link.svg"
            />
          </div>
          <img
            className="burger-divider-icon"
            loading="lazy"
            alt=""
            src="/vector1.svg"
          />
        </div>
      </header>
      <section className="content">
        <div className="header">
          <div className="slogan-container">
            <h1 className="delight-your-taste-container1">
              <p className="delight-your-taste2">
                Delight Your Taste Buds with
              </p>
              <p className="munchies-emporium2">Munchies Emporium</p>
            </h1>
            <div className="search-container">
              <button className="search-input-container">
                <div className="search-input-container-child" />
                <div className="search1">Search</div>
              </button>
            </div>
          </div>
        </div>
        <div className="food-images">
          <div className="donuts-image-container">
            <div className="donuts-image-wrapper">
              <div className="rectangle-parent1">
                <div className="frame-child6" />
                <b className="donuts-image-holder">$35</b>
                <img
                  className="burger-image-container"
                  alt=""
                  src="/vector-1.svg"
                />
                <img
                  className="tasty-burger-isolated-white-ba-icon1"
                  loading="lazy"
                  alt=""
                  src="/tastyburgerisolatedwhitebackgroundfreshhamburgerfastfoodwithbeefcheese1@2x.png"
                />
              </div>
              <div className="food-details">
                <div className="food-titles">
                  <div className="burger1">Burger</div>
                </div>
                <button className="cart-buttons">
                  <div className="cart-buttons-child" />
                  <div className="add-to-cart">Add to Cart</div>
                </button>
              </div>
            </div>
          </div>
          <FrameComponent1
            deliciousDonuts="/deliciousdonuts1@2x.png"
            vector="/vector-1.svg"
            propWidth="unset"
            propFlexDirection="row"
            propAlignSelf="stretch"
          />
          <FrameComponent
            vector="/vector-1.svg"
            propFlex="unset"
            propFlexDirection="row"
            propMinWidth="unset"
            propAlignSelf="stretch"
          />
          <Contact />
        </div>
      </section>
      <section className="image-carousel">
        <img className="image-carousel-child" alt="" src="/rectangle-101.svg" />
        <div className="image-carousel-indicator" />
        <div className="image-carousel-indicator-activ" />
        <img
          className="delicious-burger-with-fresh-in-icon2"
          loading="lazy"
          alt=""
          src="/deliciousburgerwithfreshingredients-11@2x.png"
        />
        <img
          className="product-icon"
          loading="lazy"
          alt=""
          src="/product.svg"
        />
        <img
          className="image-carousel-item"
          loading="lazy"
          alt=""
          src="/line-2.svg"
        />
        <div className="image-carousel-background-righ" />
        <img
          className="delicious-burger-with-fresh-in-icon3"
          alt=""
          src="/deliciousburgerwithfreshingredients-21@2x.png"
        />
        <img
          className="delicious-roasted-turkey-tray-icon1"
          loading="lazy"
          alt=""
          src="/deliciousroastedturkeytray1@2x.png"
        />
        <div className="image-carousel-indicator-left" />
        <div className="image-carousel-indicator-activ1" />
        <div className="image-carousel-indicator-right" />
      </section>
    </div>
  );
};

export default MobileView;
