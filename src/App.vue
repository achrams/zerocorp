<script setup>
import { RouterLink, RouterView } from "vue-router";
import NavbarVue from "./components/Navbar.vue";
</script>

<template>
  <div>
    <NavbarVue />
    <RouterView />
  </div>
</template>

<style>
body {
  background: url("./assets/background.jpg");
  background-position: center center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
