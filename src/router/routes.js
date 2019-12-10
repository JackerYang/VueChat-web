/**
 * 路由表
 */
export default [
  {
    path: "/login",
    name: "login",
    component: () => import("../views/Login")
  },
  {
    path: "/",
    name: "chat",
    component: () => import("../views/Chat")
  }
];