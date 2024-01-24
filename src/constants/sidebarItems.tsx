import { LoginOutlined } from "@ant-design/icons";
import { MenuProps } from "antd";
import { BsBook, BsCalendar2Event } from "react-icons/bs";
import { GoPeople } from "react-icons/go";
import { HiOutlineCreditCard } from "react-icons/hi";
import { IoPersonCircleOutline, IoSettingsOutline } from "react-icons/io5";
import { LuClipboardList, LuFolders } from "react-icons/lu";
import { MdOutlineDashboard } from "react-icons/md";
import { PiIdentificationCard } from "react-icons/pi";
// import { useGetmyprofileQuery } from "../redux/api/authApi";
export const SidebarItems = (role: string) => {
  console.log(role);
  // const { data: userData } = useGetmyprofileQuery(undefined);
  // console.log(userData);
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
      key: `/`,
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
        {
          key: `/${role}/class/`,
          label: "Classes",
        },
      ],
    },
    {
      key: `/${role}/category`,
      label: "Category",
      icon: <IoPersonCircleOutline />,
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
  if (role === "SUPER_ADMIN") return adminSidebarItems;
  else if (role === "MENTOR") return mentorSidebarItems;
  else if (role === "STUDENT") return studentSidebarItmes;
};
