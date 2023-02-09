import { useQuery } from "react-query";

import { Post } from "../models";
import { axiosClient } from "@/libs/axios";
import { HttpResponse } from "./../../../models/http";

const getPostsFn = (
  params?: Record<string, string>
): Promise<HttpResponse<Post[]>> => axiosClient.get("/posts", { params });

export const useQueryGetPosts = (params?: Record<string, string>) => {
  return useQuery({
    queryFn: () => getPostsFn(params),
    queryKey: ["post", params],
  });
};
