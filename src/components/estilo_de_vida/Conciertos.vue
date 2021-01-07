<template>
  <div>
    <div class="d-flex flex-row flex-nowrap overflow-auto page-image">
      <div v-for="file of files" class="card card-body">
        <img :src="require(`@/assets/images/lifestyle/conciertos/${file}`)" alt="conciertos" />
      </div>
    </div>
    <br />
    <em>Conciertos</em>
  </div>
</template>

<script>
import Vue from 'vue';
import {getConciertosImages} from '@/utils';

export default Vue.extend({
  name: 'Conciertos',
  data: function() {
    return {
      files: getConciertosImages(),
    };
  },
});
</script>

<style scoped></style>
