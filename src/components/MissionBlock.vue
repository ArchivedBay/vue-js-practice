<template>
  <section id='mission-block'>
    <div class='logo'>AwesomeLogo</div>

  </section>
</template>



<script>
  export default {
    name: 'MissionBlock'
  }
</script>



<style scoped lang="scss">
  @import '../colors.scss';

  #mission-block {
    height: 20rem;
    width: 100%;
    background-color: darken(map-get($colors, light), 10%);
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .logo {
    text-align: center;
  }
  
</style>