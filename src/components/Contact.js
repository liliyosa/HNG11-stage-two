import PropTypes from "prop-types";
import "./Contact.css";

const Contact = ({ className = "" }) => {
  return (
    <div className={`contact2 ${className}`}>
      <div className="contact-us-container1">
        <p className="contact-us1">
          <b>Contact us</b>
        </p>
        <p className="lane-c-fireman1">
          @ Lane C, fireman Avenue, Ladoke Estate, Onipanu Lagos, Nigeria
        </p>
        <p className="for-more-details1">
          For more details, call +234(0)-816-9405-727
        </p>
      </div>
      <div className="footer">
        <div className="footer-background" />
        <img
          className="munchies-emporium-icon1"
          alt=""
          src="/munchies-emporium-1.svg"
        />
        <img className="menu-link-icon1" alt="" src="/menu-link-1.svg" />
        <img className="footer-divider-icon" alt="" src="/vector-4.svg" />
        <img
          className="footer-child"
          loading="lazy"
          alt=""
          src="/group-35.svg"
        />
        <img
          className="footer-item"
          loading="lazy"
          alt=""
          src="/group-361.svg"
        />
        <img
          className="icround-copyright-icon1"
          loading="lazy"
          alt=""
          src="/icroundcopyright1.svg"
        />
      </div>
      <div className="copyright-2024-container">
        <div className="copyright-20241">Copyright 2024</div>
      </div>
    </div>
  );
};

Contact.propTypes = {
  className: PropTypes.string,
};

export default Contact;
