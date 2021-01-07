<template>
  <div>
    <b-row class="page-image">
      <b-col>
        <a href="parejas/sofi-dani">
          <b-img
            thumbnail
            fluid
            :src="require('@/assets/images/lifestyle/parejas/dani_sofi.jpg')"
            alt="Dani y Sofi"
          ></b-img>
        </a>
        <figcaption class="figure-caption text-center">Dani y Sofi</figcaption>
      </b-col>
      <b-col>
        <a href="parejas/malu-carlos">
          <b-img
            thumbnail
            fluid
            :src="require('@/assets/images/lifestyle/parejas/malu_carlos.jpg')"
            alt="Malu y Carlos"
          ></b-img>
        </a>
        <figcaption class="figure-caption text-center">Malu y Carlos</figcaption>
      </b-col>
      <b-col>
        <a href="parejas/moni-nelo">
          <b-img
            thumbnail
            fluid
            :src="require('@/assets/images/lifestyle/parejas/moni_nelo.jpg')"
            alt="Moni y Nelo"
          ></b-img>
        </a>
        <figcaption class="figure-caption text-center">Moni y Nelo</figcaption>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'Parejas',
});
</script>

<style scoped></style>
