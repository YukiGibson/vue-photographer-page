<template>
  <div>
    <div class="d-flex flex-row flex-nowrap overflow-auto page-image">
      <div v-for="file of files" class="card card-body">
        <img class="rounded-lg" :src="require(`@/assets/images/documental/mi_tropico/${file}`)" alt="mi_tropico" />
      </div>
    </div>
    <br />
    <em>Mi Trópico</em>
  </div>
</template>

<script>
import Vue from 'vue';
import {loadImages} from '../../utils';

export default Vue.extend({
  name: 'MiTropico',
  data: function() {
    return {
      files: loadImages('./assets/images/documental/mi_tropico'),
    };
  },
});
</script>

<style scoped></style>
