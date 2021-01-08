<template>
  <div>
    <div class="d-flex flex-row flex-nowrap overflow-auto page-image">
      <div v-for="file of files" class="card card-body">
        <img :src="require(`@/assets/images/documental/quedate_en_casa/${file}`)" alt="quedate_en_casa" />
      </div>
    </div>
    <br />
    <em>&quot;Quedate en casa&quot;</em>
  </div>
</template>

<script>
import Vue from 'vue';
import {loadImages} from '../../utils';

export default Vue.extend({
  name: 'QEC',
  data: function() {
    return {
      files: loadImages('./assets/images/documental/quedate_en_casa'),
    };
  },
});
</script>

<style scoped></style>
