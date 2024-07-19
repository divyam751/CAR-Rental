import React from "react";
import "../styles/BookingModal.css";
import { IoMdClose } from "react-icons/io";

import { FaLocationDot } from "react-icons/fa6";

import { IoInformationCircle } from "react-icons/io5";
import { useState } from "preact/hooks";

const BookingModal = ({ closeBookingModal, searchData, handleReserveBtn }) => {
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    age: "",
    email: "",
    address: "",
    city: "",
    zipCode: "",
    newsUpdate: false,
  });

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    setPersonalInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    for (const key in personalInfo) {
      console.log(key + ":" + personalInfo[key]);
    }
    handleReserveBtn();
  };

  return (
    <div className="bookingModel-container">
      <div className="bookingModal__title">
        <span>COMPLETE RESERVATION</span>
        <span>
          <IoMdClose onClick={() => closeBookingModal()} />
        </span>
      </div>
      <div className="bookingModal__message">
        <div>
          <IoInformationCircle />
          <span>
            Upon completing this reservation enquiry, you will receive:
          </span>
        </div>
        <span>
          Your rental voucher to produce on arrival at the rental desk and a
          toll-free customer support number.
        </span>
      </div>
      <div className="bookingModal__carInfo">
        <div className="bookingModal__carInfo_left">
          <span>Location & Date</span>
          <div className="bookingModal_left-row">
            <FaLocationDot />
            <div>
              <span>Pick-Up Date & Time</span>
              <span>
                {searchData.pickupDate} / <input type="time" name="" id="" />
              </span>
            </div>
          </div>

          <div className="bookingModal_left-row">
            <FaLocationDot />
            <div>
              <span>Drop-Off Date & Time</span>
              <span>
                {searchData.dropOfDate} / <input type="time" name="" id="" />
              </span>
            </div>
          </div>

          <div className="bookingModal_left-row">
            <FaLocationDot />
            <div>
              <span>Pick-Up Location</span>
              <span>{searchData.pickupLocation}</span>
            </div>
          </div>
          <div className="bookingModal_left-row">
            <FaLocationDot />
            <div>
              <span>Drop-Off Location</span>
              <span>{searchData.dropOfLocation}</span>
            </div>
          </div>
        </div>

        <div className="bookingModal__carInfo_right">
          <span>Car- {searchData.carType}</span>
          <img src={searchData.carImage} alt="Car Image" />
        </div>
      </div>
      <hr />

      <div className="bookingModal_personalInfo">
        <span>PERSONAL INFORMATION</span>

        <form id="personalInfo__form" onSubmit={handleSubmit}>
          <div className="personalInfo_grid2col">
            <span className="personalInfo_inputBox">
              <label>
                First Name <span className="bookingModal__stars">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter your first name"
                value={personalInfo.firstName}
                onChange={handleChange}
                name="firstName"
              />
              <span>This field is required.</span>
            </span>

            <span className="personalInfo_inputBox">
              <label>
                Last Name <span className="bookingModal__stars">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter your last name"
                value={personalInfo.lastName}
                onChange={handleChange}
                name="lastName"
              />
              <span>This field is required.</span>
            </span>

            <span className="personalInfo_inputBox">
              <label>
                Phone Number <span className="bookingModal__stars">*</span>
              </label>
              <input
                type="number"
                placeholder="Enter your phone number"
                value={personalInfo.phoneNumber}
                onChange={handleChange}
                name="phoneNumber"
              />
              <span>This field is required.</span>
            </span>

            <span className="personalInfo_inputBox">
              <label>
                Age <span className="bookingModal__stars">*</span>
              </label>
              <input
                type="number"
                placeholder="18"
                value={personalInfo.age}
                onChange={handleChange}
                name="age"
              />
              <span>This field is required.</span>
            </span>
          </div>

          <span className="personalInfo_inputBox personalInfo_inputBoxS ">
            <label>
              Email <span className="bookingModal__stars">*</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email address"
              value={personalInfo.email}
              onChange={handleChange}
              name="email"
            />
            <span>This field is required.</span>
          </span>

          <span className="personalInfo_inputBox personalInfo_inputBoxS ">
            <label>
              Address <span className="bookingModal__stars">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter your street address"
              value={personalInfo.address}
              onChange={handleChange}
              name="address"
            />
            <span>This field is required.</span>
          </span>

          <div className="personalInfo_grid2col">
            <span className="personalInfo_inputBox">
              <label>
                City <span className="bookingModal__stars">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter your city"
                value={personalInfo.city}
                onChange={handleChange}
                name="city"
              />
              <span>This field is required.</span>
            </span>

            <span className="personalInfo_inputBox">
              <label>
                Zip Code <span className="bookingModal__stars">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter your zip code"
                value={personalInfo.zipCode}
                onChange={handleChange}
                name="zipCode"
              />
              <span>This field is required.</span>
            </span>
          </div>

          <span className="personalInfo_checkBox personalInfo_inputBoxS">
            <input
              type="checkbox"
              value={personalInfo.newsUpdate}
              onChange={handleChange}
              name="newsUpdate"
            />
            <label>Please send me latest news and updates</label>
          </span>
          <div className="personalInfo_submitBtn_box">
            <button className="personalInfo_submitBtn" type="submit">
              Reserve Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingModal;
