import React from "react";
import "./Header.css";
import logo from "../../assets/images/Logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="header h-[5rem] bg-[#1C2B35]  flex justify-between px-28 fixed  w-full z-10 ">
      <section className="flex  pt-[20px]">
        <img className="h-[2.5rem] w-[140px]  " src={logo} alt="" />
      </section>
      <section className="flex space-x-8 items-center">
        <Link className="text-white" to="/">
         shops
        </Link>
        <Link className="text-white" to="/order">
          Order
        </Link>
        <Link className="text-white" to="/inventory">
          Manage Inventory
        </Link>
        <Link className="text-white" to="/login">
          Login 
        </Link>
      </section>
    </nav>
  );
};

export default Header;
