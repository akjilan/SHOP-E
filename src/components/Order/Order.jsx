import React from 'react'
import ShopCartAside from '../../assets/utils/Hero/ShopCartAside'

const Order = () => {
  return (
<>
<section className="flex">
        <div className="cart md:content-centergap-5 md:justify-center pt-5 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] rounded-lg border-2 border-green-200 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:p-24 sm:p-5 sm:w-1/2 md:w-2/3 lg:w-4/5 md:space-x-3 w-1/2">
         <h1>this is order page . </h1>
        </div>

        <div className="cartAside sm:w-1/2 md:w-1/3 lg:w-1/5 sm:align-middle  w-1/2">
          <ShopCartAside cart={[]}></ShopCartAside>
        </div>
      </section> 
</>
  )
}

export default Order