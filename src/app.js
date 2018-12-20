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
    food: 'unknown food item'
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
    showCoordMessage: function(){
      return this.x >= 500 ? 'X is greater than or equal to 500' : 'X is less than 500';
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