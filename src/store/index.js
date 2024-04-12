import { createStore } from "vuex";
import userStore from "./modules/user";
import layoutStore from "./modules/layout";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    userStore,
    layoutStore,
  },
});
