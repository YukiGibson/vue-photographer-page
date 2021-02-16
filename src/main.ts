import Vue from 'vue';
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue';
import VueMeta from 'vue-meta';
import App from './App.vue';
import router from './router';

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueMeta);

const vm = new Vue({
  el: `#app`,
  data: function() {
    return {
      title: 'Raquel Rovira Photography',
    };
  },
  metaInfo() {
    return {
      title: 'Raquel Rovira Photography',
      meta: [
        {
          name: 'description',
          content:
            'Raquel Rovira Photography',
        },
        {property: 'og:title', content: 'Raquel Rovira Photography'},
        {property: 'og:site_name', content: 'Raquel Rovira Photography'},
        {property: 'og:type', content: 'website'},
        {name: 'robots', content: 'index,follow'},
      ],
    };
  },
  components: {
    App,
  },
  router,
  render: (h) => h(App),
});
export default vm;
