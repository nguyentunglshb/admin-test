import { RouteObject } from "react-router-dom";

import { ListPost, PostDetail } from "@/modules";

export const PostRoute: RouteObject = {
  path: "posts",
  element: <ListPost />,
  children: [
    {
      path: ":id",
      element: <PostDetail />,
    },
  ],
};
