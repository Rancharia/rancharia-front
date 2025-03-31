import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import autenticacaoRoutes from "@/views/autenticacao/autenticacao-routes";
import painelRoutes from '@/views/painel/painel-routes';

const routes: Array<RouteRecordRaw> = [
    ...autenticacaoRoutes,
    ...painelRoutes,
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
