<template>
    <div class="main-container">
        <Form></Form>
        <reactive-bar-chart v-if="chartData" :chart-data="chartData"></reactive-bar-chart>
    </div>
</template>

<script>
import Form from '../components/Form'
import ReactiveBarChart from "../components/ReactiveBarChart"
import {mapState, mapActions} from "vuex";
export default{
    components:{
        Form,
        ReactiveBarChart
    },
    computed:{
        ...mapState(["chartData"])
    },
    methods:{
        ...mapActions(["generateChartData"])
    },
    async mounted(){
        this.generateChartData();
    }
}
</script>

<style>
.main-container{
    display: flex;
    padding: 20px;
}   
main-container > * {
    flex : 1;
}
</style>