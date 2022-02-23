<template>
    <div>여기는 프라이드 치킨 컴포넌트
        <Fry :salt="salt"></Fry>
        <button @click="message">emit버튼</button>
        <!-- q반대로 부모에게 올려보자 message를 -->
    </div>
</template>

<script>

import Fry from './Fry.vue'

export default {
    name: "FriedChicken",
    props:["salt"],
    components:{
        Fry,
    },
    mounted(){
        console.log("프라이드 치킨컴포넌트의 salt", this.salt);
    },
    methods:{
        message(){
            this.$emit("message", "치킨은맛있따");
        }
    }
}
</script>