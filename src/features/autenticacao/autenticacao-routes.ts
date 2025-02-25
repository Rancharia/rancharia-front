import { RouteRecordRaw } from "vue-router";
const autenticacaoRoutes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/auth/login",
  },
  {
    path: "/auth",
    component: () =>
      import("@/features/autenticacao/components/LayoutAutenticacao.vue"),
    children: [
      {
        path: "login",
        name: "login",
        component: () =>
          import("../autenticacao/pages/login/LoginPage.vue"),
      },
    ],
  },
  
];

export default autenticacaoRoutes;
