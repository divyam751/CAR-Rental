import React from "react";
import "../styles/Plan.css";
import icon1 from "/images/plan/icon1.png";
import icon2 from "/images/plan/icon2.png";
import icon3 from "/images/plan/icon3.png";

const Plan = () => {
  return (
    <section className="plan-container">
      <p>Plan your trip now</p>
      <p>Quick & easy car rental</p>
      <div className="plan-container-cards">
        <div className="plan-container-childs">
          <img src={icon1} alt="icons" />
          <h3>Select Car</h3>
          <p>
            We offers a big range of vehicles for all your driving needs. We
            have the perfect car to meet your needs
          </p>
        </div>
        <div className="plan-container-childs">
          <img src={icon2} alt="icons" />
          <h3>Contact Operator</h3>
          <p>
            Our knowledgeable and friendly operators are always ready to help
            with any questions or concerns
          </p>
        </div>
        <div className="plan-container-childs">
          <img src={icon3} alt="icons" />
          <h3>Let's Drive</h3>
          <p>
            Whether you're hitting the open road, we've got you covered with our
            wide range of cars
          </p>
        </div>
      </div>
    </section>
  );
};

export default Plan;
