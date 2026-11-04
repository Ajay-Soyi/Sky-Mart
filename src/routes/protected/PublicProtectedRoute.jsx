import React, { useContext } from "react";
import { MyStore } from "../../context/MyContext";
import { toast } from "react-toastify";
import { Navigate, Outlet } from "react-router";

const PublicProtectedRoute = () => {
  const { loggedInUser } = useContext(MyStore);

  if (loggedInUser) return <Navigate to={"/main"} />;

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default PublicProtectedRoute;
