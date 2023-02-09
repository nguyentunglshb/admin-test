import {
  DashboardPage,
  RenevuePage,
  SubcriptionPage,
} from "@/modules/dashboard";
import { RouteObject } from "react-router-dom";

export const DashboardRoute: RouteObject = {
  path: "dashboard",
  element: <DashboardPage />,
  children: [
    {
      path: "subcription",
      element: <SubcriptionPage />,
    },
    {
      path: "revenue",
      element: <RenevuePage />,
    },
  ],
};
