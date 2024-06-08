import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CadastroProdutos from '../views/CadastrarProdutoView.vue'
import CategoriasView from '../views/CategoriasView.vue'
import CadastroCategoriaView from '../views/CadastrarCategoriaView.vue'
import UsuariosView from '../views/UsuariosView.vue'
import CadastroUsuarioView from '../views/CadastrarUsuarioView.vue'
import Login from '../views/Login.vue'




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/produtos/cadastrar',
      name: 'cadastrar produtos',
      component: CadastroProdutos
    },
    {
      path: '/categorias',
      name: 'categorias',
      component: CategoriasView
    },
    {
      path: '/categorias/cadastrar',
      name: 'cadastrar categorias',
      component: CadastroCategoriaView
    },
    {
      path: '/usuarios',
      name: 'usuarios',
      component: UsuariosView
    },
    {
      path: '/usuarios/cadastrar',
      name: 'cadastrar usuarios',
      component: CadastroUsuarioView
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        hideNavbar: true
      },
    }
  ]
})

export default router
