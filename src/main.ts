import { createApp } from "vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

createApp(App).mount("#app");

createApp.use(BootstrapVue);
createApp.use(IconsPlugin);
