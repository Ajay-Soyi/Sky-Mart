import { createBrowserRouter, RouterProvider } from "react-router";
import React from "react";
import Home from "../pages/Home";
import ProductsPage from "../pages/ProductsPage";
import MainLayout from "../layouts/MainLayout";
import AccountPage from "../pages/AccountPage";
import WishlistPage from "../pages/WishlistPage";
import CartPage from "../pages/CartPage";

const AppRoute = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "products/:category",
          element: <ProductsPage />,
        },
        {
          path: "account",
          element: <AccountPage />,
        },
        {
          path: "wishlist",
          element: <WishlistPage />,
        },
        {
          path: "cart",
          element: <CartPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoute;
