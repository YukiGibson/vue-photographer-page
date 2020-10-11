<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <Header />
  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "./components/HelloWorld.vue";
import Header from "./components/Header.vue";

@Options({
  components: {
    Header,
    HelloWorld
  },
  data: {
    navLinkClients: "Clientes",
    navLinkDocumental: "Documental",
    navLinkPlaces: "Places",
    navLinkPrints: "Prints",
    navLinkAbout: "Acerca de"
  }
})
export default class App extends Vue {}
</script>

<style>
@font-face {
  font-family: "Louis George Cafe";
  src: url("./assets/Louis George Cafe.ttf") .format("truetype");
  font-weight: "normal";
  font-style: "normal";
}
@font-face {
  font-family: "Louis George Cafe";
  src: url("./assets/Louis George Cafe Bold.ttf") .format("truetype");
  font-weight: "bold";
  font-style: "normal";
}
@font-face {
  font-family: "Louis George Cafe";
  src: url("./assets/Louis George Cafe Italic.ttf") .format("truetype");
  font-weight: "normal";
  font-style: "italic";
}
@font-face {
  font-family: "Louis George Cafe";
  src: url("./assets/Louis George Cafe Bold Italic.tff");
  font-weight: "bold";
  font-style: "italic";
}
</style>
