import { createRouter, createWebHistory } from "vue-router";
import store from "@/store/index";

import useNProgress from "@/hooks/useNProgress";
const NProgress = useNProgress();

const routes = [
  {
    path: "/login",
    name: "login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/",
    name: "layout",
    component: () => import("@/layout/index.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

//导航前置守卫
router.beforeEach((to, from, next) => {
  //开启进度条
  NProgress.start();

  var token = store.state.userStore.token;
  if (to.name !== "login") {
    if (!token) {
      next({ name: "login" });
    } else {
      next();
    }
  } else {
    next();
  }
});

//导致后置钩子
router.afterEach(() => {
  //关闭进度条
  NProgress.done();
});

export default router;
