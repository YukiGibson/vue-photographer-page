<template>
  <div>
    <div class="d-flex flex-row flex-nowrap overflow-auto page-image">
      <div v-for="file of files" class="card card-body">
        <img :src="require(`@/assets/images/lifestyle/estilo_de_vida/${file}`)" alt="estilo de vida" />
      </div>
    </div>
    <br />
    <em>Estilo de Vida</em>
  </div>
</template>

<script>
import Vue from 'vue';
import {loadImages} from '@/utils';

export default Vue.extend({
  name: 'EstiloDeVida',
  data: function() {
    return {
      files: loadImages('./assets/images/lifestyle/estilo_de_vida'),
    };
  },
});
</script>

<style scoped></style>
