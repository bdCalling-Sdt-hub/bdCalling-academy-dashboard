/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Spin } from "antd";
import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { getuserInfo } from "../service/auth.service";
import { USER_ROLE } from "../constants/role";
import { userKey } from "../constants/authKey";
import { useAppSelector } from "../redux/hooks";
import {
  useCurrentToken,
  useCurrentUser,
} from "../redux/features/auth/authSlice";
interface AdminRoutesProps {
  children?: ReactNode;
}

const AdminRoutes = ({ children }: AdminRoutesProps) => {
  const token: any = useAppSelector(useCurrentToken);
  const user: any = useAppSelector(useCurrentUser);

  if (token && user && user.userType === USER_ROLE.ADMIN) {
    return children;
  }
  return <Navigate to="/signin" state={{ from: location }} replace></Navigate>;
};

export default AdminRoutes;
