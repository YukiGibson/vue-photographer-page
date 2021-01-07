<template>
  <b-row class="page-image">
    <b-col>
      <a href="https://bubblegummag.com/2020/11/06/kilig-or-the-flying-butterflies-inside-my-tumy/">
        <b-img
          thumbnail
          fluid
          :src="require('@/assets/images/publicaciones/kilig_bubblegummag.jpg')"
          alt="Kilig"
        ></b-img>
      </a>
      <figcaption class="figure-caption text-center">Kilig - Bubble Gum Magazine</figcaption>
    </b-col>
    <b-col>
      <a href="https://bubblegummag.com/2020/10/12/mi-tropico//">
        <b-img
          thumbnail
          fluid
          :src="require('@/assets/images/publicaciones/mi_tropico_bubblegummag.jpg')"
          alt="Mi Tropico"
        ></b-img>
      </a>
      <figcaption class="figure-caption text-center">Mi Trópico - Bubble Gum Magazine</figcaption>
    </b-col>
    <b-col>
      <a href="https://www.instagram.com/p/CGa3sqbH9aA/">
        <b-img
          thumbnail
          fluid
          :src="require('@/assets/images/publicaciones/covid19_ulatina.jpg')"
          alt="Ulatina"
        ></b-img>
      </a>
      <figcaption class="figure-caption text-center">Ulatina</figcaption>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: 'Publicaciones.vue',
};
</script>

<style scoped></style>
