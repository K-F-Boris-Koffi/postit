import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import postitView from "../views/postitView.vue";
import postitAdd from "../views/postitAdd.vue";
import postitEdit from "../views/postitEdit.vue";



const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/postitView/:id",
    name: "postitView",
    component: postitView,

  },
  {
    path: "/postitAdd",
    name: "postitAdd",
    component: postitAdd,

  },
  {
    // path: "/postitEdit/:id/:title/:content",
    path: "/postitEdit/:id",
    name: "postitEdit",
    component: postitEdit,

  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
