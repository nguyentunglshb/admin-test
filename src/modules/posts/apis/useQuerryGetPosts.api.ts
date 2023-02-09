import { useQuery } from "react-query";

import { Post } from "../models";
import { axiosClient } from "@/libs/axios";
import { HttpResponse } from "./../../../models/http";

const getPostsFn = (): Promise<HttpResponse<Post[]>> =>
  axiosClient.get("/posts");

export const useQueryGetPosts = () => {
  return useQuery({
    queryFn: getPostsFn,
    queryKey: "post",
  });
};
