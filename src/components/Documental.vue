<template>
  <b-row class="page-image">
    <b-col>
      <a href="/documental/kilig">
        <b-img thumbnail fluid :src="require('@/assets/images/documental/kilig_portada.jpg')" alt="kilig"></b-img>
      </a>
      <figcaption class="figure-caption text-center">Kilig</figcaption>
    </b-col>
    <b-col>
      <a href="/documental/lleve-feria">
        <b-img
          thumbnail
          fluid
          :src="require('@/assets/images/documental/lleve_feria_portada.jpg')"
          alt="lleve feria"
        ></b-img>
      </a>
      <figcaption class="figure-caption text-center">Lleve feria</figcaption>
    </b-col>
    <b-col>
      <a href="/documental/mi-tropico">
        <b-img
          thumbnail
          fluid
          :src="require('@/assets/images/documental/mi_tropico_portada.jpg')"
          alt="mi tropico"
        ></b-img>
      </a>
      <figcaption class="figure-caption text-center">Mi trópico</figcaption>
    </b-col>
    <b-col>
      <a href="/documental/quedate-en-casa">
        <b-img
          thumbnail
          fluid
          :src="require('@/assets/images/documental/quedate_en_casa_portada.jpg')"
          alt="quedate en casa"
        ></b-img>
      </a>
      <figcaption class="figure-caption text-center">&quot;Quedate en casa&quot;</figcaption>
    </b-col>
  </b-row>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Documental',
});
</script>
