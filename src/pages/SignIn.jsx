import React from "react";
import "../styles/SignIn.css";
import carImg from "/images/login/loginCar.png";
import { useState } from "preact/hooks";
import { useNavigate } from "react-router-dom";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PiConfettiBold } from "react-icons/pi";

const SignIn = () => {
  const [user, setUser] = useState({
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

  const navigate = useNavigate();

  const hanldeSignup = () => {
    navigate("/register");
  };

  const notifySuccess = (fullName) =>
    toast.success(`Welcome ${fullName.split(" ")[0]} 🎉`, {
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
  const notifyError = (fullName) =>
    toast.error(`Wrong Credentials 🥺`, {
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

  const handleSignin = (e) => {
    e.preventDefault();

    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    let currentUser = existingUsers.filter((data) => user.email === data.email);

    currentUser = currentUser[0];

    if (currentUser && currentUser.password === user.password) {
      notifySuccess(currentUser.fullName);
      setTimeout(() => {
        navigate("/");
      }, 4000);
    } else {
      notifyError();
    }
  };

  return (
    <div className="signin-container">
      <div className="signin-card">
        <div className="signin-left">
          <img src={carImg} alt="car-image" />
        </div>
        <div className="signin-right">
          <div className="signin-rightHead">
            <span>Login your Account</span>
            <span>
              Since this is your first trip, you'll need to provide us with some
              information before you can check out.
            </span>
          </div>

          <form onSubmit={handleSignin} className="signinForm">
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
              name="password"
              onChange={handleChange}
              required
            />
            <button type="submit">Login</button>
            <div>
              <span>Login with phone instead</span>
              <span>Forget password?</span>
            </div>
            <span>
              New member? <span onClick={hanldeSignup}>Sign Up</span>
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

export default SignIn;
