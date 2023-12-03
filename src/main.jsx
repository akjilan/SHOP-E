import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './mystyle.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Layout/Home.jsx'
import MyShops from './components/MyShops/MyShops.jsx'
import Order from './components/Order/Order.jsx'
import Inventory from './components/Inventory/Inventory.jsx'
import Login from './components/Login/Login.jsx'
import cardProductLoader from './Loaders/cardProductLoader.js'


const router = createBrowserRouter([
  {
    path:'/',
    element:<Home></Home>,
    children:[
      {
        path:'/',
        element:<MyShops></MyShops>,
      },
      {
        path:'/order',
        element:<Order></Order>,
        loader:cardProductLoader
      },
      {
        path:'/inventory',
        element:<Inventory></Inventory>
      },
      {
        path:'login',
        element:<Login></Login>
      }
    ]

  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
