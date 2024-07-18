import React from "react";
import BannerTop from "../components/BannerTop";
import BannerBottom from "../components/BannerBottom";
import Testimonials from "../components/Testimonials";
import "../styles/Testimonial.css";

const Testimonial = () => {
  return (
    <div className="testimonial-container">
      <BannerTop page="Testimonials" />
      <Testimonials />
      <BannerBottom />
    </div>
  );
};

export default Testimonial;
