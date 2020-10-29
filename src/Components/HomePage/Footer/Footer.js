import React from "react";
import "./footer.scss";
const Footer = () => {
  return (
    <div className="footer__Wrapper">
      {/* banner Ended */}
      {/* Footer Started */}
      <div className="footer__body">
        <div className="footer__firstColumn">
          <div className="makeRows">
            <span>FAQ</span>
            <span>Inverstor Relations</span>
            <span>Privacy</span>
            <span>Speed Test</span>
          </div>
        </div>
        <div className="footer__secondColumn">
          <div className="makeRows">
            <span>Help Center</span>
            <span>Jobs</span>
            <span>Cookie Preferences</span>
            <span>Legal Notices</span>
          </div>
        </div>
        <div className="footer__thirdColumn">
          <div className="makeRows">
            <span>Account</span>
            <span>Ways to Watch</span>
            <span>Corporate Information</span>
            <span>Stream Originals</span>
          </div>
        </div>
        <div className="footer__fourthColumn">
          <div className="makeRows">
            <span>Media Center</span>
            <span>Terms of Use</span>
            <span>Contact Us</span>
          </div>
        </div>
      </div>
        <p className="github__Repo" onClick={() => window.open("https://github.com/chwasiq0569/Stream-App-React-JS-Firebase.git","_blank")}>Click For Github Repo</p>
    </div>
  );
};

export default Footer;
