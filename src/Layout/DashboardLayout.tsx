/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../assets/logo.svg";
import { MenuOutlined, SearchOutlined } from "@ant-design/icons";
import { IoIosNotificationsOutline } from "react-icons/io";
import {
  Layout,
  Menu,
  Button,
  theme,
  Input,
  Badge,
  ConfigProvider,
  Select,
  Dropdown,
  MenuProps,
} from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import { sidebardThemes } from "../themes/Index";

import { logout, useCurrentUser } from "../redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { useGetmyprofileQuery } from "../redux/api/authApi";
import { IMAGE_BASE_URL } from "../utils/Common";
import { SidebarItems } from "../constants/SidebarItems";

interface Inotification {
  id: string;
  image: string;
  name: string;
  description: string;
  time: string;
  // Add other properties if they exist in your data
}
const { Header, Sider, Content } = Layout;
const DashboardLayout = () => {
  const navigate = useNavigate();
  const { data: profileData }: any = useGetmyprofileQuery(undefined);

  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState();

  const { userType: role }: any = useAppSelector(useCurrentUser);
  console.log("userType", role);
  const [notifications, setnotifications] = useState<Inotification[]>([]);
  useEffect(() => {
    fetch("/notification.json")
      .then((res) => res.json())
      .then((data) => setnotifications(data));
  }, []);

  // const selectedKey =
  //   // @ts-ignore
  //   sidebarItems(role)?.find((item) => pathname.startsWith(item.key))?.key ||
  //   `/${role}/dashboard`;

  const handleSelectLanguage = (value: any) => {
    setSelectedLanguage(value);
    localStorage.setItem("lang", value);
  };

  const notificationItems = notifications.slice(0, 3).map((notification) => {
    return {
      key: notification.id,
      label: (
        <div className="flex justify-between items-center p-2 bg-[#fff]  rounded-lg ">
          <div className="flex gap-x-2">
            <img
              src={notification.image}
              alt=""
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
            <div>
              <p>{notification.name}</p>
              <p className="text-[#4E4E4E]">{notification.description}</p>
              <p className="text-[#4E4E4E]">{notification.time}</p>
            </div>
          </div>
        </div>
      ),
    };
  });
  const items: MenuProps["items"] = [
    ...notificationItems,
    {
      key: "button",
      label: (
        <button
          onClick={() => navigate("/notification")}
          className=" w-full mb-2 bg-customPrimary py-2 rounded-sm text-[#fff] font-semibold"
        >
          See All
        </button>
      ),
    },
  ];

  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const handleMenuSelect = ({ key }: { key: string }) => {
    // setSelectedKey(key);
    if (key === "/logout") {
      dispatch(logout());
      navigate("/signin");
    } else {
      navigate(key);
    }
  };

  const options = [
    {
      value: "english",
      label: (
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src="https://cdn.britannica.com/29/22529-004-ED1907BE/Union-Flag-Cross-St-Andrew-of-George.jpg"
            alt="English"
            style={{ marginRight: 8, width: 16, height: 16 }}
          />
          English
        </div>
      ),
    },
  ];
  return (
    <ConfigProvider theme={sidebardThemes}>
      <Layout>
        <Sider
          width="220px"
          trigger={null}
          collapsible
          collapsed={collapsed}
          style={{
            backgroundColor: "#2492EB",
            height: "100vh",

            zIndex: 2,
            overflow: "auto",
            position: "fixed",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              height: "inherit",
            }}
          >
            <div className="demo-logo-vertical" />
            <div
              style={{
                backgroundColor: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100px",
              }}
            >
              <img
                style={{
                  height: "40px",
                  width: "180px",
                }}
                src={logo}
                alt=""
              />
            </div>
            <Menu
              mode="inline"
              style={{
                backgroundColor: "#2492EB",
                color: "white",
                marginTop: "10px",
                flexGrow: 1,
                display: "flex",
                flexDirection: "column",
                paddingBlockEnd: "1rem",
                // height: "100%",
              }}
              selectedKeys={[pathname]}
              // defaultSelectedKeys={[sidebarItems[0].key]}

              // @ts-ignore
              items={SidebarItems(role)}
              onClick={handleMenuSelect}
            ></Menu>
          </div>
        </Sider>

        <Layout>
          <Header
            style={{
              position: "fixed",
              width: "100vw",
              height: "100px",
              zIndex: 1,
              padding: 0,
              background: colorBgContainer,
              display: "flex",
              justifyContent: "space-between",
              paddingRight: "65px",
              // paddingRight: "60px",
            }}
          >
            <div className="" style={{ display: "flex", alignItems: "center" }}>
              <Button
                type="text"
                icon={collapsed ? <MenuOutlined /> : <MenuOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                style={{
                  marginLeft: collapsed ? "130px" : "270px",
                  fontSize: "16px",
                  width: 45,
                  height: 45,
                  marginRight: "10px",
                }}
              />
              <ConfigProvider
                theme={{
                  components: {
                    Input: {
                      colorBgContainer: "rgb(244, 244, 244)",
                    },
                  },
                }}
              >
                <Input
                  allowClear={true}
                  prefix={<SearchOutlined className="text-[#A7A7A7] " />}
                  placeholder="search here"
                  className="h-[50px] w-[461px] border-0"
                />
              </ConfigProvider>
            </div>

            <div
              style={{ display: "flex", alignItems: "center", lineHeight: 0 }}
            >
              <div className="" style={{ marginRight: "20px" }}>
                <Select
                  options={options}
                  defaultValue={options[0]}
                  value={selectedLanguage}
                  style={{ width: 150 }}
                  placeholder="dsfsdafd"
                  onChange={handleSelectLanguage}
                ></Select>
              </div>

              <Dropdown menu={{ items }} arrow>
                <Badge count={5} className="cursor-pointer">
                  <IoIosNotificationsOutline
                    style={{ width: "30px", height: "30px" }}
                  />
                </Badge>
              </Dropdown>

              <div className="ms-[20px]">
                <div className="flex items-center gap-x-4">
                  <img
                    src={`${IMAGE_BASE_URL}/${profileData?.user?.image}`}
                    className="w-[40px] h-[40px] object-cover rounded-full"
                    alt=""
                  />

                  <div className="my-[2px]">
                    <h1 className="font-semibold">
                      {profileData?.user?.fullName}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </Header>
          <Content
            style={{
              paddingTop: "130px",

              paddingLeft: collapsed ? "130px" : "270px",
              paddingRight: "50px",
              background: "#F6F8FA",

              overflow: "auto",
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};

export default DashboardLayout;
