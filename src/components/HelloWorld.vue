<script setup>
defineProps({
  msg: {
    type: String,
  }
})
</script>

<template>
  <div class="greetings">
    <h1 class="color">{{ msg }}</h1>
    <h3 class="color">Weclome to ECU's University Search Portal!</h3>
  </div>
</template>

<style scoped>
@font-face {
  font-family: Roboto Slab;
  src: url('@/assets/fonts/RobotoSlab-VariableFont_wght.ttf');
}
@font-face {
  font-family: Merriweather;
  src: url("@/assets/fonts/Merriweather-Regular.ttf");
}
@font-face {
  font-family: MerriweatherBoldItalic;
  src: url("@/assets/fonts/Merriweather-BoldItalic.ttf")
}

h1 {
  font-weight: 500;
  font-size: 2.6rem;
  font-family: "Merriweather";
  font-weight: normal;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
  font-family: "Merriweather";
}

.greetings h1,
.greetings h3 {
  text-align: center;
  place-content: center;
}

</style>
