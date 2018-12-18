new Vue({
  el: '#app', // similar to the component name in react
  data: {     // similar to state in react
    title: 'waffles'
  },
  methods: {  // similar to your class/component methods in react
    handleChange: function(event){
      this.title = event.target.value;
    }
  }

});