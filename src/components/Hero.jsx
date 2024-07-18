import React from "react";
import "../styles/Hero.css";
import mainCar from "/images/hero/main-car.png";
import { FaCheckCircle } from "react-icons/fa";
import { FaGreaterThan } from "react-icons/fa";

const Hero = ({ bookingRef }) => {
  const handleBookRideClick = () => {
    bookingRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section className="hero-container">
      <div className="hero-content">
        <div className="hero-textSection">
          <span>Plan your trip now</span>
          <span>
            Save <span id="hero-highlighted"> big</span> with our car rental
          </span>
          <span>
            Rent the car of your dreams. Unbeatable prices, unlimited miles,
            flexible pick-up options and much more.
          </span>
          <div className="hero-textSection-Buttons">
            <button onClick={handleBookRideClick}>
              Book Ride {<FaCheckCircle />}
            </button>
            <button>Learn More {<FaGreaterThan />} </button>
          </div>
        </div>
        <img className="hero-carImage" src={mainCar} alt="main-car" />
      </div>
    </section>
  );
};

export default Hero;
