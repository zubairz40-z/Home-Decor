import React from 'react';
import { createBrowserRouter } from 'react-router';
import Home from '../Pages/Home';
import Products from '../Pages/Products';
import MainLayout from '../Layouts/MainLayout';
import Error from '../Pages/Error';
import Wishlist from '../Pages/Wishlist';

const router = createBrowserRouter([
  {
    path: '/', // main layout
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true, // default page at "/"
        element: <Home />,
        loader: () => fetch('./furnitureData.json').then((res) => res.json()), // optional loader
      },
      {
        path: 'home', // optional explicit home path
        element: <Home />,
        loader: () => fetch('./furnitureData.json').then((res) => res.json()),
      },
      {
        path: 'products', // Products page
        element: <Products />,
        loader: () => fetch('./furnitureData.json').then((res) => res.json()),
      },
      {
        path: 'wishlist', // Wishlist page
        element: <Wishlist />,
      },
    ],
  },
  {
    path: '*', // fallback for unmatched routes
    element: <Error />,
  },
]);

export default router;
