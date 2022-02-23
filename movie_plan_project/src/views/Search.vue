<template>
    <div>
        <!-- 원래 submit은 서버에 데이터 보냇다고 생각해서 자동으로 새로고침하는데 그거 못하게 prevent -->
        <b-form @submit.prevent="onSearch">
            <b-form-input class="border-black" v-model="keyword"></b-form-input>
        </b-form>

        <MovieText v-if="movieList" :text="'Search Result'"></MovieText>
        <MovieLists :movieList="movieList"></MovieLists>
    </div>
</template>

<script>
import MovieText from '../components/MovieText';
import MovieLists from '../components/MovieLists';
// axios사용
import {movieApi} from '../utils/axios';
// vuex에서 동기작업할때 사용
import {mapMutations} from 'vuex';

export default{
    data(){
        return {
            keyword:"",
            movieList:""
        }
    },
    components:{
        MovieText,
        MovieLists,
    },
    //created : 이페이지가 만ㄷ르어졌응ㄹ때
    created(){
        this.SET_LOADING(false);
    },
    methods:{
        ...mapMutations(["SET_LOADING"]),

        // 데이터가 넘어오는시간이 얼마나걸리지모르니까 async
        async onSearch(){
            this.SET_LOADING(true);
            console.log(this.keyword);
            if(!this.keyword){
                alert("영화 제목을 입력하세요!");
                this.keyword="";
                return;
            }
            const {data} = await movieApi.search(this.keyword);
            console.log(data);
            this.movieList = data.results;
            this.SET_LOADING(false);
            this.keyword = "";
        }
    }
}
</script>

<style>
</style>