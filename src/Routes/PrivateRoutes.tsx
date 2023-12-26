import { Spin } from "antd";
import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { getuser } from "../service/auth.service";
interface PrivateRouteProps {
  children: ReactNode;
}
const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const loading = false;
  const user = getuser("user");
  const location = useLocation();

  if (loading) {
    return <Spin />;
  }

  if (user && user.role) {
    return children;
  }
  return <Navigate to="/signin" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
