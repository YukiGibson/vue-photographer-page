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
    {
      path: '/documental/kilig',
      name: 'kilig',
      component: (resolve) => {
        require(['@/components/documental/Kilig.vue'], resolve);
      },
    },
    {
      path: '/documental/lleve-feria',
      name: 'lleve-feria',
      component: (resolve) => {
        require(['@/components/documental/LleveFeria.vue'], resolve);
      },
    },
    {
      path: '/documental/quedate-en-casa',
      name: 'quedate-en-casa',
      component: (resolve) => {
        require(['@/components/documental/QuedateEnCasa.vue'], resolve);
      },
    },
    {
      path: '/documental/mi-tropico',
      name: 'mi-tropico',
      component: (resolve) => {
        require(['@/components/documental/MiTropico.vue'], resolve);
      },
    },
    {
      path: '/clientes/ariana-castillo',
      name: 'ariana-joyeria',
      component: (resolve) => {
        require(['@/components/clientes/ArianaJoyeria.vue'], resolve);
      },
    },
    {
      path: '/clientes/nina-botanica',
      name: 'nina-botanica',
      component: (resolve) => {
        require(['@/components/clientes/Botanica.vue'], resolve);
      },
    },
    {
      path: '/clientes/marce-barrito',
      name: 'marce-barrito',
      component: (resolve) => {
        require(['@/components/clientes/Marce.vue'], resolve);
      },
    },
    {
      path: '/clientes/morfo',
      name: 'morfo',
      component: (resolve) => {
        require(['@/components/clientes/Morfo.vue'], resolve);
      },
    },
    {
      path: '/clientes/tarotist',
      name: 'tarotist',
      component: (resolve) => {
        require(['@/components/clientes/Tarotist.vue'], resolve);
      },
    },
    {
      path: '/estilo-de-vida/conciertos',
      name: 'conciertos',
      component: (resolve) => {
        require(['@/components/estilo_de_vida/Conciertos.vue'], resolve);
      },
    },
    {
      path: '/estilo-de-vida/estilo-de-vida',
      name: 'estilo-de-vida',
      component: (resolve) => {
        require(['@/components/estilo_de_vida/EstiloDeVida.vue'], resolve);
      },
    },
    {
      path: '/estilo-de-vida/parejas',
      name: 'conciertos',
      component: (resolve) => {
        require(['@/components/estilo_de_vida/Parejas.vue'], resolve);
      },
    },
    {
      path: '/estilo-de-vida/parejas/moni-nelo',
      name: 'moni_nelo',
      component: (resolve) => {
        require(['@/components/estilo_de_vida/parejas/Couple1.vue'], resolve);
      },
    },
    {
      path: '/estilo-de-vida/parejas/sofi-dani',
      name: 'sofi_dani',
      component: (resolve) => {
        require(['@/components/estilo_de_vida/parejas/Couple2.vue'], resolve);
      },
    },
    {
      path: '/estilo-de-vida/parejas/malu-carlos',
      name: 'malu_carlos',
      component: (resolve) => {
        require(['@/components/estilo_de_vida/parejas/Couple3.vue'], resolve);
      },
    },
  ],
});

export default router;
