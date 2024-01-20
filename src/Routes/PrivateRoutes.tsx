/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Spin } from "antd";
import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { getuserInfo } from "../service/auth.service";

import { userKey } from "../constants/authKey";
import { useAppSelector } from "../redux/hooks";
import {
  useCurrentToken,
  useCurrentUser,
} from "../redux/features/auth/authSlice";

const PrivateRoutes = ({ children }: { children: ReactNode }) => {
  const loading = false;
  const token: any = useAppSelector(useCurrentToken);
  const user: any = useAppSelector(useCurrentUser);
  if (loading) {
    return <Spin />;
  }

  if (user && token) {
    return children;
  }
  return <Navigate to="/signin" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoutes;
