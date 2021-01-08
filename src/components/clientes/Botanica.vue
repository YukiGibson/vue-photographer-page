<template>
  <div>
    <div class="d-flex flex-row flex-nowrap overflow-auto page-image">
      <div v-for="file of files" class="card card-body">
        <img :src="require(`@/assets/images/clients/botanica/${file}`)" alt="nina_botanica" />
      </div>
    </div>
    <br />
    <em>Niña Botánica</em>
  </div>
</template>

<script>
import Vue from 'vue';
import {loadImages} from '../../utils';

export default Vue.extend ({
  name: "NinaBotanica",
  data: function() {
    return {
      files: loadImages('./assets/images/clients/botanica'),
    };
  },
})
</script>

<style scoped>

</style>