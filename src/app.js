new Vue({
  el: '#app', // similar to the component name in react
  data: {     // similar to state in react
    title: 'Vue practice',
    caption: 'waffles',
    link: 'https://google.com' // because you can't dynamically change html in Vue without using a bind directive.
  },
  methods: {  // similar to your class/component methods in react
    handleChange: function(event){
      this.caption = event.target.value;
    },
    updateTitle: function(){
      this.title = 'muffins';
    },
    clickUpdate: function(){
      this.title = 'apples';
      return;
    }
  }
});

// v-bind:href            - binds the given argument after the colon to the data object of the Vue instance.
// v-on:change/click/etc  - Vue's version of event handlers. returns an event to the associated method.
// v-once                 - When placed on an element, causes it to only render one time.
    /* 
      NOTE: If you place this on an element that's evoking a method, you can use it to stop it from re-rendering every time
            this is useful if you want a method to run once but don't want it to run every time the component / page renders.
    */