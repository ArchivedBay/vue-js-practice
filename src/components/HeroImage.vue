<template>
  <div class="hero-image" :style="{backgroundImage: `url( ${require(`../assets/bg${imageID}.jpg`)} )`}">

    <div class='message-container'>
      <h1 class='hero-header-group'>
        <span v-for='word in msg'>{{ word }}</span>
      </h1>

      <p class='caption'>{{ caption }}</p>
    </div>

    <div class='scroll-arrow'>
      <i class="fas fa-chevron-down"></i>
    </div>
  </div>
</template>



<script>
  export default {
    name: 'HeroImage',
    props: {
      msg: Array,       
      caption: String,  
      imageID: String
    }
  }
</script>



<style scoped lang="scss">
  @import '../colors.scss';

  .hero-image {
    width: 100%;
    height: calc(100vh - 6rem);
    position: relative;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .scroll-arrow {
    width: 100%;
    padding: 1rem;
    position: absolute;
    bottom: 0;
    left: 0;
    color: #fff;
    text-align: center;
    font-size: 3rem;
  }

  .message-container {
    width: 50rem;
    margin-left: -20rem;
    color: map-get($colors, light)
  }

  .hero-header-group { 
    font-size: 6rem; 
    span {
      display: inline-block;
      margin: 0 1rem;
    }
  }

  .caption { 
    font-family: 'Muli', sans-serif;
    font-weight: 300;
    font-size: 2.5rem;
    margin-top: 2rem;
    margin-left: 1rem; 
  }

</style>
