<template>
  <div>
    <div class="d-flex flex-row flex-nowrap overflow-auto page-image">
      <div v-for="file of files" class="card card-body">
        <img :src="require(`@/assets/images/clients/tarotist/${file}`)" alt="tarotist" />
      </div>
    </div>
    <br />
    <em>Your Local Tarotist</em>
  </div>
</template>

<script>
import Vue from 'vue';
import {getTarotistImages} from '@/utils';

export default Vue.extend({
  name: 'Tarotist',
  data: function() {
    return {
      files: getTarotistImages(),
    };
  },
});
</script>

<style scoped></style>
