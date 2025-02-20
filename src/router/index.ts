import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import autenticacaoRoutes from "@/features/autenticacao/autenticacao-routes";

const routes: Array<RouteRecordRaw> = [
    ...autenticacaoRoutes,
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
