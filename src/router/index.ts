import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: (resolve) => {
        require(['@/components/Welcome.vue'], resolve);
      },
    },
    {
      path: '/documental',
      name: 'documental',
      component: (resolve) => {
        require(['@/components/Documental.vue'], resolve);
      },
    },
    {
      path: '/clientes',
      name: 'clientes',
      component: (resolve) => {
        require(['@/components/Clients.vue'], resolve);
      },
    },
    {
      path: '/estilo-de-vida',
      name: 'estilo-de-vida',
      component: (resolve) => {
        require(['@/components/EstiloDeVida.vue'], resolve);
      },
    },
    {
      path: '/prints',
      name: 'prints',
      component: (resolve) => {
        require(['@/components/Prints.vue'], resolve);
      },
    },
    {
      path: '/kilig',
      name: 'kilig',
      component: (resolve) => {
        require(['@/components/Kilig.vue'], resolve);
      },
    },
    {
      path: '/publicaciones',
      name: 'publicaciones',
      component: (resolve) => {
        require(['@/components/Publicaciones.vue'], resolve);
      },
    },
    {
      path: '/about',
      name: 'about',
      component: (resolve) => {
        require(['@/components/About.vue'], resolve);
      },
    },
  ],
});

export default router;
