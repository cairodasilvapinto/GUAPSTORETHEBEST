import React from "react";
import Navbar from "./NavBar";
import Logo from "../Assets/Logo.png";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-header flex justify-center items-center">
        <img src={Logo} alt="Logo" className="p-3" />
      </div>
    </div>
  );
};

export default Home;
