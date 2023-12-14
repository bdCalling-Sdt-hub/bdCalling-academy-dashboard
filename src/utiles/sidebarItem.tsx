import { MdOutlineDashboard } from "react-icons/md";
import { GoPeople } from "react-icons/go";
import { BsBook } from "react-icons/bs";
import { IoPersonCircleOutline } from "react-icons/io5";
import { LuFolders } from "react-icons/lu";
import { PiIdentificationCard } from "react-icons/pi";
import { BsCalendar2Event } from "react-icons/bs";

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
    key: "/courses",
    label: "Courses",
    icon: <BsBook />,
  },
  {
    key: "/mentors",
    label: "Mentors",
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
  },
  {
    key: "/wallet",
    label: "Wallet",
  },
  {
    key: "/Setting",
    label: "setting",
  },
  {
    key: "/logout",
    label: "Log Out",
  },
];
