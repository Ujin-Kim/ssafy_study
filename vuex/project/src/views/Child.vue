<template>
  <div id="app">
    <!-- Child Counter: {{childCounter}} <br> -->


    <!-- getter 첫번째 방법 -->
    <!-- Child Counter: {{getCounter}} <br> -->


    <!-- getter두번재 방법 -->
    Child Counter: {{childCounter}} <br>
    <button>+</button>
    <button>-</button>
  </div>
</template>

<script>
export default{
    name: "Child",
    // data(){
    //     return{
    //         childCounter: 0,
    //     }
    // }
    computed:{
        // getter첫번째 방법
        // ...mapGetters(['getCounter'])


        // getter두번째 방법
        childCounter(){
            return this.$store.getters.getCounter;
        },
        doubleCounter(){
            return this.$store.getters.doubleCounter;
        }
        
    }
}
</script>