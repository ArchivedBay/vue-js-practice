<template>
  <div id="app">

    <nav id="nav">
      <div class='logo'>AwesomeLogo</div>

      <ul>
        <li> <router-link class='nav-link' to="/">Home</router-link> </li>
        <li> <router-link class='nav-link' to="/link1">Link 1</router-link> </li>
        <li> <router-link class='nav-link' to="/link2">Link 2</router-link> </li>
        <li> <router-link class='nav-link' to="/link3">Link 3</router-link> </li>
        <li> <router-link class='nav-link' to="/link4">Link 4</router-link> </li>
        <li> <router-link class='nav-link' to="/link5">Link 5</router-link> </li>
        <li> <router-link class='nav-link' to="/link6">Link 6</router-link> </li>
        <li> <router-link class='nav-link' to="/link7">Link 7</router-link> </li>
        <li> <router-link class='nav-link' to="/link8">Link 8</router-link> </li>
      </ul>   
    </nav>

    <router-view/>
  </div>
</template>



<style lang="scss">
  @import './main.scss';
  @import './colors.scss';

  #app { font-family: 'Avenir', Helvetica, Arial, sans-serif }

  #nav {
    padding: 0 3rem;
    height: 6rem;
    background-color: map-get($colors, light);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .logo { width: 30% }
  ul { display: flex }

  .nav-link {
    font-family: 'Muli', sans-serif;
    font-size: 1.2rem;
    font-weight: 800;
    text-transform: uppercase;
    margin: 0 1rem; 
    
    &:link, &:visited { color: map-get($colors, navlink) }
    &:link, &:hover   { transition: color 0.2s ease }
    &:hover           { color: map-get($colors, secondary) }
  }
</style>
