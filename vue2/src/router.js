import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const routes = [
  {
    path: "/",
    component: () => import("./components/a.vue"),
    children: [
      {
        path: "/aa",
        component: () => import("./components/aa.vue"),
      },
      {
        path: "/bb",
        component: () => import("./components/bb.vue"),
      },
    ],
  },
  {
    path: "/b",
    component: () => import("./components/b.vue"),
  },
  {
    path: "/c",
    component: () => import("./components/c.vue"),
    beforeEnter(to, from, next) {
      //   alert("与全局一样");
      next();
    },
  },
  {
    path: "*",
    redirect: "/",
  },
];
const router = new Router({
  routes,
});

export default router;
