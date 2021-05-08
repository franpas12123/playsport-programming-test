import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import CharacterDetails from "@/components/CharacterDetails.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    props: true
  },
  {
    path: "/character/:id",
    name: "Character",
    component: CharacterDetails
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
