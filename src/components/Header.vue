<template>
  <header class="container">
    <b-navbar toggleable style="padding: 10px">
      <b-navbar-brand href="/" class="brand">
        <b-img class="logo" :src="require('@/assets/logoNegro.png')" alt="Raquel Rovira"></b-img>
      </b-navbar-brand>
      <b-navbar-toggle target="navbar-toggle-collapse" class="p-3 my-3 shadow toggle">
        <template #default="{ expanded }">
          <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
          <b-icon v-else icon="chevron-bar-down"></b-icon>
        </template>
      </b-navbar-toggle>

      <b-collapse id="navbar-toggle-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="/documental">Documental</b-nav-item>
          <b-nav-item href="/estilo-de-vida">Estilo de Vida</b-nav-item>
          <b-nav-item href="/clientes">Clientes</b-nav-item>
          <b-nav-item href="/publicaciones">Publicaciones</b-nav-item>
          <b-nav-item href="/about">Sobre mí</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <br />
  </header>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Header',
});
</script>

<style scoped>
.logo {
  height: auto;
  width: 50%;
}
</style>
