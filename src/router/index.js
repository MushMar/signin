import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/sign-up",
    name: "SignUpPage",
    component: () => import("@/views/SignUpPage"),
  },
  {
    path: "/sign-in",
    name: "SignInPage",
    component: () => import("@/views/SignInPage"),
  },
  {
    path: "/main",
    name: "MainPage",
    component: () => import("@/views/MainPage"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
