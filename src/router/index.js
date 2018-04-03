import Vue from "vue";
import Router from "vue-router";
import shapesLand from "@/components/shapesLand";
import editShapes from "@/components/editShapes";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "shapesLand",
      component: shapesLand
    },
    {
      path: "/edit",
      name: "editShapes",
      component: editShapes
    },
  ],
});
