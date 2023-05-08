<script setup>
import ProductsVue from "../components/Products.vue";
import Footer from "../components/Footer.vue";
</script>

<template>
  <main>
    <div class="container mt-2 mb-5">
      <div class="col-lg-12 text-light">
        <h1 class="text-center text-classy">Zero Corporation</h1>
        <h4 class="text-center text-classy">"More Goals Reached, More Happiness Fulfilled."</h4>
        <ProductsVue />
        <Footer />
      </div>
    </div>
  </main>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Satisfy&display=swap');
.text-classy{
  font-family: 'Satisfy', cursive;
}
</style>
