import Vue from "vue";
import {BootstrapVue, IconsPlugin} from "bootstrap-vue";
import App from "./App.vue";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

const vm = new Vue({
  el: `#app`,
  data: {
    title: "Raquel Rovira Photography"
  },
  components: {
    App
  },
  render: h => h(App)
});
