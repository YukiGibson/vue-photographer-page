<template>
  <div>
    <b-row class="page-image">
      <b-col>
        <a href="/estilo-de-vida/conciertos">
          <b-img
            thumbnail
            fluid
            :src="require('@/assets/images/lifestyle/conciertos_portada.jpg')"
            alt="conciertos"
          ></b-img>
        </a>
        <figcaption class="figure-caption text-center">Conciertos</figcaption>
      </b-col>
      <b-col>
        <a href="/estilo-de-vida/estilo-de-vida">
          <b-img
            thumbnail
            fluid
            :src="require('@/assets/images/lifestyle/estilo_de_vida_portada.jpg')"
            alt="estilo de vida"
          ></b-img>
        </a>
        <figcaption class="figure-caption text-center">Estilo de Vida</figcaption>
      </b-col>
      <b-col>
        <a href="/estilo-de-vida/parejas">
          <b-img thumbnail fluid :src="require('@/assets/images/lifestyle/parejas_portada.jpg')" alt="parejas"></b-img>
        </a>
        <figcaption class="figure-caption text-center">Parejas</figcaption>
      </b-col>
    </b-row>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'EstiloDeVida',
});
</script>
