import { RouteRecordRaw } from "vue-router";
const painelRoutes: Array<RouteRecordRaw> = [
  {
    path: "/painel",
    redirect: "painel/inicio",
    component: () =>
      import("@/features/painel/components/LayoutPainel.vue"),
    children: [
      {
        path: "inicio",
        name: "inicio",
        component: () =>
          import("../painel/pages/Inicio/InicioPainel.vue"),
      },
      {
        path: "pedidos",
        name: "pedidos",
        component: () => 
          import("../painel/pages/Pedidos/Pedidos.vue")
      }
    ],
  },
  
];

export default painelRoutes;
