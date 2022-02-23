<template>
  <div id="app">
    <div>
      <h1>여기는 App.vue</h1>
      App.vue salt : {{getSalt}}<br>
      App.vue message : {{getMsg}}<br>
      <FriedChicken></FriedChicken>
    </div>
  </div>
</template>


<script>

import FriedChicken from './components/FriedChicken.vue';
import {mapGetters} from 'vuex';

export default {
  name: 'App',
  components: {
    FriedChicken,
  },
  computed:{
    ...mapGetters(['getSalt']),
    ...mapGetters(['getMsg']),
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
