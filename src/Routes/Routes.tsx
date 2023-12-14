import { createBrowserRouter } from "react-router-dom";

import SignIn from "../pages/Signin/Signin";
import Email from "../pages/ForgetPassword/Email/Email";
import Otp from "../pages/ForgetPassword/Otp/Otp";
import UpdatePassword from "../pages/ForgetPassword/updatePassword/UpdatePassword";
import Dashboardlayout from "../Layout/DashboardLayout";
import Dashboard from "../pages/Dashboard/Dashboard";
import Students from "../pages/Dashboard/Students/Students";
import EditStudents from "../pages/Dashboard/Students/EditStudent/EditStudents";
import Courses from "../pages/Dashboard/Courses/Courses";
import Addcourse from "../pages/Dashboard/Courses/Addcourse/Addcourse";
import EditCourse from "../pages/Dashboard/Courses/EditCourse/EditCourse";
import Mentors from "../pages/Dashboard/Mentors/Mentors";
import Department from "../pages/Dashboard/Department/Department";
import EditDepartment from "../pages/Dashboard/Department/EditDepartment/EditDepartment";
import Attendence from "../pages/Dashboard/Attendence/Attendence";
import Events from "../pages/Dashboard/Events/Events";
import ClassSchedule from "../pages/Dashboard/Class-Schedule/Class-Schedule";

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
        path: "/students/edit/:id",
        element: <EditStudents></EditStudents>,
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
