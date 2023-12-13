import React from "react";

const Shipping = () => {
  return (
    <div className="pt-20">
      <div className="max-w-sm mx-auto bg-white shadow-md p-6 rounded-md">
        <h2 className="text-2xl font-semibold mb-4">Shipping Information</h2>

        <div className="mb-4">
          <label
            htmlFor="fullName"
            className="block text-gray-600 text-sm font-medium mb-2"
          >
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            className="w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 p-2"
            placeholder="John Doe"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="address"
            className="block text-gray-600 text-sm font-medium mb-2"
          >
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            className="w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 p-2"
            placeholder="123 Main St"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="city"
            className="block text-gray-600 text-sm font-medium mb-2"
          >
            City
          </label>
          <input
            type="text"
            id="city"
            name="city"
            className="w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 p-2"
            placeholder="Anytown"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="zipCode"
            className="block text-gray-600 text-sm font-medium mb-2"
          >
            ZIP Code
          </label>
          <input
            type="text"
            id="zipCode"
            name="zipCode"
            className="w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 p-2"
            placeholder="12345"
          />
        </div>

        <button
          type="button"
          className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring focus:border-indigo-300"
        >
          Continue to Payment
        </button>
      </div>
    </div>
  );
};

export default Shipping;
