import React, { useState } from "react";
import logo from "../assets/logo.svg";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

import { Layout, Menu, Button, theme } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import { sidebarItems } from "../utiles/sidebarItem";

const { Header, Sider, Content } = Layout;

const DashboardLayout = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const handleMenuSelect = ({ key }: { key: string }) => {
    console.log(key);
    if (key === "/logout") {
      console.log("dsfmks");
    } else {
      navigate(key);
    }
  };
  return (
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
          mode="inline"
          // defaultSelectedKeys={[sidebarItems[0].key]}
          items={sidebarItems}
          onClick={handleMenuSelect}
        />
      </Sider>
      <Layout style={{ marginLeft: collapsed ? 80 : 200 }}>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
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
  );
};

export default DashboardLayout;
