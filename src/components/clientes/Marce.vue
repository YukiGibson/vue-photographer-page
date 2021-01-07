<template>
  <div>
    <div class="d-flex flex-row flex-nowrap overflow-auto page-image">
      <div v-for="file of files" class="card card-body">
        <img :src="require(`@/assets/images/clients/barrito/${file}`)" alt="marce_barrito" />
      </div>
    </div>
    <br />
    <em>Marce Barrito</em>
  </div>
</template>

<script>
import Vue from 'vue';
import {getMarceBarritoImages} from '../../utils';

export default Vue.extend ({
  name: "MarceBarrito",
  data: function() {
    return {
      files: getMarceBarritoImages(),
    };
  },
})
</script>

<style scoped>

</style>