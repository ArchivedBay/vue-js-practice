<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>



<script>
  import HelloWorld from './components/HelloWorld.vue'

  export default {
    name: 'app',
    components: {
      HelloWorld
    }
  }
</script>



<style lang="scss">
  @import './colors.scss';

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html { font-size: 62.5% }

  body {
    box-sizing: border-box;
    font-size: 1.6rem;
    width: 100%;
    min-height: 100vh;
    position: relative;
    background-color: map-get($colors, primary-bg);
  }

  a		{ text-decoration: none }
  ul	{ list-style: none }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: map-get($colors, primary-text);
    margin-top: 6rem;
  }
</style>
