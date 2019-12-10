import axios from "axios";
import { Message } from "view-design";
import { delToken, getToken } from "../libs/token";

const http = axios.create({
  baseURL: "http://192.168.2.82:9999/api",
  timeout: 3000
});

// 添加请求拦截器 <==> 请求发起前做的事
http.interceptors.request.use(
  config => {
    if (getToken()) {
      config.headers["X-Authorization"] = getToken();
    }
    return config;
  },
  error => {
    return Promise.resolve(error);
  }
);

// 添加响应拦截器 <==> 响应回来后做的事
http.interceptors.response.use(
  response => {
    if (response.status === 200 && response.data.status !== 200) {
      Message.error(response.data.msg);
    }
    return response;
  },
  error => {
    if (error.response && error.response.status === 401) {
      Message.error("账号权限过期！");
      delToken();
    } else {
      Message.error(error.message);
    }
    return Promise.resolve(error.response);
  }
);

export default http;
