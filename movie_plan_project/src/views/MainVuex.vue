<template>
    <div>
        <div class="d-flex flex-wrap" v-if="movieList">
            <MovieListsVuex></MovieListsVuex>
        </div>
    </div>
</template>

<script>

import MovieListsVuex from '../components/MovieListsVuex';
import {movieApi} from '../utils/axios';
import {mapMutations} from 'vuex';
export default{
    data(){
        return{
            movieList: {},
        }
    },
    components:{
        MovieListsVuex,
    },
    methods:{
        ...mapMutations(["SET_LOADING", "SET_NOW_PLAYING", "SET_POPULAR", "SET_UP_COMING"])
    },
    created(){
        this.SET_LOADING(true);
    },
    async mounted(){
        try{
            const {data} = await movieApi.nowPlaying();
            this.SET_LOADING(false);

            this.SET_NOW_PLAYING(data.results);

            const {nowPlaying, popular, upComing} = movieApi;
            const requestArr = [nowPlaying, popular, upComing];
            const[now, pop, up] = await Promise.all(requestArr.map((li) => li().then((res) => res.data)))
        } catch(error){
            this.movieList = "해당자료가 존재하지 않습니다."
        }
        
    }
}
</script>

<style></style>