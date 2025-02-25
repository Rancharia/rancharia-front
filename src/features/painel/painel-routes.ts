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
          import("@/features/painel/pages/inicio/InicioPainel.vue"),
      },
      {
        path: "pedidos",
        name: "pedidos",
        component: () => 
          import("@/features/painel/pages/pedidos/PedidosPage.vue")
      }
    ],
  },
  
];

export default painelRoutes;
