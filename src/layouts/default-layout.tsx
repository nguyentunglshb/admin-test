import React from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";

import { SideBar } from "./sidebar";

export const DefaultLayout = () => {
  return (
    <Layout
      style={{
        flexDirection: "row",
        minHeight: "100vh",
        width: "100vw",
      }}
    >
      <SideBar />
      <Layout className="site-layout">
        <Outlet />
      </Layout>
    </Layout>
  );
};
