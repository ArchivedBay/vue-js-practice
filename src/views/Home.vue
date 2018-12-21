<template>
  <div id="home">
    <HeroImage 
      :msg="'Dynamic Background images with Vue'.split(' ')"
      caption='it is possible afterall :D' 
      imageID='1'
    />
    <MissionBlock />
    <TechBlock />


  </div>
</template>


<script>
  import HeroImage from '@/components/HeroImage.vue';
  import MissionBlock from '@/components/MissionBlock.vue';
  import TechBlock from '@/components/TechBlock.vue';

  export default {
    name: 'home',

    components: {
      HeroImage,
      MissionBlock,
      TechBlock
    }
  }
</script>
