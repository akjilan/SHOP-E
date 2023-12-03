import React from "react";

const ReviewItem = ({ product , handleRemoveFromCart }) => {
  return (
    <div className="p-5 border-gray-400 shadow-lg m-4 flex items-center w-full">
      <section>
        <img
          className="w-20 h-auto mr-3 items-center"
          src={product.img}
          alt=""
        />
      </section>
      <section className="flex justify-between flex-grow">
        <div className="">
          <h1 className="text-left font-bold text-base">{product.name}</h1>
          <h4 className="">{product.seller}</h4>
          <h1 className=" text-sm font-bold leading-6 tracking-wider">
            <span>$</span>
            {product.price}
          </h1>
        </div>
        <div className="text-center mt-2">
          <button onClick={()=>handleRemoveFromCart(product.id)} className="bg-[#991B1B] px-2 py-1 rounded text-white text-sm tracking-widest font-serif ">
            Cancel
          </button>
        </div>
      </section>
    </div>
  );
};

export default ReviewItem;
