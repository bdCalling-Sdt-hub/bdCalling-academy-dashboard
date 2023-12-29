import { LoginOutlined } from "@ant-design/icons";
import { MenuProps } from "antd";
import { BsBook, BsCalendar2Event } from "react-icons/bs";
import { GoPeople } from "react-icons/go";
import { HiOutlineCreditCard } from "react-icons/hi";
import { IoPersonCircleOutline, IoSettingsOutline } from "react-icons/io5";
import { LuClipboardList, LuFolders } from "react-icons/lu";
import { MdOutlineDashboard } from "react-icons/md";
import { PiIdentificationCard } from "react-icons/pi";
export const sidebarItems = (role: string) => {
  const defaultSidebarItems: MenuProps["items"] = [
    {
      key: `/${role}/class-schedule`,
      label: "Class Schedule",
      icon: <LuClipboardList />,
    },
    {
      key: `/profile/${1}`,
      label: "Profile",
      icon: <GoPeople />,
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
  const adminSidebarItems: MenuProps["items"] = [
    {
      key: `/${role}/dashboard`,
      label: "Dashboard",
      icon: <MdOutlineDashboard />,
    },
    {
      key: `/${role}/students`,
      label: "Students",
      icon: <GoPeople />,
    },

    {
      key: `/${role}/courses`,
      label: "Courses",
      icon: <BsBook />,

      children: [
        {
          key: `/${role}/courses/`,
          label: "All Courses",
        },
      ],
    },
    {
      key: `/${role}/mentors`,
      label: "Mentors",
      icon: <IoPersonCircleOutline />,
    },

    {
      key: `/${role}/departments`,
      label: "Departments",
      icon: <LuFolders />,
    },
    {
      key: `/${role}/attendence`,
      label: "Attendence",
      icon: <PiIdentificationCard />,
    },
    {
      key: `/${role}/events`,
      label: "Events",
      icon: <BsCalendar2Event />,
    },
    ...defaultSidebarItems.slice(0, 1),
    {
      key: `/${role}/wallet`,
      label: "Wallet",
      icon: <HiOutlineCreditCard />,
    },
    {
      key: "/setting",
      label: "setting",
      icon: <IoSettingsOutline />,
    },
    ...defaultSidebarItems.slice(2),
  ];
  const mentorSidebarItems: MenuProps["items"] = [
    {
      key: `/${role}/dashboard`,
      label: "Dashboard",
      icon: <IoPersonCircleOutline />,
    },

    ...defaultSidebarItems,
  ];
  const studentSidebarItmes: MenuProps["items"] = [
    {
      key: `/${role}/dashboard`,
      label: "Dashboard",
      icon: <IoPersonCircleOutline />,
    },

    ...defaultSidebarItems,
  ];
  if (role === "admin") return adminSidebarItems;
  else if (role === "mentor") return mentorSidebarItems;
  else if (role === "student") return studentSidebarItmes;
};
