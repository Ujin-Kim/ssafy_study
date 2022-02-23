<template>
  <div id="app">
    Child Counter : {{childCounter}} <br>
    <button >+</button>
    <button >-</button>
  </div>
</template>

<script>

export default {
    name: "Child",

      computed:{
    childCounter(){
        return this.$store.getters.getCounter;
    },
    doubleCounter(){
        return this.$store.getters.doubleCounter;
    }
  }
}
</script>