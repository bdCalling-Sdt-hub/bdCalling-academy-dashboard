import { Spin } from "antd";
import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { getuserInfo } from "../service/auth.service";
import { USER_ROLE } from "../constants/role";
import { userKey } from "../constants/authKey";

const MentorRoutes = ({ children: Children }: { children: ReactNode }) => {
  const loading = false;
  const user = getuserInfo(userKey);
  const location = useLocation();
  if (loading) {
    return <Spin />;
  }

  if (user && user.role === USER_ROLE.MENTOR) {
    return Children;
  }
  return <Navigate to="/signin" state={{ from: location }} replace></Navigate>;
};

export default MentorRoutes;
