import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
import { getToken } from "../libs/token";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

// 跳转前
router.beforeEach((to, from, next) => {
  if (getToken()) {
    // 已登录
    if (to.name === "login") {
      router.push({ name: "chat" });
    } else {
      next();
    }
  } else {
    // 未登录
    if (to.name === "login") {
      next();
    } else {
      router.push({ name: "login" });
    }
  }
});

export default router;
