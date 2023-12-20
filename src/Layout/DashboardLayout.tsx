/* eslint-disable @typescript-eslint/no-explicit-any */
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
import { Outlet, useNavigate } from "react-router-dom";
import { sidebarItems } from "../utiles/sidebarItem";
import { sidebardThemes } from "../themes/Index";
const { Header, Sider, Content } = Layout;
const DashboardLayout = () => {
  const [selectedKey, setSelectedKey] = useState(sidebarItems[0].key);
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState();
  const handleSelectLanguage = (value: any) => {
    setSelectedLanguage(value);
    // i18n.changeLanguage(selectedLanguage);
    localStorage.setItem("lang", value);
  };
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const handleMenuSelect = ({ key }: { key: string }) => {
    setSelectedKey(key);
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
              padding: "14px 0",
            }}
          >
            <img src={logo} alt="" />
          </div>
          <Menu
            style={{
              backgroundColor: "#2492EB",
              color: "white",
              marginTop: "10px",
            }}
            selectedKeys={[selectedKey]}
            // defaultSelectedKeys={[sidebarItems[0].key]}
            items={sidebarItems}
            onClick={handleMenuSelect}
          ></Menu>
        </Sider>

        <Layout style={{ marginLeft: collapsed ? 80 : 180 }}>
          <Header
            style={{
              padding: 0,
              height: "100px",
              background: colorBgContainer,
              display: "flex", // Added display: flex
              alignItems: "center", // Added align-items: center
            }}
          >
            <Button
              type="text"
              icon={collapsed ? <MenuOutlined /> : <MenuOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                marginLeft: collapsed ? "20px" : "60px",
                fontSize: "16px",
                width: 45,
                height: 45,
                marginRight: "10px",
              }}
            />
            <div className="flex items-center justify-between  container mx-auto">
              <div className="flex ">
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
              <div className="flex items-center gap-x-6">
                <Select
                  options={options}
                  defaultValue={options[0]}
                  value={selectedLanguage}
                  style={{ width: 150 }}
                  onChange={handleSelectLanguage}
                ></Select>

                <Badge count={5} className="cur">
                  <IoIosNotificationsOutline
                    style={{ width: "30px", height: "30px" }}
                  />
                </Badge>

                <div className="flex items-center gap-x-2">
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
              margin: "0 16px",
              padding: 24,
              backgroundColor: "#F6F8FA",
              borderRadius: borderRadiusLG,
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
