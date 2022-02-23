<template>
  <div id="app">

<!-- 부트스트랩 -->
      <b-row>
    <b-col md="auto">
      <b-calendar v-model="value" @context="onContext" locale="en-US"></b-calendar>
    </b-col>
    <b-col>
      <p>Value: <b>'{{ value }}'</b></p>
      <p class="mb-0">Context:</p>
      <pre class="small">{{ context }}</pre>
    </b-col>
  </b-row>



    Parent Counter : {{getCounter}} <br>
    <button @click="addCounter">+</button>
    <button @click="subCounter">-</button>


    <Child/>
  </div>



</template>


<script>


import Child from './Child';
import {mapGetters, mapMutations} from 'vuex';

export default {
  components: {Child},

  methods: {
    ...mapMutations(['addCounter']),
    subCounter(){
      this.$store.state.counter--;
    }
  },

  computed:{
    ...mapGetters(['getCounter'])
  },


  data() { //부트스트랩
      return {
        value: '',
        context: null
      }
    },
    methods: {
      onContext(ctx) {
        this.context = ctx
      }
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
