<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/search">Search</router-link>
    </div>
    <!-- spa의 단점인 페이지에 초기 데이터 가져올때 좀 느린부분을 사용자한테 미리알려주기 위해  -->
    <b-spinner variant="primary" label="Spinning" v-if="loading"></b-spinner>
    <router-view />
  </div>
</template>

<script>
// mapstate : state를 mapping시켜주는 거
import {mapState} from 'vuex';

export default{
  computed:{
    ...mapState(["loading"])
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
  background-color: black;
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
