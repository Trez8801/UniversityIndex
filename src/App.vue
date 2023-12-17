<script setup>
import Home from './views/Home.vue'
import HelloWorld from "@/components/HelloWorld.vue";
</script>

<template>
  <header>
    <div class="logo">
    <img alt="university" src="./assets/ecuLogo.svg" width="125" height="125" />
    </div>
    <div class="wrapper">
      <HelloWorld msg='Global Campus Connect: The Worldwide University Locator'/>
    </div>
  </header>

  <main>
    <Home/>
  </main>
</template>

<style scoped>
header {
  display: block;
  line-height: 1.5;
}

.logo {
  display: flex;
  margin: 0 auto 2rem;
  place-content: center;
}

.wrapper {
  display: flex;
  margin: 0 auto 2rem;
  place-content: center;
}

</style>
