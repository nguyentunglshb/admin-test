import React from "react";
import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import type { MenuProps } from "antd/es/menu";
import { NavLink, useLocation } from "react-router-dom";

import { Navigation } from "@/dictionary";

type MenuItem = Required<MenuProps>["items"][number];

const sidebarItems = [
  getItem(
    <NavLink to={Navigation.DASHBOARD}>Dashboard</NavLink>,
    Navigation.DASHBOARD
  ),
  getItem(
    <NavLink to={Navigation.POSTS}>Post Management</NavLink>,
    Navigation.POSTS
  ),
  getItem(
    <NavLink to={Navigation.SETTINGS}>Settings</NavLink>,
    Navigation.SETTINGS
  ),
] as MenuItem[];

function getItem(
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

export const SideBar = () => {
  const { pathname } = useLocation();

  return (
    <Sider theme="light">
      <Menu
        mode="inline"
        items={sidebarItems}
        theme="light"
        selectedKeys={[pathname]}
      />
    </Sider>
  );
};
