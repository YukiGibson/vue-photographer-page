<template>
  <footer class="font-weight-lighter bg-white navbar-expand-lg">
    <div class="text-center py-3 font-weight-normal font-italic">
      Copyright Raquel Rovira 2020
    </div>
    <div class="py-3">
      <ul class="justify-content-lg-center navbar-nav mx-auto">
        <li class="nav-item">
          <a class="nav-link" href="https://www.instagram.com/raquelrovira/">
            <box-icon name="instagram" type="logo">Instagram</box-icon>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://www.behance.net/raquelrovi81a9">
            <box-icon name="behance" type="logo">Behance</box-icon>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link fab fa-facebook" href="https://www.facebook.com/raquelroviradiaz">
            <box-icon name="facebook-square" type="logo">Facebook</box-icon>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://www.linkedin.com/in/raquel-rovira-661448125/">
            <box-icon name="linkedin-square" type="logo">LinkeIn</box-icon>
          </a>
        </li>
      </ul>
    </div>
    <div class="text-center py-lg-3">
      <a href="mailto: raquelrovirad@gmail.com">[Contact me]</a>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue';
import 'boxicons';

export default Vue.extend({
  name: 'Footer',
});
</script>

<style scoped>
a {
  color: black;
}
</style>
