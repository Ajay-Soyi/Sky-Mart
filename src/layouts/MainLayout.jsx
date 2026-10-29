import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import { MyContextProvider } from "../context/MyContext";
import { ToastContainer } from "react-toastify";

const MainLayout = () => {
  return (
    <div>
      <ToastContainer />
      <Outlet />
    </div>
  );
};

export default MainLayout;
