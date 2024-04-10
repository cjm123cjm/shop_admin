import axios from "axios";

const request = axios.create({
  baseURL: process.env.VUE_APP_URL,
  timeout: 1000 * 60 * 5,
});

//请求拦截器
request.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => Promise.reject(err)
);

//响应拦截器
request.interceptors.response.use(
  (response) => {
    return response;
  },
  (err) => Promise.reject(err)
);

export default request;
