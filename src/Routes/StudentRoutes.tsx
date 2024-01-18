/* eslint-disable @typescript-eslint/no-explicit-any */

import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { USER_ROLE } from "../constants/role";
import { useAppSelector } from "../redux/hooks";
import {
  useCurrentGetUser,
  useCurrentToken,
} from "../redux/features/auth/authSlice";

const StudentRoutes = ({ children }: { children: ReactNode }) => {
  const token = useAppSelector(useCurrentToken);
  const user: any = useAppSelector(useCurrentGetUser);

  if (token && user && user.userType === USER_ROLE.STUDENT) {
    return children;
  }
  return <Navigate to="/signin" state={{ from: location }} replace></Navigate>;
};

export default StudentRoutes;
