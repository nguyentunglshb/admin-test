import { createBrowserRouter } from "react-router-dom";

import { DashboardRoute } from "./dashboard-route";
import { PostRoute } from "./post-route";
import { SettingRoute } from "./setting-route";

export const router = createBrowserRouter([
  DashboardRoute,
  PostRoute,
  SettingRoute,
]);
