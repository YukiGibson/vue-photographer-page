import Vue from 'vue';
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue';
import App from './App.vue';
import router from './router';

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

const vm = new Vue({
  el: `#app`,
  data: function() {
    return {
      title: 'Raquel Rovira Photography',
    };
  },
  components: {
    App,
  },
  router,
  render: (h) => h(App),
});
export default vm;
