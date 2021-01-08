<template>
  <div>
    <div class="d-flex flex-row flex-nowrap overflow-auto page-image">
      <div v-for="file of files" class="card card-body">
        <img :src="require(`@/assets/images/clients/ariana_joyeria/${file}`)" alt="ariana_joyeria" />
      </div>
    </div>
    <br />
    <em>Ariana Joyería</em>
  </div>
</template>

<script>
import Vue from 'vue';
import {getArianaJoyeriaImages} from '@/utils';

export default Vue.extend ({
  name: "ArianaJoyeria",
  data: function() {
    return {
      files: getArianaJoyeriaImages(),
    };
  },
})
</script>

<style scoped>

</style>