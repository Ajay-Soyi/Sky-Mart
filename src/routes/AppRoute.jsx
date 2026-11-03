import { createBrowserRouter, RouterProvider } from "react-router";
import React from "react";
import Home from "../pages/Home";
import { lazy } from "react";
import { Suspense } from "react";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/LoginPage";
import Signup from "../pages/Signup";
import MainProtectedRoute from "./protected/MainProtectedRoute";
import ForgotPassword from "../pages/ForgotPassword";
import OrdersPage from "../pages/OrderPage";

let ProductsPage = lazy(() => import("../pages/ProductsPage"));
let MainLayout = lazy(() => import("../layouts/MainLayout"));
let AccountPage = lazy(() => import("../pages/AccountPage"));
let WishlistPage = lazy(() => import("../pages/WishlistPage"));
let CartPage = lazy(() => import("../pages/CartPage"));
let ProductsDetail = lazy(() => import("../pages/ProductsDetail"));

const AppRoute = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AuthLayout />,
      children: [
        {
          path: "",
          element: <Login />,
        },
        {
          path: "signup",
          element: <Signup />,
        },
        {
          path: "forgot-password",
          element: <ForgotPassword />,
        },
      ],
    },
    {
      path: "/main",
      element: <MainProtectedRoute />,
      children: [
        {
          path: "",
          element: <MainLayout />,
          children: [
            {
              path: "",
              element: <Home />,
            },
            {
              path: "products",
              children: [
                {
                  path: ":category",
                  element: (
                    <Suspense fallback={<h1>Loading data...</h1>}>
                      <ProductsPage />
                    </Suspense>
                  ),
                },
                {
                  path: "details/:id",
                  element: (
                    <Suspense fallback={<h1>Loading data...</h1>}>
                      <ProductsDetail />
                    </Suspense>
                  ),
                },
              ],
            },
            {
              path: "account",
              element: (
                <Suspense fallback={<h1>Loading data...</h1>}>
                  <AccountPage />
                </Suspense>
              ),
            },
            {
              path: "wishlist",
              element: (
                <Suspense fallback={<h1>Loading data...</h1>}>
                  <WishlistPage />
                </Suspense>
              ),
            },
            {
              path: "cart",
              element: (
                <Suspense fallback={<h1>Loading data...</h1>}>
                  <CartPage />
                </Suspense>
              ),
            },
            {
              path: "orders",
              element: (
                <Suspense fallback={<h1>Loading data...</h1>}>
                  <OrdersPage />
                </Suspense>
              ),
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoute;
