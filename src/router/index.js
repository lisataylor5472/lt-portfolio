import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CodingView from "../views/CodingView.vue";
import InterestsView from "../views/InterestsView.vue";
import SocialView from "../views/SocialView.vue";
import PastLivesView from "../views/PastLivesView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/past-lives",
    name: "past-lives",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: PastLivesView,
  },
  {
    path: "/social",
    name: "social",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: SocialView,
  },
  {
    path: "/interests",
    name: "interests",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: InterestsView,
  },
  {
    path: "/coding",
    name: "coding",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: CodingView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
