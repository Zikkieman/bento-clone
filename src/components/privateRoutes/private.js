import { useEffect, useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../../context/user.context";

function PrivateRoutes() {
  const { currentUser } = useContext(UserContext);

  return currentUser ? <Outlet /> : <Navigate to="/sign-in" />;
}

export default PrivateRoutes;
