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
import {getLifestyleImages} from '@/utils';

export default Vue.extend({
  name: 'EstiloDeVida',
  data: function() {
    return {
      files: getLifestyleImages(),
    };
  },
});
</script>

<style scoped></style>
