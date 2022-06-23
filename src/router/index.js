import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import GlassesSpecWomen from "../views/GlassesSpecWomen.vue";
import GlassesSpecMen from "../views/GlassesSpecMen.vue";
import GlassesSunMen from "../views/GlassesSunMen.vue";
import GlassesSunWomen from "../views/GlassesSunWomen.vue";
import getGlassesSpecWomen from "../composables/getGlassesSpecWomen";

// import App from "./App.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "Home", component: GlassesSpecWomen },
    { path: "/spectacles-women", name: "spectacles-women", component: GlassesSpecWomen },
    { path: "/spectacles-men", name: "spectacles-men", component: GlassesSpecMen },
    { path: "/sunglasses-women", name: "sunglasses-women", component: GlassesSunWomen },
    { path: "/sunglasses-men", name: "sunglasses-men", component: GlassesSunMen },
    { path: "/about", name: "About", component: About },
  ],
});
export default router;
