<template>
  <div id="app">
    <link href="https://tailwindcomponents.com/css/component.developer-portfolio.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@200&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet">



    <my-home></my-home>
  </div>
</template>

<script>

import home from '@/pages/home.vue';
export default {
  name: 'App',
  components: { "my-home": home
    
  }
}


</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
