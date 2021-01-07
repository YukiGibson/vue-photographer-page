<template>
  <div>
    <div class="d-flex flex-row flex-nowrap overflow-auto page-image">
      <div v-for="file of files" class="card card-body">
        <img :src="require(`@/assets/images/lifestyle/parejas/2_pareja/${file}`)" alt="Dani y Sofi">
      </div>
    </div>
    <br />
    <em>Dani y Sofi</em>
  </div>
</template>

<script>
import Vue from "vue";
import {getSecondParejaImages} from '@/utils';

export default Vue.extend({
  name: 'Couple2',
  data: function() {
    return {
      files: getSecondParejaImages(),
    };
  },
});
</script>

<style scoped>

</style>