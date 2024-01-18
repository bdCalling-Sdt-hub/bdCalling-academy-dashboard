import { Spin } from "antd";
import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { getuserInfo } from "../service/auth.service";

import { userKey } from "../constants/authKey";

const PrivateRoutes = ({ children }: { children: ReactNode }) => {
  const loading = false;
  const user = getuserInfo(userKey);
  const location = useLocation();
  if (loading) {
    return <Spin />;
  }

  if (user && user.role) {
    return children;
  }
  return <Navigate to="/signin" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoutes;
