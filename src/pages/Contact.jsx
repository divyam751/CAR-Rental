import React from "react";
import "../styles/Contact.css";
import BannerTop from "../components/BannerTop";
import BannerBottom from "../components/BannerBottom";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { TbGpsFilled } from "react-icons/tb";
import { useState } from "preact/hooks";
import { IoIosMailOpen } from "react-icons/io";

const Contact = () => {
  const [message, setMessage] = useState({
    fullName: "",
    email: "",
    msg: "",
  });
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    setMessage((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  console.log(message);

  return (
    <div className="contact-container">
      <BannerTop page="Contact" />
      <div className="contact-content">
        <div className="contact-left">
          <span>Need additional information?</span>
          <span>
            A multifaceted professional skilled in multiple fields of research,
            development as well as a learning specialist. Over 15 years of
            experience.
          </span>
          <span className="contact-leftDetails">
            <FaPhoneVolume />
            (123) 456-7869{" "}
          </span>
          <span className="contact-leftDetails">
            <IoMdMail /> carrental@carmail.com
          </span>
          <span className="contact-leftDetails">
            <TbGpsFilled /> Belgrade, Serbia
          </span>
        </div>
        <div className="contact-right">
          <form action="" className="contact-form">
            <label>
              Full Name <span id="contact-formStar">*</span>
            </label>
            <input
              name="fullName"
              type="text"
              placeholder="E.g.: `John Doe`"
              value={message.fullName}
              onChange={handleChange}
              required
            />
            <label>
              Email <span id="contact-formStar">*</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="youremail@example.com"
              value={message.email}
              onChange={handleChange}
              required
            />
            <label>
              Tell us about it <span id="contact-formStar">*</span>
            </label>
            <textarea
              name="msg"
              type="text"
              placeholder="Write Here..."
              value={message.msg}
              onChange={handleChange}
              required
              rows={6}
              cols={1}
            />
            <button type="submit" className="contact-formSubmitBtn">
              <IoIosMailOpen />
              Send Message
            </button>
          </form>
        </div>
      </div>
      <BannerBottom />
    </div>
  );
};

export default Contact;
