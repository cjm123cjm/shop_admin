import { login } from "@/api/user";

export default {
  namespaced: true,
  state: {
    token: localStorage.getItem(process.env.VUE_APP_TOKEN_NAME) || "11111",
    userInfo:
      JSON.parse(localStorage.getItem(process.env.VUE_APP_USER_INFO)) || {},
  },
  getters: {},
  mutations: {
    updateToken(state, token) {
      state.token = token;
      localStorage.setItem(process.env.VUE_APP_TOKEN_NAME, token);
    },
    updateUserInfo(state, data) {
      state.userInfo = data;
      localStorage.setItem(process.env.VUE_APP_USER_INFO, JSON.stringify(data));
    },
  },
  actions: {
    //登录
    async loginAction({ commit }, data) {
      try {
        var result = await login(data);
        //保存token
        commit("updateToken", result.list.token);
        commit("updateUserInfo", {
          menus: result.list.menus,
          menus_url: result.list.menus_url,
          username: result.list.username,
        });
      } catch (error) {
        return Promise.reject(error);
      }
    },
  },
};
