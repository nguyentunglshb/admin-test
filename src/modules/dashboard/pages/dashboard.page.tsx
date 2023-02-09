import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Tabs, TabsProps } from "antd";
import { Navigation } from "@/dictionary";

const items: TabsProps["items"] = [
  {
    key: Navigation.SUBCRIPTION,
    label: <Link to={Navigation.SUBCRIPTION}>Subcription</Link>,
  },
  {
    key: Navigation.REVENUE,
    label: <Link to={Navigation.REVENUE}>Revenue</Link>,
  },
];

export const DashboardPage = () => {
  const { pathname } = useLocation();

  return (
    <div>
      <Tabs items={items} activeKey={pathname} />
      <Outlet />
    </div>
  );
};
