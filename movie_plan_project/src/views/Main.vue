<template>
    <div>
        <div class="d-flex flex-wrap" v-if="nowPlaying">
            <div class="h4 ml-3 mt-5 mb-4 text-white">Now Playing</div>
            <MovieLists :movieList="nowPlaying"></MovieLists>
            <MovieText :text="'Popular'"></MovieText>
            <MovieLists :movieList="popular"></MovieLists>
            <MovieText :text="'Comming Soon'"></MovieText>
            <MovieLists :movieList="upComing"></MovieLists>
        </div>
    </div>
</template>
<script>
import MovieLists from '../components/MovieLists';
import MovieText from '../components/MovieText';
import {movieApi} from '../utils/axios';
import {mapMutations} from 'vuex';

export default{
    data(){
        return {
            nowPlaying:{},
            popular:{},
            upComing:{}
        }
    },
    components:{
        MovieText,
        MovieLists,
    },
    methods:{
        ...mapMutations(["SET_LOADING"])
    },
    created(){
        this.SET_LOADING(true);
    },
    async mounted(){
        try{
            const { data } = await movieApi.nowPlaying();
            this.movieList = data.results;
            const {nowPlaying, popular, upComing} = movieApi;
            const requestArr = [nowPlaying, popular, upComing];
            const [now, pop, up] = await Promise.all(requestArr.map((li) => li().then((res) => res.data.results)));
            this.SET_LOADING(false);
            this.nowPlaying = now.results;
            this.popular = pop.results;
            this.upComing = up.results;
        } catch(error){
            this.movieList = "해당자료가 존재하지 않습니다."
        }
    }
}
</script>
<style></style>
