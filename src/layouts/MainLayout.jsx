import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import { MyContextProvider } from "../context/MyContext";

const MainLayout = () => {
  return (
    <div>
      <MyContextProvider>
        <Outlet />
      </MyContextProvider>
    </div>
  );
};

export default MainLayout;
