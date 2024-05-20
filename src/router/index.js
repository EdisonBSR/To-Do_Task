import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import BreakoutView from "../views/BreakoutView.vue";
import ChatView from "../views/ChatView.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/breakoutGame",
    name: "breakout",
    component: BreakoutView,
  },
  {
    path: "/chat",
    name: "chat",
    component: ChatView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
