<template>
  <div>
    <Header></Header>
    <div class="container">
      <router-view></router-view>
    </div>
    <div class="border-top my-3"></div>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

export default Vue.extend({
  name: 'App',

  components: {
    Header,
    Footer,
  },
});
</script>

<style>
body {
  padding-top: 1%;
}

@font-face {
  font-family: 'Louis George Cafe';
  src: url('../public/fonts/Louis George Cafe.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'Louis George Cafe';
  src: url('../public/fonts/Louis George Cafe Bold.ttf') format('truetype');
  font-weight: bold;
  font-style: normal;
}

@font-face {
  font-family: 'Louis George Cafe';
  src: url('../public/fonts/Louis George Cafe Italic.ttf') format('truetype');
  font-weight: normal;
  font-style: italic;
}

@font-face {
  font-family: 'Louis George Cafe';
  src: url('../public/fonts/Louis George Cafe Bold Italic.ttf') format('truetype');
  font-weight: bold;
  font-style: italic;
}

.card-body {
  min-height: 300px;
  min-width: 300px;
  margin-right: 5px;
}

.image-shadow {
  -moz-box-shadow: 0 0 5px lightblue;
  -webkit-box-shadow: 0 0 5px lightblue;
  box-shadow: 0 0 5px lightblue;
}

.card {
  border: none;
}

.documentary-image {
  padding-top: 0.5rem;
}

img {
  margin-top: auto;
  margin-bottom: auto;
}

b-col {
  object-fit: scale-down;
}

@media screen and (max-width: 800px) {
  .page-image {
    -ms-flex-direction: column !important;
    flex-direction: column !important;
  }

  .card {
    background: none !important;
    border: none !important;
  }

  .documentary-image {
    height: 400px;
  }

  box-icon {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .brand {
    margin-left: 16px;
  }

  .logo {
    display: block;
    margin-right: auto;
    margin-left: auto;
  }

  .toggle {
    display: block; margin-right: auto; margin-left: auto
  }

  figcaption {
    margin: 10px;
  }
}
</style>
