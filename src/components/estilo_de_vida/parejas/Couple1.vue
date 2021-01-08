<template>
  <div>
    <div class="d-flex flex-row flex-nowrap overflow-auto page-image">
      <div v-for="file of files" class="card card-body">
        <img :src="require(`@/assets/images/lifestyle/parejas/1_pareja/${file}`)" alt="Moni y Nelo">
      </div>
    </div>
    <br />
    <em>Moni y Nelo</em>
  </div>
</template>

<script>
import Vue from "vue";
import {getFirstParejaImages} from '@/utils';

export default Vue.extend({
  name: 'Couple1',
  data: function() {
    return {
      files: getFirstParejaImages(),
    };
  },
});
</script>

<style scoped>

</style>