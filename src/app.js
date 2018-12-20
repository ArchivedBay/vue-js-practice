new Vue({
  el: '#app', // similar to the component name in react
  data: {     // similar to state in react
    title: 'Vue practice',
    count: 0,
    caption: 'waffles',
    link: 'https://google.com', // because you can't dynamically change html in Vue without using a bind directive.
    fullTag: '<a href="google.com">Google</a>',
    x:0,
    y:1,
    food: 'unknown food item',
    imageUrl: 'https://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg'
  },

  computed: {
    showCoordMessage: function(){
      return this.x >= 500 ? 'X is greater than or equal to 500' : 'X is less than 500';
    },
    dynamicBG: function(){
      return {
        backgroundImage: `url(${this.imageUrl})`,
        backgroundSize: 'cover',
        width: '200px',
        height: '200px'
      }
    }
  },

  methods: {  // similar to your class/component methods in react
    handleChange: function(event){
      this.caption = event.target.value;
    },
    handleForm: function(event){
      const {food} = event.target;
      this.food = food.value;
    },
    updateTitle: function(){
      this.title = 'muffins';
    },
    clickUpdate: function(){
      this.title = 'apples';
      return;
    },
    showCoords: function(){
      return `X: ${this.x} Y: ${this.y}`;
    },
    updateCoords: function(event){
      this.x = event.clientX;
      this.y = event.clientY;
    },
    changeBackground: function(){
      
      const images = [
        'https://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg',
        'https://www.bluecross.org.uk/sites/default/files/assets/images/124044lpr.jpg',
        'https://www.catster.com/wp-content/uploads/2017/11/A-Siamese-cat.jpg'
      ]

      const choice = Math.floor(Math.random() * images.length);
      this.imageUrl =  images[choice];
    }
  }
});

// v-bind:href            - binds the given argument after the colon to the data object of the Vue instance.
// v-on:change/click/etc  - Vue's version of event handlers. returns an event to the associated method.
// v-on:submit.prevent    - You can automatically call event.preventDefault() by adding .prevent in the vue modifiers.
// v-once                 - When placed on an element, causes it to only render one time.

    /* 
      NOTE: If you place this on an element that's evoking a method, you can use it to stop it from re-rendering every time
            this is useful if you want a method to run once but don't want it to run every time the component / page renders.
    */

// computed               - Allows Vue to know if an element needs updating or not, where as 'methods' will run regardless of if it needs to.
  // NOTE: computed properties MUST be synchronous, you cannot have api calls here, for that use the 'watch' vue property instead.

// watch                  - similar to the component lifecycle methods in react, listens for incoming changes from async operations
  // NOTE: When using closures you need to store 'this' in a variable prior to usage.

/*  shorthands:
      @click, @mousemove, etc. === v-on:click, v-on:mousemove, etc.
      :href === v-bind:href
*/