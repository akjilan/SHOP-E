import React from "react";
import clear from "../../images/trash.png";
import arrow from "../../images/arrow-right.png";

const ShopCartAside = ({ cart }) => {
  let totalPrice = 0;
  cart.map((singleProduct) => {
    totalPrice += singleProduct.price;
  });
  const grandTotal = totalPrice + cart.length * 20 + totalPrice / 20;
  const clearCart = () => {
    cart = [];
  };
  return (
    <div className="h-max bg-[#FFE0B3] content-center pt-5  pb-4 mt-20 md:sticky   md:top-{5rem} lg:fixed  lg:px-6">
      <h2 className="text-[#1C2B35] text-center text-xl font-bold tracking-wider pb-12">
        Order Summary
      </h2>
      <p className="text-[#2A414F] pl-6 pb-6 tracking-wider font-semibold text-[17px]">
        Selected Items: <span>{cart.length}</span>
      </p>
      <p className="text-[#2A414F] pl-6 pb-6 tracking-wider font-semibold text-[17px]">
        Total Price: $<span>{totalPrice}</span>
      </p>
      <p className="text-[#2A414F] pl-6 pb-6 tracking-wider font-semibold text-[17px]">
        Total Shipping Charge: $<span>{cart.length * 20}</span>
      </p>
      <p className="text-[#2A414F] pl-6 pb-6 tracking-wider font-semibold text-[17px]">
        Tax: $<span>{totalPrice / 20}</span>
      </p>
      <p className="text-[#0E161A] pl-6 pb-6 tracking-wider font-semibold text-[21px]">
        Grand Total: $<span>{grandTotal}</span>
      </p>
      <div className="px-6">
        <button
          className="group md:py-3 py-1 content-center bg-[#FF3030] flex rounded w-full justify-center hover:bg-red-800  "
          onClick={clearCart}
        >
          <p className="clearText font-bold tracking-wider pr-3 text-white group-hover:text-gray-300 group-hover:scale-x-105 transition ease-in-out delay-100 ">
            Clear Cart
          </p>
          <img className="group-hover:scale-x-110" src={clear} alt="" />
        </button>
      </div>
      <div className="px-6 mt-3">
        <a href="">
          <button className="group py-1 md:py-3 content-center bg-[#F90] flex rounded w-full justify-center hover:bg-black ">
            <p className="clearText font-bold tracking-wider md:pr-3 text-white  group-hover:scale-x-105 transition ease-in-out delay-100 ">
              Review Order
            </p>
            <img className="group-hover:scale-x-105 " src={arrow} alt="" />
          </button>
        </a>
      </div>
      <div></div>
    </div>
  );
};

export default ShopCartAside;
