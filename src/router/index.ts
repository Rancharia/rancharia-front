import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import autenticacaoRoutes from "@/features/autenticacao/autenticacao-routes";
import painelRoutes from '@/features/painel/painel-routes';
import componentesRoutes from '@/features/componentes/componentes-routes';

const routes: Array<RouteRecordRaw> = [
    ...autenticacaoRoutes,
    ...painelRoutes,
    ...componentesRoutes
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
