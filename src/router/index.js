import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    meta: {
      login: false,
    },
    component: Home,
  },
  {
    path: "/acercade",
    name: "Acercade",
    meta: {
      login: false,
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "acercade" */ "../views/Acercade.vue"),
  },
  {
    path: "/contacto",
    name: "Contacto",
    meta: {
      login: false,
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "contacto" */ "../views/Contacto.vue"),
  },
  {
    path: "/agendar",
    name: "Agendar",
    meta: {
      login: false,
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "agendar" */ "../views/Agendar.vue"),
  },
  {
    path: "/carrito",
    name: "Carrito",
    meta: {
      login: false,
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "carrito" */ "../views/Carrito.vue"),
  },
  {
    path: "/login",
    name: "Login",
    meta: {
      login: false,
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login.vue"),
  },
  {
    path: "/socio",
    name: "Socio",
    meta: {
      login: false,
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "socio" */ "../views/Socio.vue"),
  },
];
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
router.afterEach((to, from) => {
  if (from.name != "Login") {
    store.commit("setLastVisitedPage", from.name);
  }
});
export default router;
