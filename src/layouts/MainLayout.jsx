import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import { MyContextProvider } from "../context/MyContext";
import { ToastContainer } from "react-toastify";

const MainLayout = () => {
  return (
    <div>
      <MyContextProvider>
        <ToastContainer />
        <Outlet />
      </MyContextProvider>
    </div>
  );
};

export default MainLayout;
