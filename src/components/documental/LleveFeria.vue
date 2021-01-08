<template>
  <div>
    <div class="d-flex flex-row flex-nowrap overflow-auto">
      <div v-for="file of files" class="documentary-image">
        <img :src="require(`@/assets/images/documental/lleve_feria/${file}`)" alt="lleve_feria" />
      </div>
    </div>
    <br />
    <em>Lleve Feria</em>
  </div>
</template>

<script>
import Vue from 'vue';
import {getLleveFeriaImages} from '@/utils';

export default Vue.extend({
  name: 'LleveFeria',
  data: function() {
    return {
      files: getLleveFeriaImages(),
    };
  },
});
</script>

<style scoped></style>
