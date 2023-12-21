/* eslint-disable @typescript-eslint/no-explicit-any */
import { useLocation } from "react-router-dom";

import { useState } from "react";
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
} from "antd";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { sidebarItems } from "../utiles/sidebarItem";
import { sidebardThemes } from "../themes/Index";

const { Header, Sider, Content } = Layout;
const DashboardLayout = () => {
  // const [selectedKey, setSelectedKey] = useState(sidebarItems[0].key);
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState();
  const { pathname } = useLocation();

  const selectedKey = sidebarItems.find((item) =>
    pathname.startsWith(item.key)
  )?.key;

  console.log(selectedKey);
  console.log(pathname);
  const handleSelectLanguage = (value: any) => {
    setSelectedLanguage(value);
    // i18n.changeLanguage(selectedLanguage);
    localStorage.setItem("lang", value);
  };
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const handleMenuSelect = ({ key }: { key: string }) => {
    // setSelectedKey(key);
    if (key === "/logout") {
      console.log("dsfmks");
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
            style={{
              backgroundColor: "#2492EB",
              color: "white",
              marginTop: "10px",
            }}
            selectedKeys={[selectedKey ? selectedKey : "/dashboard"]}
            // defaultSelectedKeys={[sidebarItems[0].key]}
            items={sidebarItems}
            onClick={handleMenuSelect}
          ></Menu>
        </Sider>

        <Layout>
          <Header
            style={{
              position: "fixed",
              width: "100vw",
              height: "80px",
              zIndex: 1,
              padding: 0,
              background: colorBgContainer,
              display: "flex",
              justifyContent: "space-between",
              paddingRight: "60px",
            }}
          >
            <div className="" style={{ display: "flex", alignItems: "center" }}>
              <Button
                type="text"
                icon={collapsed ? <MenuOutlined /> : <MenuOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                style={{
                  marginLeft: collapsed ? "125px" : "360px",
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
                  onChange={handleSelectLanguage}
                ></Select>
              </div>
              <div>
                <Link to="/notification " className="flex items-center">
                  <Badge count={5} className="cursor-pointer">
                    <IoIosNotificationsOutline
                      style={{ width: "30px", height: "30px" }}
                    />
                  </Badge>
                </Link>
              </div>
              <div className="ms-[20px]">
                <div className="flex items-center gap-x-4">
                  <img
                    src="https://t.ly/18Nvk"
                    className="w-[40px] h-[40px] object-cover rounded-full"
                    alt=""
                  />

                  <div className="my-[2px]">
                    <h1 className="font-semibold">Mr. Admin John Doe</h1>
                  </div>
                </div>
              </div>
            </div>
          </Header>
          <Content
            style={{
              marginTop: "120px",
              marginBottom: "50px",
              marginLeft: collapsed ? "130px" : "360px",
              marginRight: "60px",
              background: "#e6e7f4",

              padding: 50,
              minHeight: 280,
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
