import React, { createContext, useState } from "react";
import TestTwo from "../TestTwo/TestTwo";

export const MyContext = createContext();

export const MyAgeContext = createContext(0);

const Inventory = () => {
  const myName = "Raihanul Hoque JIlany";
  const [age, setAGe] = useState(25);

  return (
    <div>
      <div className="cart md:content-centergap-5 md:justify-center pt-5 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] rounded-lg border-2 border-green-200 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:p-24 sm:p-5 sm:w-1/2 md:w-2/3 lg:w-4/5 md:space-x-3 w-full">
        <h4>Inventory page </h4>
        <h3>Current age : {age}</h3>

        <MyAgeContext.Provider value={[age,setAGe]}>
          <MyContext.Provider value={myName}>
            <TestTwo></TestTwo>
          </MyContext.Provider>
        </MyAgeContext.Provider>
      </div>
    </div>
  );
};

export default Inventory;
