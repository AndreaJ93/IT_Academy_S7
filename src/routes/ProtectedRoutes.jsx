import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const ProtectedRoutes = () => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="logIn" state={{ from: location }} replace />;
  }
  return <Outlet />;
};

export default ProtectedRoutes;
