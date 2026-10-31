import React from "react";
import { useContext } from "react";
import { MyStore } from "../../context/MyContext";
import { useNavigate } from "react-router";
import { Outlet } from "react-router";

const MainProtectedRoute = () => {
  const { loggedInUser } = useContext(MyStore);
  const navigate = useNavigate();

  if (!loggedInUser) {
    navigate("/");
    return;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default MainProtectedRoute;
