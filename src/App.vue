<template>
  <div>
    <Header></Header>
  </div>
</template>

<script lang="ts">
  import Vue from "vue";
  import Header from "./components/Header.vue";
  import "bootstrap/dist/css/bootstrap.css";
  import "bootstrap-vue/dist/bootstrap-vue.css";

  export default Vue.extend({
    name: 'App',

    components: {
      Header
    }
  })

</script>

<style>
  @font-face {
    font-family: "Louis George Cafe";
    src: url("../public/fonts/Louis George Cafe.ttf") format("truetype");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "Louis George Cafe";
    src: url("../public/fonts/Louis George Cafe Bold.ttf") format("truetype");
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: "Louis George Cafe";
    src: url("../public/fonts/Louis George Cafe Italic.ttf") format("truetype");
    font-weight: normal;
    font-style: italic;
  }

  @font-face {
    font-family: "Louis George Cafe";
    src: url("../public/fonts/Louis George Cafe Bold Italic.ttf") format("truetype");
    font-weight: bold;
    font-style: italic;
  }
</style>
