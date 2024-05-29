import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";
import "./Navbar.css";
import Search from "../assets/Search.png"

const Navbar = () => {
  return (
    <div style={{ position: "relative" }}>
      <nav className="navbar">
        <Link to="/">
          <img src={Logo} alt="qtify" />
        </Link>

        <form className="wrapper">
          <input type="text"
          className="search"
          placeholder="Search a song of your choice" />

          <button className="search-button">
            <img src={Search} alt="search" />
          </button>
        </form>

        <button className="feedback-button btn btn-dark">Give Feedback</button>
      </nav>
    </div>
  );
};

export default Navbar;
