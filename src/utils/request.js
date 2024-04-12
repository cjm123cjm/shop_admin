import axios from "axios";
import store from "@/store";

import useMessage from "@/hooks/useMessage.js";
const ElMessage = useMessage();

const request = axios.create({
  baseURL: process.env.VUE_APP_URL,
  timeout: 1000 * 60 * 5,
});

//请求拦截器
request.interceptors.request.use(
  (config) => {
    var token = store.state.userStore.token;
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  (err) => Promise.reject(err)
);

//响应拦截器
request.interceptors.response.use(
  (response) => {
    if (response.data.code != 200) {
      ElMessage({
        showClose: true,
        message: response.data.msg,
        type: "错误",
      });
      return Promise.reject(response.data.msg);
    } else {
      return response.data;
    }
  },
  (err) => Promise.reject(err)
);

export default request;
