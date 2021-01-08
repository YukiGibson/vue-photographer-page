<template>
  <div>
    <div class="d-flex flex-row flex-nowrap overflow-auto page-image">
      <div v-for="file of files" class="card card-body">
        <img :src="require(`@/assets/images/clients/morfo/${file}`)" alt="morfo" />
      </div>
    </div>
    <br />
    <em>Morfo</em>
  </div>
</template>

<script>
import Vue from 'vue';
import {getMorfoImages} from '@/utils';

export default Vue.extend ({
  name: "Morfo",
  data: function() {
    return {
      files: getMorfoImages(),
    };
  },
})
</script>

<style scoped>

</style>