<template>
    <div>여기는 프라이 컴포넌트
        <Chicken></Chicken>
     </div>
</template>

<script>

import Chicken from './Chicken.vue'

export default {
    name:"Fry",
    props:["salt"],
    components:{
        Chicken,
    },
    mounted(){
        console.log("프라이컴포넌트의 salt", this.salt);
    }
}
</script>