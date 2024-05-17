import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CategoriasView from '../views/CategoriasView.vue'
import CadastroProdutos from '../views/CadastrarProduto.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/categorias',
      name: 'categorias',
      component: CategoriasView
    },
    {
      path: '/produtos/cadastrar',
      name: 'cadastrar produtos',
      component: CadastroProdutos
    }
  ]
})

export default router
