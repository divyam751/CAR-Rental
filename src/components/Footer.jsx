import React from "react";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-child">
          <span>
            <b>CAR </b>Rental
          </span>
          <span id="footer-child1-para">
            We offers a big range of vehicles for all your driving needs. We
            have the perfect car to meet your needs.
          </span>
          <div className="footer-flex">
            <FaPhoneVolume /> <span>(123) -456-789</span>
          </div>
          <div className="footer-flex">
            <IoMdMail /> <span>carrental@gmail.com</span>
          </div>
          <span>Design by Divyam Chauhan</span>
        </div>

        <div className="footer-child">
          <span>COMPANY</span>
          <span>New York</span>
          <span>Careers</span>
          <span>Mobile</span>
          <span>Blog</span>
          <span>How we work</span>
        </div>
        <div className="footer-child">
          <span>WORKING HOURS</span>
          <span>Mon - Fri: 9:00AM - 9:00PM</span>
          <span>Sat: 9:00AM - 19:00PM</span>
          <span>Sun: Closed</span>
        </div>
        <div className="footer-child">
          <span>SUBSCRIPTION</span>
          <span>Subscribe your Email address for latest news & updates.</span>
          <input
            id="footer-input"
            type="text"
            placeholder="Enter Email Address"
          />
          <button className="footer-submitBtn">Submit</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
