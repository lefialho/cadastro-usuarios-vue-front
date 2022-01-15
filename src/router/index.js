import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Login from '@/views/Login.vue';
import Cadastro from '@/views/Cadastro.vue';
import Usuario from '@/views/Usuario.vue';
import UsuarioEditar from '@/views/UsuarioEditar.vue';
import UsuarioDados from '@/views/UsuarioDados.vue';

const routes = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: '',
        name: 'login',
        component: Login,
      },
      {
        path: '',
        name: 'cadastro',
        component: Cadastro,
      },
    ],
  },
  {
    path: '/usuario',
    component: Usuario,
    children: [
      {
        path: '',
        name: 'usuario-dados',
        component: UsuarioDados,
      },
      {
        path: '',
        name: 'usuario-editar',
        component: UsuarioEditar,
      }
    ]
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
