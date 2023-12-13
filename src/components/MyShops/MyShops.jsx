import React from "react";
import { useState, useEffect } from "react";
import ShopCartMain from "../../assets/utils/Hero/ShopCartMain";
import ShopCartAside from "../../assets/utils/Hero/ShopCartAside";
import {
  addToDb,
  deleteShoppingCart,
  getShoppingCart,
} from "../../assets/utilities/fakedb";
import { Link } from "react-router-dom";

const MyShops = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json"
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // console.log(products);
  useEffect(() => {
    const storedCart = getShoppingCart();
    const savedCart = [];
    // console.log(storedCart);
    // console.log(products);
    for (const id in storedCart) {
      const addedProduct = products.find((product) => product.id === id);
      //  console.log(addedProduct);
      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
    }
    setCart(savedCart);
  }, [products]);

  const handleAddToCart = (selectedProduct) => {
    // console.log(product);
    let newCart = [];
    const exists = cart.find((product) => product.id === selectedProduct.id);
    if (!exists) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else {
      const rest = products.filter(
        (product) => product.id !== selectedProduct.id
      );
      selectedProduct.quantity += 1;
      newCart = [...rest, exists];
    }
    setCart(newCart);
    addToDb(selectedProduct.id);
  };

  const handleClearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };
  return (
    <>
      <section className="flex">
        <div className="cart md:content-centergap-5 md:justify-center pt-5 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] rounded-lg border-2 border-green-200 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:p-24 sm:p-5 sm:w-1/2 md:w-2/3 lg:w-4/5 md:space-x-3 w-1/2">
          {products.map((product) => (
            <ShopCartMain
              key={product.id}
              product={product}
              name={product.name}
              handleAddToCart={() => handleAddToCart(product)}
            ></ShopCartMain>
          ))}
        </div>

        <div className="cartAside sm:w-1/2 md:w-1/3 lg:w-1/5 sm:align-middle  w-1/2">
          <ShopCartAside cart={cart} handleClearCart={handleClearCart}>
            <Link to="/order">
              <button>review order</button>
            </Link>
          </ShopCartAside>
        </div>
      </section>
    </>
  );
};

export default MyShops;
