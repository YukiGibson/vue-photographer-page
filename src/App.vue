<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <Header />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "./components/HelloWorld.vue";
import Header from "./components/Header.vue";

@Options({
  components: {
    Header,
    HelloWorld
  }
})
export default class App extends Vue {}
</script>

<style>
$font-dir: "/fonts/";

@font-face {
  font-family: "Louis George Cafe";
  src: url("#{$font-dir}Louis George Cafe.ttf") .format("truetype");
  font-weight: "normal";
  font-style: "normal";
}
@font-face {
  font-family: "Louis George Cafe";
  src: url("#{$font-dir}Louis George Cafe Bold.ttf") .format("truetype");
  font-weight: "bold";
  font-style: "normal";
}
@font-face {
  font-family: "Louis George Cafe";
  src: url("#{$font-dir}Louis George Cafe Italic.ttf") .format("truetype");
  font-weight: "normal";
  font-style: "italic";
}
@font-face {
  font-family: "Louis George Cafe";
  src: url("#{$font-dir}Louis George Cafe Bold Italic.tff");
  font-weight: "bold";
  font-style: "italic";
}
</style>
