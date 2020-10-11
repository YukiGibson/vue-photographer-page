<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Raquel Rovira</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link" href="#">{{ navLinkClients }}</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">{{ navLinkDocumental }}</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">{{ navLinkPlaces }}</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">{{ navLinkPrints }}</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">{{ navLinkAbout }}</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    navLinkClients: String,
    navLinkDocumental: String,
    navLinkPlaces: String,
    navLinkPrints: String,
    navLinkAbout: String
  }
})
export default class Header extends Vue {
  navLinkClients: string;
  navLinkDocumental: string;
  navLinkPlaces: string;
  navLinkPrints: string;
  navLinkAbout: string;
}
</script>
