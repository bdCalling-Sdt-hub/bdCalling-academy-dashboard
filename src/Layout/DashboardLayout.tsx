import { useState } from "react";
import logo from "../assets/logo.svg";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { IoIosNotificationsOutline } from "react-icons/io";
import usFlag from "../assets/flags/us.svg";
import {
  Layout,
  Menu,
  Button,
  theme,
  Input,
  Dropdown,
  MenuProps,
  Badge,
  ConfigProvider,
} from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import { sidebarItems } from "../utiles/sidebarItem";
import { sidebardThemes } from "../themes/Index";
const { Header, Sider, Content } = Layout;
const DashboardLayout = () => {
  const [selectedKey, setSelectedKey] = useState(sidebarItems[0].key);
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);

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

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <img src={usFlag} alt="" />,
    },
  ];
  return (
    <ConfigProvider theme={sidebardThemes}>
      <Layout>
        <Sider
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
              padding: "10px 0",
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

              background: colorBgContainer,
            }}
          >
            <div className="flex items-center">
              <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                style={{
                  fontSize: "16px",
                  width: 64,
                  paddingLeft: "20px",
                  height: 64,
                }}
              />
              <div className="flex justify-between items-center container mx-auto">
                <div className="flex items-center">
                  <ConfigProvider
                    theme={{
                      components: {
                        Input: {
                          colorBgContainer: "#F4F4F4",
                        },
                      },
                    }}
                  >
                    <Input
                      allowClear={true}
                      prefix={<SearchOutlined className="text-[#A7A7A7] " />}
                      placeholder="search here"
                      className="h-[50px] w-[461px]"
                    />
                  </ConfigProvider>
                </div>

                <div className="flex items-center gap-x-6 ">
                  <Dropdown menu={{ items }}>
                    <img className="cursor-pointer" src={usFlag} alt="" />
                  </Dropdown>
                  <p>EN</p>
                  <Badge count={5}>
                    <IoIosNotificationsOutline />
                  </Badge>
                  <div className="flex items-center gap-x-6">
                    <div>
                      <img
                        src="https://t.ly/18Nvk"
                        className="w-[40px] h-[40px] object-cover	rounded-full"
                        alt=""
                      />
                    </div>

                    <div>
                      <h1 className="font-semibold">Mr. Admin John Doe</h1>
                    </div>
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
