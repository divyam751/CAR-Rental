import React from "react";
import "../styles/CarModel.css";
import carImg from "/images/cars-big/audia1.jpg";
import carModel from "../assets/data";
import { useEffect, useState } from "preact/hooks";

const CarModel = ({ bookingRef }) => {
  const [carData, setCarData] = useState({});
  const [selectedCarId, setSelectedCarId] = useState(0);
  const buttonStyle = {
    backgroundColor: "#ff4d30",
    color: "white",
  };

  const handleBookRideClick = () => {
    bookingRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleCarName = (carId) => {
    setSelectedCarId(carId);
    const seletedModel = carModel.filter((car) => {
      return carId === car.id;
    });
    setCarData(seletedModel[0]);
  };
  console.log(carData);

  //   Load Initial car Details

  useEffect(() => {
    handleCarName(1);
  }, []);

  return (
    <section className="carModel-container">
      <span>Vehicle Models</span>
      <span>Our rental fleet</span>
      <span>
        Choose from a variety of our amazing vehicles to rent for your next
        adventure or business trip
      </span>

      <div className="carModel-parent">
        <div className="carModel-leftChild">
          {carModel.map((car) => {
            return (
              <button
                key={car.id}
                style={selectedCarId === car.id ? buttonStyle : ""}
                onClick={() => handleCarName(car.id)}
              >
                {car.carName}
              </button>
            );
          })}
        </div>
        <div className="carModel-middChild">
          <img src={carData.carImage} alt="model Image" />
        </div>
        <div className="carModel-description">
          <div className="carModel-description-price">
            <span>{carData.rent}</span> <span>/ rent per day</span>
          </div>

          <div className="carModel-description-table">
            <div className="carModel-table-row">
              <div className="carModel-table-col">
                <span>Model</span>
              </div>
              <div className="carModel-table-col">
                <span>{carData.model}</span>
              </div>
            </div>
            <div className="carModel-table-row">
              <div className="carModel-table-col">
                <span>Mark</span>
              </div>
              <div className="carModel-table-col">
                <span>{carData.mark}</span>
              </div>
            </div>
            <div className="carModel-table-row">
              <div className="carModel-table-col">
                <span>Year</span>
              </div>
              <div className="carModel-table-col">
                <span>{carData.year}</span>
              </div>
            </div>
            <div className="carModel-table-row">
              <div className="carModel-table-col">
                <span>Doors</span>
              </div>
              <div className="carModel-table-col">
                <span>{carData.doors}</span>
              </div>
            </div>
            <div className="carModel-table-row">
              <div className="carModel-table-col">
                <span>AC</span>
              </div>
              <div className="carModel-table-col">
                <span>{carData.ac}</span>
              </div>
            </div>
            <div className="carModel-table-row">
              <div className="carModel-table-col">
                <span>Transmission</span>
              </div>
              <div className="carModel-table-col">
                <span>{carData.transmission}</span>
              </div>
            </div>
            <div className="carModel-table-row">
              <div className="carModel-table-col">
                <span>Fuel</span>
              </div>
              <div className="carModel-table-col">
                <span>{carData.fuel}</span>
              </div>
            </div>
          </div>

          <button className="carModel-reserveBtn" onClick={handleBookRideClick}>
            RESERVE NOW
          </button>
        </div>
      </div>
    </section>
  );
};

export default CarModel;
