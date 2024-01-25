import { createBrowserRouter } from "react-router-dom";

import SignIn from "../pages/Signin/Signin";
import Email from "../pages/ForgetPassword/Email/Email";
import Otp from "../pages/ForgetPassword/SigninOtp/SigninOtp";

import Dashboardlayout from "../Layout/DashboardLayout";
import Dashboard from "../pages/Dashboard/Dashboard";
import Students from "../pages/Dashboard/Students/Students";
import Courses from "../pages/Dashboard/Courses/Courses";
import Addcourse from "../pages/Dashboard/Courses/Addcourse/Addcourse";

import Mentors from "../pages/Dashboard/Mentors/Mentors";
import Department from "../pages/Dashboard/Department/Department";
import EditDepartment from "../pages/Dashboard/Department/EditDepartment/EditDepartment";
import Attendence from "../pages/Dashboard/Attendence/Attendence";
import Events from "../pages/Dashboard/Events/Events";
import ClassSchedule from "../pages/Dashboard/Class-Schedule/Class-Schedule";

import Profile from "../pages/Dashboard/Profile/Profile";
import MentorsDashboard from "../pages/Dashboard/Mentors/MentorsDashboard/MentorsDashboard";
import Wallet from "../pages/Dashboard/Wallet/Wallet";
import Setting from "../pages/Dashboard/Setting/Setting";
import LoginActivity from "../component/LoginActivity/LoginActivity";
import Notification from "../component/Notification/Notification";
import StudentDashbord from "../pages/Dashboard/StudentDashboard/StudentDashbord";
import StudentEnrolledCourse from "../pages/Dashboard/StudentDashboard/StudentEnrolledCourse/StudentEnrolledCourse";
import EditModuleList from "../pages/Dashboard/Courses/EditCourse/EditModuleList";

import NotFound from "../NotFound";
import AdminRoutes from "./AdminRoutes";
import PrivateRoutes from "./PrivateRoutes";
import StudentRoutes from "./StudentRoutes";
import MentorRoutes from "./MentorRoutes";
import Category from "../pages/Dashboard/Category/Category";
import AddClass from "../pages/Dashboard/Classes/AddClasses/AddClass";
import EditCourse from "../pages/Dashboard/Courses/EditCourse/EditCourse";
import ResetPassword from "../pages/ForgetPassword/resetPassword/ResetPassword";

export const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <SignIn />,
  // },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/",
    element: (
      <PrivateRoutes>
        <Dashboardlayout></Dashboardlayout>
      </PrivateRoutes>
    ),
    children: [
      {
        path: "/",
        element: (
          <AdminRoutes>
            <Dashboard />
          </AdminRoutes>
        ),
      },
      {
        path: "/SUPER_ADMIN/dashboard",
        element: (
          <AdminRoutes>
            <Dashboard />
          </AdminRoutes>
        ),
      },
      {
        path: "/profile/:id",
        element: (
          <PrivateRoutes>
            <Profile />
          </PrivateRoutes>
        ),
      },
      {
        path: "/:role/class-schedule",
        element: (
          <PrivateRoutes>
            <ClassSchedule />
          </PrivateRoutes>
        ),
      },
      {
        path: "/SUPER_ADMIN/students",
        element: (
          <AdminRoutes>
            <Students></Students>
          </AdminRoutes>
        ),
      },
      {
        path: "/SUPER_ADMIN/courses",
        element: (
          <AdminRoutes>
            <Courses></Courses>
          </AdminRoutes>
        ),
      },

      {
        path: "/SUPER_ADMIN/courses/add",
        element: (
          <AdminRoutes>
            <Addcourse></Addcourse>
          </AdminRoutes>
        ),
      },
      {
        path: "/SUPER_ADMIN/courses/edit/:id",
        element: (
          <AdminRoutes>
            <EditCourse></EditCourse>
          </AdminRoutes>
        ),
      },
      {
        path: "/SUPER_ADMIN/class",
        element: (
          <AdminRoutes>
            <AddClass></AddClass>
          </AdminRoutes>
        ),
      },
      {
        path: "/SUPER_ADMIN/courses/edit/modulelist/:id",
        element: (
          <AdminRoutes>
            <EditModuleList></EditModuleList>
          </AdminRoutes>
        ),
      },
      {
        path: "/SUPER_ADMIN/mentors",
        element: (
          <AdminRoutes>
            <Mentors />
          </AdminRoutes>
        ),
      },

      {
        path: "/SUPER_ADMIN/category",
        element: (
          <AdminRoutes>
            <Category />
          </AdminRoutes>
        ),
      },
      {
        path: "/SUPER_ADMIN/departments",
        element: (
          <AdminRoutes>
            <Department />
          </AdminRoutes>
        ),
      },

      {
        path: "/SUPER_ADMIN/department/edit/:id",
        element: (
          <AdminRoutes>
            <EditDepartment />
          </AdminRoutes>
        ),
      },
      {
        path: "/SUPER_ADMIN/attendence",
        element: (
          <AdminRoutes>
            <Attendence />
          </AdminRoutes>
        ),
      },
      {
        path: "/SUPER_ADMIN/events",
        element: (
          <AdminRoutes>
            <Events />
          </AdminRoutes>
        ),
      },

      {
        path: "/SUPER_ADMIN/wallet",
        element: (
          <AdminRoutes>
            <Wallet />
          </AdminRoutes>
        ),
      },
      // =========================================student route part ======================================================================
      {
        path: "/STUDENT/dashboard",
        element: (
          <StudentRoutes>
            <StudentDashbord />
          </StudentRoutes>
        ),
      },

      {
        path: "/STUDENT/dashboard/course/:id/:moduleName/:videoId",
        element: (
          <StudentRoutes>
            <StudentEnrolledCourse />
          </StudentRoutes>
        ),
      },
      // =========================================mentor route part =================================================================
      {
        path: "/mentor/dashboard",
        element: (
          <MentorRoutes>
            <MentorsDashboard />
          </MentorRoutes>
        ),
      },
      {
        path: "/setting",
        element: (
          <AdminRoutes>
            <Setting />
          </AdminRoutes>
        ),
      },
      {
        path: "/setting/login-activity",
        element: (
          <AdminRoutes>
            <LoginActivity />
          </AdminRoutes>
        ),
      },
      {
        path: "/notification",
        element: <Notification />,
      },
    ],
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
    path: "/verified/:id",
    element: <ResetPassword></ResetPassword>,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
