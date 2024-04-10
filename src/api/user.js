import request from "@/utils/request";

/**
 * @description:用户登录
 */
const login = (data) => {
  return request({
    method: "post",
    url: "api/user",
    data,
  });
};

export default {
  login,
};
