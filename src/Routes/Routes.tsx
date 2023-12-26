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

import Profile from "../pages/Dashboard/Profile/Profile";
import MentorsDashboard from "../pages/Dashboard/Mentors/MentorsDashboard/MentorsDashboard";
import Wallet from "../pages/Dashboard/Wallet/Wallet";
import Setting from "../pages/Dashboard/Setting/Setting";
import LoginActivity from "../component/LoginActivity/LoginActivity";
import Notification from "../component/Notification/Notification";
import StudentDashbord from "../pages/Dashboard/StudentDashboard/StudentDashbord";
import StudentEnrolledCourse from "../pages/Dashboard/StudentDashboard/StudentEnrolledCourse/StudentEnrolledCourse";
import EditModuleList from "../pages/Dashboard/Courses/EditCourse/EditModuleList";
import PrivateRoute from "./PrivateRoutes";

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
        path: "/admin/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard></Dashboard>
          </PrivateRoute>
        ),
      },
      {
        path: "/profile/:id",
        element: <Profile />,
      },
      {
        path: "/:role/class-schedule",
        element: <ClassSchedule />,
      },
      {
        path: "/admin/students",
        element: <Students></Students>,
      },
      {
        path: "/admin/courses",
        element: <Courses></Courses>,
      },
      {
        path: "/admin/courses/add",
        element: <Addcourse></Addcourse>,
      },
      {
        path: "/admin/courses/edit/:id",
        element: <EditCourse></EditCourse>,
      },
      {
        path: "/courses/edit/modulelist/:id",
        element: <EditModuleList></EditModuleList>,
      },
      {
        path: "/admin/mentors",
        element: <Mentors />,
      },

      {
        path: "/admin/departments",
        element: <Department />,
      },
      {
        path: "/admin/departments",
        element: <Department />,
      },
      {
        path: "/admin/department/edit/:id",
        element: <EditDepartment />,
      },
      {
        path: "/admin/attendence",
        element: <Attendence />,
      },
      {
        path: "/admin/events",
        element: <Events />,
      },

      {
        path: "/admin/wallet",
        element: <Wallet />,
      },
      // =========================================student route part ======================================================================
      {
        path: "/student/dashboard",
        element: <StudentDashbord />,
      },

      {
        path: "/student/dashboard/course/:id/:moduleName/:videoId",
        element: <StudentEnrolledCourse />,
      },
      // =========================================mentor route part =================================================================
      {
        path: "/mentor/dashboard",
        element: <MentorsDashboard />,
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
