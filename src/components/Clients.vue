<template>
  <b-row class="page-image">
    <b-col>
      <a href="/clientes/marce-barrito">
        <b-img
          thumbnail
          fluid
          :src="require('@/assets/images/clients/barrito_portada.jpg')"
          alt="marce barrito"
        ></b-img>
      </a>
      <figcaption class="figure-caption text-center">Marce&nbsp;Barrito</figcaption>
    </b-col>
    <b-col>
      <a href="/clientes/morfo">
        <b-img thumbnail fluid :src="require('@/assets/images/clients/morfo_portada.jpg')" alt="morfo"></b-img>
      </a>
      <figcaption class="figure-caption text-center">Morfo</figcaption>
    </b-col>
    <b-col>
      <a href="/clientes/nina-botanica">
        <b-img
          thumbnail
          fluid
          :src="require('@/assets/images/clients/botanica_portada.jpg')"
          alt="niña botanica"
        ></b-img>
      </a>
      <figcaption class="figure-caption text-center">Niña&nbsp;Botánica</figcaption>
    </b-col>
    <!--<b-col>
      <a href="/clientes/ariana-castillo">
        <b-img
          thumbnail
          fluid
          :src="require('@/assets/images/clients/ariana_castillo_portada.jpg')"
          alt="ariana castillo"
        ></b-img>
      </a>
      <figcaption class="figure-caption text-center">Ariana&nbsp;Castillo&nbsp;Joyería</figcaption>
    </b-col> -->
    <b-col>
      <a href="/clientes/tarotist">
        <b-img
          thumbnail
          fluid
          :src="require('@/assets/images/clients/tarotist_portada.jpg')"
          alt="your local tarotist"
        ></b-img>
      </a>
      <figcaption class="figure-caption text-center">Your&nbsp;Local&nbsp;Tarotist</figcaption>
    </b-col>
  </b-row>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Clients',
});
</script>
