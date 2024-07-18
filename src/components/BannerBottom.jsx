import React from "react";
import "../styles/BannerBottom.css";
import { FaPhoneVolume } from "react-icons/fa6";

const BannerBottom = () => {
  return (
    <div className="bannerBtm-container">
      <div className="bannerBtm-content">
        <span>Book a car by getting in touch with us</span>
        <div className="bannerBtm-flex">
          <FaPhoneVolume /> <span>(123)456-789</span>
        </div>
      </div>
    </div>
  );
};

export default BannerBottom;
