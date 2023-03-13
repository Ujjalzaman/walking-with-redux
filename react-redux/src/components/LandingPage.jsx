import React from 'react'
import Header from './Header';
import AddProduct from './AddProduct';
import Cart from './Cart';


import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

const router = createBrowserRouter([
    {
      path: "/",
      element: <AddProduct />,
    },
    {
      path: "/cart",
      element: <Cart />,
    },
  ]);
const LandingPage = () => {
  return (
    <RouterProvider router={router}>
        <Header/>
    </RouterProvider>
  )
}

export default LandingPage