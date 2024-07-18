import React from "react";
import "../styles/Booking.css";
import { FaCarSide } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { forwardRef } from "preact/compat";

const Booking = forwardRef((props, ref) => {
  return (
    <section className="booking-container" ref={ref}>
      <div className="booking-parent">
        <h2>Book a Car</h2>

        <form id="booking-form" action="">
          <div className="bookingform-section">
            <label className="bookingfrom-labels">
              <FaCarSide /> <span>Select Your Car Type</span>
              <span className="booking-star">*</span>
            </label>

            <select>
              <option>Select your car type</option>
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

            <select>
              <option>Select pick up location</option>
              <option>Belgrade</option>
              <option>Novi Sad</option>
              <option>Nis</option>
              <option>Kragujevac</option>
              <option>Subotica</option>
            </select>
          </div>
          <div className="bookingform-section">
            <label className="bookingfrom-labels">
              <FaLocationDot />
              Drop-of
              <span className="booking-star">*</span>
            </label>

            <select>
              <option>Select drop of location</option>
              <option>Belgrade</option>
              <option>Novi Sad</option>
              <option>Nis</option>
              <option>Kragujevac</option>
              <option>Subotica</option>
            </select>
          </div>
          <div className="bookingform-section">
            <label className="bookingfrom-labels">
              <SlCalender />
              Pick-up
              <span className="booking-star">*</span>
            </label>

            <input type="date" />
          </div>
          <div className="bookingform-section">
            <label className="bookingfrom-labels">
              <SlCalender />
              Drop-of
              <span className="booking-star">*</span>
            </label>

            <input type="date" />
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
