import React from "react";
import { PiGreaterThanBold } from "react-icons/pi";
import "../styles/ChooseUs.css";

const ChooseUs = () => {
  return (
    <section className="chooseUs-container">
      <div className="chooseUs-banner">
        <span>Save big with our cheap car rental!</span>
        <span>
          Top Airports. Local Suppliers. <span id="banner-highlight">24/7</span>{" "}
          Support.
        </span>
      </div>
      <div className="chooseUs-bgArea">
        <div className="chooseUs-mainImage">
          <img src="/images/chooseUs/main.png" alt="Cars Images" />
        </div>
        <div className="chooseUs-content">
          <div className="chooseUs-leftChild">
            <span>Why Choose Us</span>
            <span>Best valued deals you will ever find</span>
            <span>
              Discover the best deals you'll ever find with our unbeatable
              offers. We're dedicated to providing you with the best value for
              your money, so you can enjoy top-quality services and products
              without breaking the bank. Our deals are designed to give you the
              ultimate renting experience, so don't miss out on your chance to
              save big.
            </span>
            <button>
              <span> Find Details</span> <PiGreaterThanBold />
            </button>
          </div>
          <div className="chooseUs-rightChild">
            <div className="chooseUs-rightChild-card">
              <img
                className="chooseUs-icons"
                src="/images/chooseUs/icon1.png"
                alt="icon"
              />
              <div className="chooseUs-rightChild-content">
                <span>Cross Country Drive</span>
                <span>
                  Take your driving experience to the next level with our
                  top-notch vehicles for your cross-country adventures.
                </span>
              </div>
            </div>
            <div className="chooseUs-rightChild-card">
              <img
                className="chooseUs-icons"
                src="/images/chooseUs/icon2.png"
                alt="icon"
              />
              <div className="chooseUs-rightChild-content">
                <span>All Inclusive Pricing</span>
                <span>
                  Get everything you need in one convenient, transparent price
                  with our all-inclusive pricing policy.
                </span>
              </div>
            </div>
            <div className="chooseUs-rightChild-card">
              <img
                className="chooseUs-icons"
                src="/images/chooseUs/icon3.png"
                alt="icon"
              />
              <div className="chooseUs-rightChild-content">
                <span>No Hidden Charges</span>
                <span>
                  Enjoy peace of mind with our no hidden charges policy. We
                  believe in transparent and honest pricing.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
