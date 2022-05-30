import Vue from "vue";
import VueRouter from "vue-router";
import MainView from "../views/MainView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: MainView,
    children: [
      {
        path: "detail/:id",
        component: () => import("../views/DetailView.vue"),
      },
      {
        path: "map/:id",
        component: () => import("../views/MapView.vue"),
      },
      {
        path: "datepicker/:id",
        component: () => import("../views/DatepickerView.vue"),
      }
    ],
  },
  {
    path: "/mypage",
    name: "mypage",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ "../views/MyView.vue");
    },
    children: [
      {
        path: "detail/:id",
        component: () => import("../views/DetailView.vue"),
      },
      {
        path: "map/:id",
        component: () => import("../views/MapView.vue"),
      }
    ],
  },
  {
    path: "/calendar",
    name: "calendar",
    component: function () {
      return import("../views/CalendarView.vue");
    },
  },
  {
    path: "/login",
    name: "login",

    component: function () {
      return import("../views/LoginView.vue");
    },
  },
  {
    path: "/register",
    name: "login",
    component: function () {
      return import("../views/RegisterView.vue");
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
