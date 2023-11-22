import React from 'react';

import {createBrowserRouter} from "react-router-dom";
import MainLayout from '../Pages/MainLayout/MainLayout';
import Home from '../Pages/Home/Home';
import Menu from '../Pages/Menu/Menu';
import OrderFood from '../Pages/OrderFood/OrderFood';

  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/menu",
          element: <Menu></Menu>,
        },
        {
          path: "/order/:category",
          element: <OrderFood></OrderFood>,
        },
      ],
    },
  ]);

export default router ;