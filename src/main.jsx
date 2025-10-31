import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router';
import router from './Routes/Routes.jsx';

// Create the router
// const router = createBrowserRouter([
//   {
//     path: '/secret', // ✅ starts with /
//     element: <App />,
//   },
// ]);

// Render the app
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
