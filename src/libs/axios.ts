import axios from "axios";

const baseURL = "https://jsonplaceholder.typicode.com" as const;

export const axiosClient = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
    charset: "UTF-8",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    "Access-Control-Allow-Credentials": true,
    crossorigin: true,
  },
  // paramsSerializer: (params: any) => queryString.stringify(params),
});
