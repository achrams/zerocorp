<template>
  <div class="container p-3">
    <div class="row justify-content-center align-items-center">
      <div class="col col-sm-1 p-0 text-center logo-selection text-classy text-light" @click.prevent="goTo('/about')">About</div>
      <div class="col col-sm-1 p-0">
        <img src="../assets/zetecorps.png" alt="zetecorps" class="logo-img logo-selection" @click="goHome" />
      </div>
      <div class="col col-sm-1 p-0 text-center logo-selection text-classy text-light">Login</div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goHome() {
      this.$router.push('/')
    },
    goTo(link) {
      this.$router.push(link)
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Satisfy&display=swap');

.logo-img {
  width: 100px;
}

.logo-selection{
  cursor: pointer;
  transition-duration: 150ms;
  transition-delay: 50ms;
}

.logo-selection:hover{
  transform: scale(1.1);
  transition-duration: 150ms;
  transition-delay: 50ms;
}

.text-classy{
  font-family: 'Satisfy', cursive;
}
</style>