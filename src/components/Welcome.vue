<template>
  <div>
    <div>
      <b-row class="page-image">
        <b-col>
          <a href="/documental">
            <b-img thumbnail fluid :src="require('@/assets/documental_portada.jpg')" alt="1"></b-img>
          </a>
          <figcaption class="figure-caption text-center">Documental</figcaption>
        </b-col>
        <b-col>
          <a href="/estilo-de-vida">
            <b-img thumbnail fluid :src="require('@/assets/estilo_de_vida_portada.jpg')" alt="1"></b-img>
          </a>
          <figcaption class="figure-caption text-center">Estilo de vida</figcaption>
        </b-col>
        <b-col>
          <a href="/clientes">
            <b-img thumbnail fluid :src="require('@/assets/cliente_portada.jpg')" alt="1"></b-img>
          </a>
          <figcaption class="figure-caption text-center">Clientes</figcaption>
        </b-col>
      </b-row>
      <br />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Documental from './Documental.vue';

export default Vue.extend({
  name: 'Welcome',
});
</script>

<style scoped>

</style>