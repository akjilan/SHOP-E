import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./mystyle.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Layout/Home.jsx";
import MyShops from "./components/MyShops/MyShops.jsx";
import Order from "./components/Order/Order.jsx";
import Inventory from "./components/Inventory/Inventory.jsx";
import Login from "./components/Login/Login.jsx";
import cardProductLoader from "./Loaders/cardProductLoader.js";
import Checkout from "./components/Checkout/Checkout.jsx";
import Register from "./components/Register/Register.jsx";
import Usercontext from "./Context/Usercontext.jsx";
import PrivateRoute from "./routes/PrivateRoute.jsx";
import Shipping from "./components/Shipping/Shipping.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <MyShops></MyShops>,
      },
      {
        path: "/order",
        element: <Order></Order>,
        loader: cardProductLoader,
      },
      {
        path: "/inventory",
        element: <PrivateRoute> <Inventory></Inventory></PrivateRoute>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "shipping",
        element: (
          <PrivateRoute>
            {" "}
            <Shipping></Shipping>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Usercontext>
      <RouterProvider router={router}></RouterProvider>
    </Usercontext>
  </React.StrictMode>
);
