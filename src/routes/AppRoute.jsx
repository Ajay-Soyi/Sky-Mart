import { createBrowserRouter, RouterProvider } from "react-router";
import React from "react";
import Home from "../pages/Home";
import ProductsPage from "../pages/ProductsPage";

const AppRoute = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: ":category",
          element: <ProductsPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoute;
