import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'welcome',
      meta: {
        title: 'Raquel Rovira Fotografía',
      },
      component: (resolve) => {
        require(['@/components/Welcome.vue'], resolve);
      },
    },
    {
      path: '/documental',
      name: 'documental',
      meta: {
        title: 'Documental - Raquel Rovira Fotografía',
      },
      component: (resolve) => {
        require(['@/components/Documental.vue'], resolve);
      },
    },
    {
      path: '/clientes',
      name: 'clientes',
      meta: {
        title: 'Clientes - Raquel Rovira Fotografía',
      },
      component: (resolve) => {
        require(['@/components/Clients.vue'], resolve);
      },
    },
    {
      path: '/estilo-de-vida',
      name: 'estilo-de-vida',
      meta: {
        title: 'Estilo de Vida - Raquel Rovira Fotografía',
      },
      component: (resolve) => {
        require(['@/components/EstiloDeVida.vue'], resolve);
      },
    },
    {
      path: '/prints',
      name: 'prints',
      meta: {
        title: 'Prints - Raquel Rovira Fotografía',
      },
      component: (resolve) => {
        require(['@/components/Prints.vue'], resolve);
      },
    },
    {
      path: '/publicaciones',
      name: 'publicaciones',
      meta: {
        title: 'Publicaciones - Raquel Rovira Fotografía',
      },
      component: (resolve) => {
        require(['@/components/Publicaciones.vue'], resolve);
      },
    },
    {
      path: '/about',
      name: 'about',
      meta: {
        title: 'Sobre mi - Raquel Rovira Fotografía',
      },
      component: (resolve) => {
        require(['@/components/About.vue'], resolve);
      },
    },
    {
      path: '/documental/kilig',
      name: 'kilig',
      meta: {
        title: 'Documental - Kilig - Raquel Rovira Fotografía',
      },
      component: (resolve) => {
        require(['@/components/documental/Kilig.vue'], resolve);
      },
    },
    {
      path: '/documental/lleve-feria',
      name: 'lleve-feria',
      meta: {
        title: 'Documental - Lleve Feria - Raquel Rovira Fotografía',
      },
      component: (resolve) => {
        require(['@/components/documental/LleveFeria.vue'], resolve);
      },
    },
    {
      path: '/documental/quedate-en-casa',
      name: 'quedate-en-casa',
      meta: {
        title: 'Documental - Quedate en Casa - Raquel Rovira Fotografía',
      },
      component: (resolve) => {
        require(['@/components/documental/QuedateEnCasa.vue'], resolve);
      },
    },
    {
      path: '/documental/mi-tropico',
      name: 'mi-tropico',
      meta: {
        title: 'Documental - Mi Trópico - Raquel Rovira Fotografía',
      },
      component: (resolve) => {
        require(['@/components/documental/MiTropico.vue'], resolve);
      },
    },
    {
      path: '/clientes/ariana-castillo',
      name: 'ariana-joyeria',
      meta: {
        title: 'Clientes - Ariana Castillo - Raquel Rovira Fotografía',
      },
      component: (resolve) => {
        require(['@/components/clientes/ArianaJoyeria.vue'], resolve);
      },
    },
    {
      path: '/clientes/nina-botanica',
      name: 'nina-botanica',
      meta: {
        title: 'Clientes - Niña Botánica - Raquel Rovira Fotografía',
      },
      component: (resolve) => {
        require(['@/components/clientes/Botanica.vue'], resolve);
      },
    },
    {
      path: '/clientes/marce-barrito',
      name: 'marce-barrito',
      meta: {
        title: 'Clientes - Marce Barrito - Raquel Rovira Fotografía',
      },
      component: (resolve) => {
        require(['@/components/clientes/Marce.vue'], resolve);
      },
    },
    {
      path: '/clientes/morfo',
      name: 'morfo',
      meta: {
        title: 'Clientes - Morfo - Raquel Rovira Fotografía',
      },
      component: (resolve) => {
        require(['@/components/clientes/Morfo.vue'], resolve);
      },
    },
    {
      path: '/clientes/tarotist',
      name: 'tarotist',
      meta: {
        title: 'Clientes - Local Tarotits - Raquel Rovira Fotografía',
      },
      component: (resolve) => {
        require(['@/components/clientes/Tarotist.vue'], resolve);
      },
    },
    {
      path: '/estilo-de-vida/conciertos',
      name: 'conciertos',
      meta: {
        title: 'Estilo de Vida - Conciertos - Raquel Rovira Fotografía',
      },
      component: (resolve) => {
        require(['@/components/estilo_de_vida/Conciertos.vue'], resolve);
      },
    },
    {
      path: '/estilo-de-vida/estilo-de-vida',
      name: 'estilo-de-vida',
      meta: {
        title: 'Estilo de Vida - Estilo de Vida - Raquel Rovira Fotografía',
      },
      component: (resolve) => {
        require(['@/components/estilo_de_vida/EstiloDeVida.vue'], resolve);
      },
    },
    {
      path: '/estilo-de-vida/parejas',
      name: 'parejas',
      meta: {
        title: 'Estilo de Vida - parejas - Raquel Rovira Fotografía',
      },
      component: (resolve) => {
        require(['@/components/estilo_de_vida/Parejas.vue'], resolve);
      },
    },
    {
      path: '/estilo-de-vida/parejas/moni-nelo',
      name: 'moni_nelo',
      meta: {
        title: 'Estilo de Vida - Moni y Nelo - Raquel Rovira Fotografía',
      },
      component: (resolve) => {
        require(['@/components/estilo_de_vida/parejas/Couple1.vue'], resolve);
      },
    },
    {
      path: '/estilo-de-vida/parejas/sofi-dani',
      name: 'sofi_dani',
      meta: {
        title: 'Estilo de Vida - Sofi y Dani - Raquel Rovira Fotografía',
      },
      component: (resolve) => {
        require(['@/components/estilo_de_vida/parejas/Couple2.vue'], resolve);
      },
    },
    {
      path: '/estilo-de-vida/parejas/malu-carlos',
      name: 'malu_carlos',
      meta: {
        title: 'Estilo de Vida - Malu y Carlos - Raquel Rovira Fotografía',
      },
      component: (resolve) => {
        require(['@/components/estilo_de_vida/parejas/Couple3.vue'], resolve);
      },
    },
  ],
});

router.afterEach((to) => {
  Vue.nextTick(() => {
    document.title = to.meta["title"]
  })
})

export default router;
