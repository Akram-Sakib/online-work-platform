import { ACCESS_TOKEN_KEY } from "@/constants/storageKey";
import { getCookie } from "@/services/actions";
import { IGenericErrorResponse, ResponseSuccessType } from "@/types";
import axios from "axios";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";

const instance = axios.create();
instance.defaults.headers.post["Content-Type"] = "application/json";
instance.defaults.headers["Accept"] = "application/json";
instance.defaults.timeout = 60000;

// Add a request interceptor
instance.interceptors.request.use(
  async function (config) {
    // Do something before request is sent
    const cookie = (await getCookie(ACCESS_TOKEN_KEY)) as RequestCookie;
    if (cookie) {
      const accessToken = cookie.value;
      if (accessToken) {
        config.headers.Authorization = accessToken;
      }
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  //@ts-ignore
  function (response) {
    const responseObject: ResponseSuccessType = {
      data: response?.data?.data,
      meta: response?.data?.meta,
    };
    return responseObject;
  },
  async function (error) {
    const responseObject: IGenericErrorResponse = {
      statusCode: error?.response?.data?.statusCode || 500,
      message: error?.response?.data?.message || "Something went wrong",
      errorMessages: error?.response?.data?.message,
    };
    return responseObject;
  }
);

export { instance };

