import store from "@/store";
import Vue from "vue";
import VueRouter from "vue-router";
import MainView from "../views/MainView.vue";

Vue.use(VueRouter);

var router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
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
          meta: { authRequired: true },
        },
      ],
    },
    {
      path: "/mypage",
      name: "mypage",
      meta: { authRequired: true },
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
        },
        {
          path: "datepicker/:id",
          component: () => import("../views/DatepickerView.vue")
        },
      ],
      beforeEnter: (to, from, next) => {
        window.scroll(0, 0);
        next();
      }
    },
    {
      path: "/calendar",
      name: "calendar",
      meta: { authRequired: true },
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
      name: "register",
      component: function () {
        return import("../views/RegisterView.vue");
      },
    },
  ],
});

router.beforeEach(function (to, from, next) {
  // to.matched[0].meta.authRequired = false;
  if (to.matched.some(function (routeInfo) {
    return routeInfo.meta.authRequired && !store.getters.getLogged;
  })) {
    router.push('/login');
  } 
  else {
    next();
  }
})

export default router;
