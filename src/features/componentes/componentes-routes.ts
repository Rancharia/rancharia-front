import { RouteRecordRaw } from "vue-router";
const componentesRoutes: Array<RouteRecordRaw> = [
    {
        path: "/teste", 
        component: () => import("@/features/componentes/pages/buttons/AtnButton.vue") 
      },
      
    ];

export default componentesRoutes;
