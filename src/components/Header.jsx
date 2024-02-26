import React from "react";
import BofA_rgb from "../images/BofA_rgb.png";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row md:justify-between items-center w-full my-4">
      <div className="flex flex-row justify-center items-center">
        <img src={BofA_rgb} className="w-64" alt="Logo" />
        <p className="text-gray-400 text-xl ml-4">Log In</p>
      </div>
      <div className="flex flex-row justify-center items-center">
        <p className="text-gray-400 text-sm font-bold">Secure Area</p>
        <p className="text-gray-400 text-sm ml-4 border-l pl-4 border-dashed border-black">
          En español
        </p>
      </div>
    </div>
  );
};

export default Header;
