import React, { useState } from 'react'

import { Link, useLoaderData } from 'react-router-dom'
import ShopCartAside from '../../assets/utils/Hero/ShopCartAside';
import ReviewItem from '../ReviewItem/ReviewItem';
import { removeFromDb } from '../../assets/utilities/fakedb';
import OrderSummery from '../../assets/utils/Hero/OrderSummery';
import OrderAsideCart from './OrderAsideCart';

const Order = () => {
  const savedCart = useLoaderData();
  const [cart,setCart] = useState(savedCart)
 
  const handleRemoveFromCart = (id) =>
  {
   const remaining = cart.filter(p=>p.id!==id)
   setCart(remaining);
   removeFromDb(id);
  
  }
  const clearCart = ()=>{
    setCart([]);

  }
  return (
<>
<section className="flex">
        <div className="cart md:content-center gap-5 md:justify-center pt-5 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] rounded-lg border-2 border-green-200 grid grid-cols-1 lg:p-24 sm:p-5 sm:w-1/2 md:w-2/3 lg:w-4/5 md:space-x-3 w-1/2">
        {
          cart.map(product=><ReviewItem key={product.id} product={product} handleRemoveFromCart={handleRemoveFromCart} ></ReviewItem>)
        }
        </div>

        <div className="cartAside sm:w-1/2 md:w-1/3 lg:w-1/5 sm:align-middle  w-1/2">

        <OrderAsideCart cart={cart}>
          <Link to="/checkout">
            Checkout
          </Link>
        </OrderAsideCart>

       
         
        </div>
      </section> 
</>
  )
}

export default Order