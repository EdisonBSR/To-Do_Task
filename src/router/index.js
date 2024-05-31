import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import BreakoutView from "../views/BreakoutView.vue";
import ChatView from "../views/ChatView.vue";
import WeatherView from "@/views/WeatherView.vue";
import BattleView from "@/views/BattleView.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/breakout-Game",
    name: "breakout",
    component: BreakoutView,
  },
  {
    path: "/chat",
    name: "chat",
    component: ChatView,
  },
  {
    path: "/clima",
    name: "weather",
    component: WeatherView,
  },
  {
    path: "/Astucia-Naval",
    name: "battle",
    component: BattleView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
