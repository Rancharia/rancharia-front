import { RouteRecordRaw } from "vue-router";
const componentesRoutes: Array<RouteRecordRaw> = [
    {
        path: "/teste", 
        component: () => import("@/features/componentes/pages/TesteDeComponentes/TestePage.vue")
      },
    ];

export default componentesRoutes;
