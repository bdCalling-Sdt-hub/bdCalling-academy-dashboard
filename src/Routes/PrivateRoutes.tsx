import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
interface PrivateRouteProps {
  children: ReactNode;
}
const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const loading = false;
  const user = {
    email: "@gmail.com",
  };
  const location = useLocation();

  if (loading) {
    return <progress className="progress w-56"></progress>;
  }

  if (user) {
    return children;
  }
  return <Navigate to="/signin" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
