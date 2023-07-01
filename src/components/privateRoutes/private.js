import { useEffect, useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { UserContext } from "../../context/user.context";

function PrivateRoutes() {
  const location = useLocation();
  const { currentUser } = useContext(UserContext);

  return currentUser ? (
    <Outlet />
  ) : (
    <Navigate to="/sign-in" replace state={{ from: location }} />
  );
}

export default PrivateRoutes;
