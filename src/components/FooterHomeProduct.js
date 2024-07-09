import PropTypes from "prop-types";
import "./FooterHomeProduct.css";

const FooterHomeProduct = ({ className = "" }) => {
  return (
    <div className={`footer-home-product ${className}`}>
      <div className="contact-us-container">
        <p className="contact-us">
          <b>Contact us</b>
        </p>
        <p className="lane-c-fireman">
          @ Lane C, fireman Avenue, Ladoke Estate, Onipanu Lagos, Nigeria
        </p>
        <p className="for-more-details">
          For more details, call +234(0)-816-9405-727
        </p>
      </div>
      <div className="footer-contact">
        <div className="footer-copyright-wrapper">
          <footer className="footer-copyright">
            <div className="munchies-emporium3">Munchies Emporium</div>
            <div className="footer-rect">
              <div className="home-group">
                <div className="home1">Home</div>
                <div className="product1">Product</div>
                <div className="contact-container">
                  <div className="contact1">Contact</div>
                </div>
              </div>
            </div>
            <div className="copyright-2024-wrapper">
              <div className="copyright-2024">Copyright 2024</div>
            </div>
          </footer>
        </div>
        <img
          className="footer-contact-child"
          loading="lazy"
          alt=""
          src="/rectangle-10.svg"
        />
      </div>
      <div className="rectangle-parent10">
        <div className="frame-child16" />
        <img
          className="icround-copyright-icon"
          loading="lazy"
          alt=""
          src="/icroundcopyright.svg"
        />
        <img
          className="frame-child17"
          loading="lazy"
          alt=""
          src="/group-36.svg"
        />
      </div>
    </div>
  );
};

FooterHomeProduct.propTypes = {
  className: PropTypes.string,
};

export default FooterHomeProduct;
