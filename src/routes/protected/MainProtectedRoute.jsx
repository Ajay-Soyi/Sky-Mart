import React from "react";
import { useContext } from "react";
import { MyStore } from "../../context/MyContext";
import { Navigate, useNavigate } from "react-router";
import { Outlet } from "react-router";
import { toast } from "react-toastify";

const MainProtectedRoute = () => {
  const { loggedInUser } = useContext(MyStore);

  if (!loggedInUser) {
    toast.error("Unauthorized user");
    return <Navigate to={"/"} />;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default MainProtectedRoute;
