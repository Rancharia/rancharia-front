import { RouteRecordRaw } from "vue-router";
const painelRoutes: Array<RouteRecordRaw> = [
  {
    path: "/painel",
    redirect: "painel/inicio",
    component: () => import("@/views/painel/components/LayoutPainel.vue"),
    children: [
      {
        path: "inicio",
        name: "inicio",
        component: () => import("@/views/painel/pages/inicio/InicioPainel.vue"),
      },
      {
        path: "pedidos",
        name: "pedidos",
        component: () => import("@/views/pedidos/PedidosPage.vue"),
      },
      {
        path: "produtos",
        name: "produtos",
        component: () => import("@/views/produtos/ProdutosPage.vue"),
      },
    ],
  },
];

export default painelRoutes;
