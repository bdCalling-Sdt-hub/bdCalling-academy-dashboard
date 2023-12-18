import { createBrowserRouter } from "react-router-dom";

import SignIn from "../pages/Signin/Signin";
import Email from "../pages/ForgetPassword/Email/Email";
import Otp from "../pages/ForgetPassword/Otp/Otp";
import UpdatePassword from "../pages/ForgetPassword/updatePassword/UpdatePassword";
import Dashboardlayout from "../Layout/DashboardLayout";
import Dashboard from "../pages/Dashboard/Dashboard";
import Students from "../pages/Dashboard/Students/Students";

import Courses from "../pages/Dashboard/Courses/Courses";
import Addcourse from "../pages/Dashboard/Courses/Addcourse/Addcourse";
import EditCourse from "../pages/Dashboard/Courses/EditCourse/EditCourse";
import Mentors from "../pages/Dashboard/Mentors/Mentors";
import Department from "../pages/Dashboard/Department/Department";
import EditDepartment from "../pages/Dashboard/Department/EditDepartment/EditDepartment";
import Attendence from "../pages/Dashboard/Attendence/Attendence";
import Events from "../pages/Dashboard/Events/Events";
import ClassSchedule from "../pages/Dashboard/Class-Schedule/Class-Schedule";
import StudentProfile from "../pages/Dashboard/Students/EditStudent/StudentProfile";
import Profile from "../pages/Dashboard/Profile/Profile";
import MentorsDashboard from "../pages/Dashboard/Mentors/MentorsDashboard/MentorsDashboard";
import Wallet from "../pages/Dashboard/Wallet/Wallet";
import Setting from "../pages/Dashboard/Setting/Setting";
import LoginActivity from "../component/LoginActivity/LoginActivity";
import Notification from "../component/Notification/Notification";
import StudentDashbord from "../pages/Dashboard/StudentDashboard/StudentDashbord";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboardlayout></Dashboardlayout>,
    children: [
      {
        path: "/",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/students",
        element: <Students></Students>,
      },
      {
        path: "/profile/:id",
        element: <Profile />,
      },
      {
        path: "/students/profile/:id",
        element: <StudentProfile></StudentProfile>,
      },
      {
        path: "/student/dashboard",
        element: <StudentDashbord />,
      },
      {
        path: "/courses",
        element: <Courses></Courses>,
      },
      {
        path: "/courses/add",
        element: <Addcourse></Addcourse>,
      },
      {
        path: "/courses/edit/:id",
        element: <EditCourse></EditCourse>,
      },
      {
        path: "/mentors",
        element: <Mentors />,
      },
      {
        path: "/MentorsDashboard",
        element: <MentorsDashboard />,
      },
      {
        path: "/departments",
        element: <Department />,
      },
      {
        path: "/departments",
        element: <Department />,
      },
      {
        path: "/department/edit/:id",
        element: <EditDepartment />,
      },
      {
        path: "/attendence",
        element: <Attendence />,
      },
      {
        path: "/events",
        element: <Events />,
      },
      {
        path: "/class-schedule",
        element: <ClassSchedule />,
      },
      {
        path: "/wallet",
        element: <Wallet />,
      },
      {
        path: "/setting",
        element: <Setting />,
      },
      {
        path: "/setting/login-activity",
        element: <LoginActivity />,
      },
      {
        path: "/notification",
        element: <Notification />,
      },
    ],
  },
  {
    path: "/signin",
    element: <SignIn></SignIn>,
  },
  {
    path: "/forgetpassword/email",
    element: <Email></Email>,
  },
  {
    path: "/forgetpassword/otp",
    element: <Otp></Otp>,
  },
  {
    path: "/forgetpassword/update",
    element: <UpdatePassword></UpdatePassword>,
  },
]);
