<script setup>
import Home from './views/Home.vue'
import HelloWorld from "@/components/HelloWorld.vue";
</script>

<template>
  <header>
    <img alt="university" class="logo" src="./assets/ecuLogo.svg" width="125" height="125" />
    <div class="wrapper">
      <HelloWorld msg="Global Campus Connect: The Worldwide University Locator"/>
    </div>
  </header>

  <main>
    <Home/>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: normal;
    //padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
