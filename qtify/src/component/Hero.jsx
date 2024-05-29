import React from "react";
import "./Hero.css";
import HeadPhone from "../assets/headPhones.png";

const Hero = () => {
  return (
    <div className="heroSection">
      <div className="content">
        <p>100 Thousand Songs, ad-free</p>
        <p>Over thousands podcast episodes</p>
      </div>
      <div>
        <img className="img" src={HeadPhone} alt="HeadPhone" />
      </div>
    </div>
  );
};

export default Hero;
