import React from "react";
import img from "../public/image-9.jpg";

function FirstSection() {
  return (
    <div className="first-section">
      <div className="first-img">
        <img src={img} alt="img" />
      </div>
      <div className="first-text">
        <h2>About Us</h2>
        <br />
        <p>
          We plan and execute luxury celebration, by making each event special,
          we take care of the stress of planing your occasions and help you
          supervise, coordinate and organize corporate, private and charity
          events.
        </p>
        <a href="#fifth">
          <button>Contact Us</button>
        </a>
      </div>
    </div>
  );
}

export default FirstSection;
