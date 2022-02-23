<template>
    <div>
        <h1>여기는 Fry 컴포넌트</h1>
        Fry salt : {{getSalt}}<br>
        Fry message : {{getMsg}}<br>
        <Chicken></Chicken>
    </div>
</template>


<script>

import Chicken from './Chicken.vue';
import {mapGetters} from 'vuex';

export default{
    name: "Fry", 
    components:{
        Chicken,
    },
    computed:{
        ...mapGetters(['getSalt', 'getMsg']),
    }
}
</script>
