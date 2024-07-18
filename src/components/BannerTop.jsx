import React from "react";
import "../styles/BannerTop.css";
import { useNavigate } from "react-router-dom";

const BannerTop = ({ page }) => {
  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/");
  };
  return (
    <div className="banner-container">
      <div className="banner-content">
        <span>{page}</span>
        <span>
          <span id="banner-homeRoute" onClick={handleHome}>
            Home
          </span>{" "}
          / {page}
        </span>
      </div>
    </div>
  );
};

export default BannerTop;
