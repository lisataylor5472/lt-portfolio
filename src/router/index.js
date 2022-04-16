import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CodingView from "../views/CodingView.vue";
import SocialView from "../views/SocialView.vue";
import AboutView from "../views/AboutView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: AboutView,
  },
  {
    path: "/connect",
    name: "connect",
    component: SocialView,
  },
  {
    path: "/portfolio",
    name: "portfolio",
    component: CodingView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
