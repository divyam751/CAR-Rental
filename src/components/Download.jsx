import React from "react";
import "../styles/Download.css";
import Gplay from "/images/download/googleapp.svg";
import Astore from "/images/download/appstore.svg";

const Download = () => {
  return (
    <section className="download-container">
      <div className="download-content">
        <span>Download our app to get most out of it</span>
        <span>
          Thrown shy denote ten ladies though ask saw. Or by to he going think
          order event music. Incommode so intention defective at convinced. Led
          income months itself and houses you.
        </span>
        <div>
          <button>
            <img src={Gplay} alt="Google Play Button" />
          </button>
          <button>
            <img src={Astore} alt="App Store Button" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Download;
