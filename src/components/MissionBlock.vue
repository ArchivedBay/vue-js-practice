<template>
  <section id='mission-block'>
    <div class='logo'>AwesomeLogo</div>
    <h3 class='mission'>This page utilizes Vue.js along with SASS</h3>
  </section>
</template>


<script>
  export default {
    name: 'MissionBlock'
  }
</script>


<style scoped lang="scss">
  @import '../colors.scss';

  #mission-block::before{
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background-image: url('../assets/continents.svg');
    background-position: 0 -5rem;
    z-index: -1;
  }
  #mission-block {
    height: 20rem;
    width: 100%;
    background-color: 
      rgba(
        lighten(
          map-get($colors, light), 
        10%), 
      0.9);
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .logo {
    text-align: center;
  }
  .mission {
    font-family: 'Muli', sans-serif;
    font-weight: 300;
    font-size: 3rem;
  }
</style>