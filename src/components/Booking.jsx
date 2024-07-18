import React from "react";
import "../styles/Booking.css";
import { FaCarSide } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { forwardRef, useState } from "preact/compat";
import { RxCross2 } from "react-icons/rx";

const Booking = forwardRef((props, ref) => {
  const [searchData, setSearchData] = useState({
    carType: "",
    pickupLocation: "",
    dropOfLocation: "",
    pickupDate: "",
    dropOfDate: "",
  });
  const [notification, setNotification] = useState(false);
  const [notificationClass, setNotificationClass] = useState("");
  const [message, setMessage] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    for (let key in searchData) {
      if (searchData[key] === "") {
        setNotification(true);
        setNotificationClass("booking-notification__error");
        setMessage("All fields required!");
        return;
      }
    }

    if (!notification) {
      setNotification(true);
      setNotificationClass("booking-notification__success");
      setMessage("Check your email to confirm an order.");
    }
  };

  const closeNotification = () => {
    setNotification(false);
    setNotificationClass("");
    setMessage("");
  };

  const handleChange = (e) => {
    e.preventDefault();
    notification ? setNotification(false) : "";

    const { name, value } = e.target;

    setSearchData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="booking-container" ref={ref}>
      <div className="booking-parent">
        <h2>Book a Car</h2>

        {notification ? (
          <div className={notificationClass}>
            <span>{message}</span>{" "}
            <span
              className="booking-notification-btn"
              onClick={closeNotification}
            >
              <RxCross2 />
            </span>
          </div>
        ) : (
          ""
        )}

        <form id="booking-form" onSubmit={handleSearch}>
          <div className="bookingform-section">
            <label className="bookingfrom-labels">
              <FaCarSide /> <span>Select Your Car Type</span>
              <span className="booking-star">*</span>
            </label>

            <select
              value={searchData.carType || ""}
              name="carType"
              onChange={handleChange}
            >
              <option value="">Select your car type</option>
              <option value="Audi A1 S-Line">Audi A1 S-Line</option>
              <option value="VW Golf 6">VW Golf 6</option>
              <option value="Toyota Camry">Toyota Camry</option>
              <option value="BMW 320 ModernLine">BMW 320 ModernLine</option>
              <option value="Mercedes-Benz GLK">Mercedes-Benz GLK</option>
              <option value="VW Passat CC">VW Passat CC</option>
            </select>
          </div>
          <div className="bookingform-section">
            <label className="bookingfrom-labels">
              <FaLocationDot />
              Pick-up
              <span className="booking-star">*</span>
            </label>

            <select
              value={searchData.pickupLocation || ""}
              name="pickupLocation"
              onChange={handleChange}
            >
              <option value="">Select pick up location</option>
              <option value="Belgrade">Belgrade</option>
              <option value="Novi Sad">Novi Sad</option>
              <option value="Nis">Nis</option>
              <option value="Kragujevac">Kragujevac</option>
              <option value="Subotica">Subotica</option>
            </select>
          </div>
          <div className="bookingform-section">
            <label className="bookingfrom-labels">
              <FaLocationDot />
              Drop-of
              <span className="booking-star">*</span>
            </label>

            <select
              value={searchData.dropOfLocation || ""}
              name="dropOfLocation"
              onChange={handleChange}
            >
              <option value="">Select drop of location</option>
              <option value="Belgrade">Belgrade</option>
              <option value="Novi Sad">Novi Sad</option>
              <option value="Nis">Nis</option>
              <option value="Kragujevac">Kragujevac</option>
              <option value="Subotica">Subotica</option>
            </select>
          </div>
          <div className="bookingform-section">
            <label className="bookingfrom-labels">
              <SlCalender />
              Pick-up
              <span className="booking-star">*</span>
            </label>

            <input
              type="date"
              value={searchData.pickupDate}
              name="pickupDate"
              onChange={handleChange}
            />
          </div>
          <div className="bookingform-section">
            <label className="bookingfrom-labels">
              <SlCalender />
              Drop-of
              <span className="booking-star">*</span>
            </label>

            <input
              type="date"
              value={searchData.dropOfDate}
              name="dropOfDate"
              onChange={handleChange}
            />
          </div>
          <div className="bookingform-section">
            <button type="submit">Search</button>
          </div>
        </form>
      </div>
    </section>
  );
});

export default Booking;
