import React from "react";
import mainImg from "/images/about/about-main.jpg";
import icon1 from "/images/about/icon1.png";
import icon2 from "/images/about/icon2.png";
import icon3 from "/images/about/icon3.png";
import "../styles/About.css";
import Plan from "../components/Plan";
import BannerTop from "../components/BannerTop";
import BannerBottom from "../components/BannerBottom";

const About = () => {
  return (
    <div className="about-container">
      <BannerTop page="About" />
      <div className="about-content">
        <h2>About Company</h2>
        <div className="about-content-main">
          <img src={mainImg} alt="Main Image" />
          <div className="about-textcontent">
            <span>You start the engine and your adventure begins</span>

            <span>
              Certain but she but shyness why cottage. Guy the put instrument
              sir entreaties affronting. Pretended exquisite see cordially the
              you. Weeks quiet do vexed or whose. Motionless if no to affronting
              imprudence no precaution. My indulged as disposal strongly
              attended.
            </span>
            <div className="about-textcontent-iconsParent">
              <div className="about-textcontent-iconsChild">
                <img src={icon1} alt="icon" />
                <div>
                  <span>20</span>
                  <span>Car Types</span>
                </div>
              </div>
              <div className="about-textcontent-iconsChild">
                <img src={icon2} alt="icon" />
                <div>
                  <span>85</span>
                  <span>Rental Outlets</span>
                </div>
              </div>
              <div className="about-textcontent-iconsChild">
                <img src={icon3} alt="icon" />
                <div>
                  <span>75</span>
                  <span>Repair Shop</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Plan />
      <BannerBottom />
    </div>
  );
};

export default About;
