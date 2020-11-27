import axios from "axios";

const service = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "http://site.blueflyming.cn/"
      : "api",
  timeout: 5000
});

// 请求拦截器
service.interceptors.request.use(config => {
  return config;
});

// 响应拦截器
service.interceptors.response.use(
  res => {
    return res.data;
  }
);

export default service;
