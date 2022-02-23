<template>
    <div>
        <h1>여기는 Chicken 컴포넌트</h1>
        Chicken salt : {{getSalt}}<br>
        Chicken message : {{getMsg}}<br>
    </div>
</template>


<script>

import {mapGetters} from 'vuex';

export default{
    name: "Chicken",
    computed:{
        ...mapGetters(['getSalt']),
        ...mapGetters(['getMsg']),
    }
}
</script>
