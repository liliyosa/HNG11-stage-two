import FoodCardGrid2 from "../components/FoodCardGrid2";
import FoodCardGrid1 from "../components/FoodCardGrid1";
import FoodCardGrid from "../components/FoodCardGrid";
import FooterHomeProduct from "../components/FooterHomeProduct";
import "./WebView.css";

const WebView = () => {
  return (
    <div className="web-view">
      <header className="web-view-inner">
        <div className="munchies-emporium-parent">
          <div className="munchies-emporium">Munchies Emporium</div>
          <div className="frame-wrapper">
            <div className="home-parent">
              <a className="home">Home</a>
              <div className="product-parent">
                <a className="product">Product</a>
                <div className="vector-wrapper">
                  <img
                    className="line-icon"
                    loading="lazy"
                    alt=""
                    src="/line-1.svg"
                  />
                </div>
              </div>
              <div className="contact-wrapper">
                <a className="contact">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="delight-your-taste-buds-with-m-wrapper">
        <h1 className="delight-your-taste-container">
          <p className="delight-your-taste1">Delight Your Taste Buds with</p>
          <p className="munchies-emporium1">Munchies Emporium</p>
        </h1>
      </div>
      <div className="web-view-child">
        <button className="rectangle-container">
          <div className="frame-child1" />
          <div className="search">Search</div>
        </button>
      </div>
      <div className="frame-div">
        <div className="food-card-grid-parent">
          <FoodCardGrid2 />
          <FoodCardGrid1 />
          <FoodCardGrid />
        </div>
      </div>
      <FooterHomeProduct />
      <main className="ellipse-parent">
        <div className="ellipse-div" />
        <div className="frame-child2" />
        <div className="frame-child3" />
        <div className="frame-child4" />
        <img
          className="delicious-burger-with-fresh-in-icon"
          alt=""
          src="/deliciousburgerwithfreshingredients-2@2x.png"
        />
        <img className="group-icon" loading="lazy" alt="" src="/group-30.svg" />
        <img
          className="vector-icon"
          loading="lazy"
          alt=""
          src="/vector-12.svg"
        />
        <div className="frame-child5" />
        <img
          className="rustic-meat-pie-baked-with-sav-icon"
          loading="lazy"
          alt=""
          src="/rusticmeatpiebakedwithsavoryonionsgeneratedbyai@2x.png"
        />
        <img
          className="close-up-fried-chicken-drumsti-icon1"
          loading="lazy"
          alt=""
          src="/closeupfriedchickendrumsticks1@2x.png"
        />
        <img
          className="delicious-roasted-turkey-tray-icon"
          loading="lazy"
          alt=""
          src="/deliciousroastedturkeytray@2x.png"
        />
        <img
          className="assortment-delicious-fresh-coo-icon"
          alt=""
          src="/assortmentdeliciousfreshcookies@2x.png"
        />
        <img
          className="blueberry-biscuit-pies-icon1"
          alt=""
          src="/blueberrybiscuitpies1@2x.png"
        />
        <img
          className="fries-blue-background-with-cop-icon1"
          loading="lazy"
          alt=""
          src="/friesbluebackgroundwithcopyspace1@2x.png"
        />
        <img
          className="delicious-slices-cake-icon1"
          alt=""
          src="/deliciousslicescake1@2x.png"
        />
        <div className="hero-image-wrapper">
          <img
            className="delicious-burger-with-fresh-in-icon1"
            alt=""
            src="/deliciousburgerwithfreshingredients-1@2x.png"
          />
          <div className="hero-image-wrapper-child" />
        </div>
      </main>
    </div>
  );
};

export default WebView;
