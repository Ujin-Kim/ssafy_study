<template>
    <button @click="getSalt">클릭</button>
    <!-- 버튼클릭되면 App.vue에잇는 데이터 salt의 양을 가져오는거 구현해보자 -->
</template>

<script>

export default {
    name:"Chicken",
    props:["salt"],
    methods:{
        getSalt(){
            alert(this.salt)
        }
    },
    mounted(){
        console.log("치킨 컴포넌트의 salt", this.salt);
    }
}
</script>