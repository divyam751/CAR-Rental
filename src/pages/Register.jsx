import React from "react";
import "../styles/Register.css";
import carImg from "/images/login/loginCar.png";
import { useState } from "preact/hooks";
import { useNavigate } from "react-router-dom";
import { Bounce, ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [user, setUser] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  // console.log(user);
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate("/signin");
  };

  const notifySuccess = () =>
    toast.success(`Register successfully 🎉`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  const notifyError = () =>
    toast.error(`Email already registed`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });

  const handleRegister = (e) => {
    e.preventDefault();

    // Save user credential in local storage

    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    let ifUserPresent = existingUsers.filter((item) => {
      return user.email === item.email;
    });
    ifUserPresent = ifUserPresent[0];

    if (ifUserPresent) {
      notifyError();
      // alert("Email already registed");
    } else {
      existingUsers.push(user);
      localStorage.setItem("users", JSON.stringify(existingUsers));
      notifySuccess();
    }

    setTimeout(() => {
      navigate("/signin");
    }, 3000);
  };
  return (
    <div className="register-container">
      <div className="register-card">
        <div className="register-left">
          <img src={carImg} alt="car-image" />
        </div>
        <div className="register-right">
          <div className="register-rightHead">
            <span>Create your Account</span>
          </div>

          <form onSubmit={handleRegister} className="registerForm">
            <input
              type="text"
              placeholder="Full Name"
              value={user.fullName}
              name="fullName"
              onChange={handleChange}
              required
            />
            <input
              type="email"
              placeholder="Email Id"
              value={user.email}
              name="email"
              onChange={handleChange}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={user.password}
              onChange={handleChange}
              name="password"
              required
            />
            <button type="submit">Register</button>
            <div>
              <span>Register with phone instead</span>
              <span>Suggest password?</span>
            </div>
            <span>
              Existing member? <span onClick={handleSignIn}>Sign In</span>
            </span>
          </form>
        </div>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition={Bounce}
        />
      </div>
    </div>
  );
};

export default Register;
