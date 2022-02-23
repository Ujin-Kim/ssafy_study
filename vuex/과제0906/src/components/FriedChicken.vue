<template>
    <div>
        <h1>여기는 Fried Chicken 컴포넌트</h1>
        FriedChicken salt : {{getSalt}}<br>
        FriedChicken message : {{getMsg}}<br>
        <Fry></Fry>
    </div>
</template>


<script>

import Fry from './Fry.vue'
import {mapGetters} from 'vuex';

export default{
    name: "FriedChicken", 
    components:{
        Fry,
    },
    computed:{
        ...mapGetters(['getSalt']),
        ...mapGetters(['getMsg']),
    }
}
</script>
