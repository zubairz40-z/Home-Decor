import React from 'react';
import { createBrowserRouter } from 'react-router';
import App from '../App';
import Home from '../Pages/Home';
import Products from '../Pages/Products';
import MainLayout from '../Layouts/MainLayout';
import Error from '../Pages/Error';
import Wishlist from '../Pages/Wishlist';

// Named export
const router = createBrowserRouter([
  {
    path: '/', // main layout
    element: <MainLayout />,
    errorElement: <Error />,
    hydrateFallbackElement: <p>Loading....</p>,
    children: [
      {
        path: 'home', // child routes do NOT need leading slash
        element: <Home />,
        loader: () => fetch('./furnitureData.json'),
      },
      {
        path: 'products', // now Products will also render inside MainLayout
        element: <Products />,
      },
      {
        path: '', // optional index route for default page
        element: <Home />,
      },
      {
        path: 'wishlist',
        element: <Wishlist />,
      },
    ],
  },
  {
    path: '*',
    element: <Error />,
  },
]);

export default router;
