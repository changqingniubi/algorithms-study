/*
 * @Description:
 * @Author: changqing
 * @Date: 2021-09-03 14:52:22
 * @LastEditTime: 2021-09-03 16:51:19
 * @LastEditors: changqing
 * @Usage:
 */
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import chapter1 from "../views/chapter1.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
    redirect: "/chapter1",
    children: [
      {
        path: "chapter1",
        name: "chapter1",
        component: chapter1,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
