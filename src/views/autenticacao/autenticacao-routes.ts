import { RouteRecordRaw } from "vue-router";
const autenticacaoRoutes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/auth/login",
  },
  {
    path: "/auth",
    component: () =>
      import("@/views/autenticacao/components/LayoutAutenticacao.vue"),
    children: [
      {
        path: "login",
        name: "login",
        component: () =>
          import("@/views/autenticacao/pages/login/LoginPage.vue"),
      },
    ],
  },
  
];

export default autenticacaoRoutes;
