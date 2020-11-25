<template>
  <div>
    <div class="border-top my-3"></div>
    <div>
      <b-row>
        <b-col>
          <b-img thumbnail fluid :src="require('@/assets/images/lifestyle/ls1.jpg')" alt="1"></b-img>
          <p>Documental</p>
        </b-col>
        <b-col>
          <b-img thumbnail fluid :src="require('@/assets/images/clients/cl1.jpg')" alt="1"></b-img>
          <p>Estilo de vida</p>
        </b-col>
        <b-col>
          <b-img thumbnail fluid :src="require('@/assets/images/places/plcs1.jpg')" alt="1"></b-img>
          <p>Clientes</p>
        </b-col>
      </b-row>
      <br />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Documental from './Documental.vue';

export default Vue.extend({
  name: 'Welcome',
});
</script>
