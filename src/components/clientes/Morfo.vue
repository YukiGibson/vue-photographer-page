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
import {loadImages} from '../../utils';

export default Vue.extend ({
  name: "Morfo",
  data: function() {
    return {
      files: loadImages('./assets/images/clients/morfo'),
    };
  },
})
</script>

<style scoped>

</style>