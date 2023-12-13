import React, { useContext } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/Usercontext";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handlesignOut = () => {
    logOut()
      .then(() => {
        alert("Signout successfull");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <nav className="header h-[5rem] bg-[#1C2B35]  flex justify-between px-28 fixed  w-full z-10 ">
      <section className="flex  pt-[20px]">
        <Link to="/">
          <h2 className="md:text-3xl text-xl shadow-xl font-extrabold tracking-widest text-teal-200">E SHOP</h2>
        </Link>
      </section>
      <section className="flex space-x-8 items-center">
        <Link className="text-white font-semibold font-sans text-base tracking-wider  " to="/">
          Shops
        </Link>
        <Link className="text-white font-semibold font-sans text-base tracking-wider  " to="/order">
          Order
        </Link>
        <Link className="text-white font-semibold font-sans text-base tracking-wide  " to="/inventory">
           Inventory
        </Link>

        {user?.email ? (
          <div className="flex gap-3 items-center">
            <h3 className="text-teal-200">welcome , {user.email}</h3>
            <button
              onClick={handlesignOut}
              className="btn btn-sm btn-outline text-white "
            >
              Sign out
            </button>
          </div>
        ) : (
          <Link className="text-white font-semibold font-sans text-base tracking-wider  "to="/login">
            Login
          </Link>
        )}
      </section>
    </nav>
  );
};

export default Header;
