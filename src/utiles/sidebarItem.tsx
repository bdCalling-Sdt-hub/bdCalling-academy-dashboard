import { MdOutlineDashboard } from "react-icons/md";
import { GoPeople } from "react-icons/go";
import { BsBook } from "react-icons/bs";


export const sidebarItems = [
    {
      key:"/dashboard",
      label:"Dashboard",
      icon:<MdOutlineDashboard/>
    },
    {
      key:"/students",
      label:"Students",
      icon:<GoPeople/>,
   
    },
    {
      key:"/courses",
      label:"Courses",
      icon:<BsBook/>
    },
    {
      key:"/mentors",
      label:"Mentors"
    },
    {
      key:"/departments",
      label:"Departments"
    },
    {
      key:"/attendence",
      label:"Attendence"
    },
    {
      key:"/class-schedule",
      label:"Class Schedule"
    },
    {
      key:"/wallet",
      label:"Wallet"
    },
    {
      key:"/Setting",
      label:"setting"
    },
    {
      key:"/logout",
      label:"Log Out"
    },
  ]