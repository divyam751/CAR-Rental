import React from "react";
import BannerTop from "../components/BannerTop";
import "../styles/Vehicle.css";
import carModel from "../assets/data";
import { CiStar } from "react-icons/ci";
import { FaCar } from "react-icons/fa";
import BannerBottom from "../components/BannerBottom";

const Vehicle = () => {
  return (
    <div className="vehicle-container">
      <BannerTop page="Vehicle Model" />
      <div className="vehicle-display">
        {carModel.map((car) => {
          return (
            <div key={car.id} className="vehicle-displayCard">
              <div className="vehicle-displayCard-img">
                <img src={car.carShowImage} alt="car-image" />
              </div>
              <div className="vehicle-displayCard-desc">
                <div className="vehicle-displayCard-descLeft">
                  <span>{car.displayName}</span>
                  <span>
                    <CiStar />
                    <CiStar />
                    <CiStar />
                    <CiStar />
                    <CiStar />
                  </span>
                  <span>
                    <FaCar /> {car.model}
                  </span>
                  <span>
                    <FaCar /> {car.transmission}
                  </span>
                </div>
                <div className="vehicle-displayCard-descRight">
                  <span>{car.rent}</span>
                  <span>per day</span>
                  <span>
                    {car.doors} <FaCar />
                  </span>
                  <span>
                    {car.fuel} <FaCar />
                  </span>
                </div>
              </div>
              <div className="vehicle-displayCard-bookRide">
                <button className="vehicle-displayCard-bookRideBtn">
                  Book Ride
                </button>{" "}
              </div>
            </div>
          );
        })}
      </div>
      <BannerBottom />
    </div>
  );
};

export default Vehicle;
