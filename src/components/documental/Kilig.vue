<template>
  <div>
    <div class="d-flex flex-row flex-nowrap overflow-auto">
      <div v-for="file of files" class="documentary-image">
        <img class="documentary-image" :src="require(`@/assets/images/documental/kilig/${file}`)" alt="kilig">
      </div>
    </div>
    <br />
    <em>Kilig</em>
  </div>
</template>

<script>
import Vue from 'vue';
import {loadImages} from '../../utils';

export default Vue.extend({
  name: 'Kilig',
  data: function() {
    return {
      files: loadImages('./assets/images/documental/kilig'),
    };
  },
});
</script>

<style scoped></style>
