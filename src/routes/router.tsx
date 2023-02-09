import { DefaultLayout } from "@/layouts";
import { createBrowserRouter } from "react-router-dom";

import { DashboardRoute } from "./dashboard-route";
import { PostRoute } from "./post-route";
import { SettingRoute } from "./setting-route";

export const router = createBrowserRouter([
  {
    path: "",
    element: <DefaultLayout />,
    children: [DashboardRoute, PostRoute, SettingRoute],
  },
]);
