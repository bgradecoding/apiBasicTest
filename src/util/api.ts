import axios from "axios";
import { AxiosRequestConfig } from "axios";
import LocalStorage from "./localstorage";
import Router from "next/router";

type Params = {
  [key: string]: unknown;
};

export const baseUrl = process.env.NEXT_PUBLIC_BASE_BACK_URL;

export const api = {
  get: <T>(url: string, params?: Params) =>
    axios.get<T>(baseUrl + url, { params: { ...params } }),
  post: <T, R = unknown, E = unknown>(url: string, data?: R, headers?: E) =>
    axios.post<T>(baseUrl + url, data || {}, { ...headers }),
  patch: <T, R = unknown>(url: string, data?: R) =>
    axios.patch<T>(baseUrl + url, data || {}),
  delete: <T>(url: string) => axios.delete<T>(baseUrl + url),
};

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    if (error.response.status === 500) {
      return error.resopnse;
    } else if (error.response.status === 401) {
    }
    return Promise.reject(error);
  }
);

axios.interceptors.request.use(function (config: any) {
  config.headers = {
    Authorization: "Bearer " + LocalStorage.getItem("token") || "",
  };
  return config;
});
