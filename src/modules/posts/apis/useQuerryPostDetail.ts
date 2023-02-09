import axiosClient from "@/libs";
import { HttpResponse } from "@/models";
import { useQuery } from "react-query";
import { Post } from "../models";

const postDetailFn = (id: string | number): Promise<HttpResponse<Post>> =>
  axiosClient.get(`/posts/${id}`);

export const useQuerryPostDetail = (id: string | number) => {
  return useQuery({
    queryKey: ["post-detail", id],
    queryFn: () => postDetailFn(id),
  });
};
