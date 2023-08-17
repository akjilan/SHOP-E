import React from "react";
// import cart from "../../images/cartIcon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const ShopCartMain = (props) => {
  const { handleAddToCart, product } = props;
  const { img, name, seller, ratings, price } = product;
  return (
    <>
      <div className="cart w-full md:content-center md:flex md:flex-col md:w-full md:justify-center pt-5 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] rounded-lg border-2 border-green-200 relative">
        <section className="px-3 mb-12">
          <picture className="flex justify-center cursor-pointer mb-3 ">
            <img
              src={img}
              className="hover:scale-110 transition ease-in-out delay-200"
              alt={name}
            />
          </picture>
          <div className="mb-6 mt-1 ps-1">
            <h4 className="text-{#0E161A} text-xl font-sans font-semibold">
              {name}
            </h4>
            <h5 className="text-{#0E161A} text-xl ">
              Price: $ <span>{price}</span>{" "}
            </h5>
          </div>
          <div className="ps-1">
            <p className="text-{#2A414F} text-xs tracking-wide font-semibold">
              Manufacturer : {seller}
            </p>
            <p className="text-{#2A414F} text-xs tracking-wide font-semibold">
              Rating : {ratings} star
            </p>
          </div>
        </section>
        <div className="absolute bottom-0 w-full mt-7">
          <a>
            <button
              className="group w-full text-center justify-center bg-[#FFE0B3] py-2 mt-2 hover:bg-yellow-300
            flex items-center  "
              onClick={handleAddToCart}
            >
              <p className="align-middle pr-2 font-bold group-hover:scale-105 group-hover:text-red-950 transition delay-150 duration-300 ease-in-out ">
                Add to cart
              </p>
              {/* <img
                className="align-middle h-4 mt-1 w-auto "
                src={cart}
                alt=""
              /> */}
              <FontAwesomeIcon
                className="group-hover:scale-125 transition delay-150 duration-300 ease-in-out"
                icon={faShoppingCart}
              ></FontAwesomeIcon>
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default ShopCartMain;
