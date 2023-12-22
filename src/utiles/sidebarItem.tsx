import { MdOutlineDashboard } from "react-icons/md";
import { GoPeople } from "react-icons/go";
import { BsBook } from "react-icons/bs";
import { IoPersonCircleOutline } from "react-icons/io5";
import { LuFolders } from "react-icons/lu";
import { PiIdentificationCard } from "react-icons/pi";
import { BsCalendar2Event } from "react-icons/bs";
import { LuClipboardList } from "react-icons/lu";
import { HiOutlineCreditCard } from "react-icons/hi";
import { IoSettingsOutline } from "react-icons/io5";

import { LoginOutlined } from "@ant-design/icons";

const id = 1;
export const sidebarItems = [
  {
    key: "/dashboard",
    label: "Dashboard",
    icon: <MdOutlineDashboard />,
  },
  {
    key: "/students",
    label: "Students",
    icon: <GoPeople />,
  },
  {
    key: "/student/dashboard",
    label: "StudentDashboard",
    icon: <GoPeople />,
  },
  {
    key: `/profile/${id}`,
    label: "Profile",
    icon: <GoPeople />,
  },
  {
    key: "/courses",
    label: "Courses",
    icon: <BsBook />,
    children: [
      {
        key: "/courses",
        label: "All Courses",
      },
    ],
  },
  {
    key: "/mentors",
    label: "Mentors",
    icon: <IoPersonCircleOutline />,
  },
  {
    key: "/MentorsDashboard",
    label: "MentorsDashboard",
    icon: <IoPersonCircleOutline />,
  },
  {
    key: "/departments",
    label: "Departments",
    icon: <LuFolders />,
  },
  {
    key: "/attendence",
    label: "Attendence",
    icon: <PiIdentificationCard />,
  },
  {
    key: "/events",
    label: "Events",
    icon: <BsCalendar2Event />,
  },
  {
    key: "/class-schedule",
    label: "Class Schedule",
    icon: <LuClipboardList />,
  },
  {
    key: "/wallet",
    label: "Wallet",
    icon: <HiOutlineCreditCard />,
  },
  {
    key: "/setting",
    label: "setting",
    icon: <IoSettingsOutline />,
  },
  {
    key: "/divider",
    label: "divider",
    style: { margin: 0, border: 0, flexGrow: 1, visibility: "hidden" },
  },
  {
    key: "/logout",
    label: "Log Out",
    icon: <LoginOutlined />,
  },
];
