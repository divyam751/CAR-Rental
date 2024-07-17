import React from "react";
import user1Img from "/images/testimonials/pfp1.jpg";
import { FaQuoteRight } from "react-icons/fa";
import "../styles/Testimonials.css";
import { testimonials } from "../assets/data";

const Testimonials = () => {
  return (
    <section className="testimonials-container">
      <span>Reviewed by People</span>
      <span>Client's Testimonials</span>
      <span>
        Discover the positive impact we've made on the our clients by reading
        through their testimonials. Our clients have experienced our service and
        results, and they're eager to share their positive experiences with you.
      </span>
      <div className="testimonials-parent">
        {testimonials.map((item) => {
          return (
            <div key={item.id} className="testimonials-cards">
              <span>{item.review}</span>
              <div className="testimonials-userInfo">
                <div>
                  <img
                    src={item.userImage}
                    alt="User Image"
                    className="testimonials-userImage"
                  />
                  <div>
                    <span>{item.userName}</span>
                    <span>{item.userAddress}</span>
                  </div>
                </div>
                <FaQuoteRight color="#ff4d30" size={40} />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonials;
