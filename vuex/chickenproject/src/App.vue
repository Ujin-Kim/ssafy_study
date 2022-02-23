<template>
  <div id="app">
    <!-- 컴포넌트 만들어볼까 -->
    <!-- components파일안에 vue파일 하나 ㅁ나들어. FriedChicken.vue // 컴포넌트 명의 시작은 대문자ㅗㄹ 시작해야함 -->
    <!-- salt라는 이름으로 data salt의 값을 FriedChicken으로 보내준다 : 부모에서 자식으로 =>이거는 props -->
      <FriedChicken :salt="salt" @message="getemit"></FriedChicken>
  </div>
</template>


<script>

import FriedChicken from './components/FriedChicken.vue'

export default{
  //컴포넌트만드는중
  name: 'App',
  components: {FriedChicken},
  data() {
    return {
      salt:30,
      message:"",
    }
  },

  methods: { 
    hello(){
      alert("hello")
    },
    getemit(message){
      console.log("여기는 app컴포넌트")
      alert(message)
    }
  },
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  border: solid 1px black;
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
