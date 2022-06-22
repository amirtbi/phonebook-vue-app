import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
const routes = [
  { path: "/", redirect: "/home" },
  { path: "/home", component: Home, name: "Home" },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
