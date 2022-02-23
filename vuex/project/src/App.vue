<template>
  <div id="app">
    Parent Counter: {{getCounter}} <br>
    <button @click="addCounter">+</button>
    <button @click="subCounter">-</button>
    <Child/>
  </div>
</template>

// 이거안돌아감 vuextest이거 다시깔아서
// npm i치면 모든 그 프로젝트에 필요한 npm이 다운받아짐

<script>

  import Child from './Child';
  import {mapGetters, mapMutations} from 'vuex';

  export default{
    components:{
      Child
    },
    // data(){
    //   return{
    //     getCounter: 0,
    //   }
    // },
    methods:{
      // addCounter(){
      //   console.log("hi");
      // },
      ...mapMutations(["addCounter"]),
      subCounter(){
        this.$store.state.counter--;
      }
    },
    computed:{
      ...mapGetters(['getCounter'])
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
