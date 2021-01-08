<template>
  <div>
    <div class="d-flex flex-row flex-nowrap overflow-auto page-image">
      <div v-for="file of files" class="card card-body">
        <img :src="require(`@/assets/images/lifestyle/parejas/3_pareja/${file}`)" alt="Malu y Carlos">
      </div>
    </div>
    <br />
    <em>Malu y Carlos</em>
  </div>
</template>

<script>
import Vue from "vue";
import {loadImages} from '@/utils';

export default Vue.extend({
  name: 'Couple3',
  data: function() {
    return {
      files: loadImages('./assets/images/lifestyle/parejas/3_pareja'),
    };
  },
});
</script>

<style scoped>

</style>