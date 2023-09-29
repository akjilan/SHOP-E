import React from "react";
import "./Header.css";
import logo from "../../assets/images/Logo.svg";

const Header = () => {
  return (
    <nav className="header h-[5rem] bg-[#1C2B35]  flex justify-between px-28 fixed  w-full z-10 ">
      <section className="flex  pt-[20px]">
        <img className="h-[2.5rem] w-[140px]  " src={logo} alt="" />
      </section>
      <section className="flex space-x-8 items-center">
        <a className="text-white" href="">
          Order
        </a>
        <a className="text-white" href="">
          Order Review
        </a>
        <a className="text-white" href="">
          Manage Inventory
        </a>
        <a className="text-white" href="">
          Login
        </a>
      </section>
    </nav>
  );
};

export default Header;
