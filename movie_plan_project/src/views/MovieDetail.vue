<template>
<!--  ovieDetail.backdrop_path 가 undefined인 경우 문제 생겨서 이거는 실제 현업에서 쓰이는 스킬-->
    <div class="movie-detail" v-if="movieDetail && movieDetail.backdrop_path">
        <div class="movie-detail-image" :style="{backgroundImage:`url(${image(movieDetail.backdrop_path)})`}"></div>
        
        <div class="movie-content d-flex">
            <div>
                <!-- :src="" 이거는 단방향바인딩 -->
                <img class="mt-2" style="height:80vh;" :src="image(movieDetail.poster_path)"/>
            </div>
            <div class="ml-4 w-75">
                <h1 class="movie-title"> {{movieDetail.title}} </h1>
                <div class="movie-information-wrapper mt-4 d-flex align-items-center">
                    <div>{{movieDetail.release_date.split('-')[0]}}</div>
                    <span class="ml-1">ㆍ</span>
                    <div>{{movieDetail.runtime}} 분</div>
                    <span class="ml-1">ㆍ</span>
                    <div class="ml-2 d-flex">
                        <div class="genres" v-for="genre in movieDetail.genres" :key="genre.id">
                            {{genre.name}}
                        </div>
                    </div>
                    <span v-if="movieDetail.homepage" class="ml-1">ㆍ</span>
                    <a v-if="movieDetail.homepage" class="ml-1 h4 homepage-Link" target="_blank" :href="movieDetail.homepage">
                        Link
                    </a>
                </div>
                <div class="movie-overview mt-3">{{movieDetail.overview}}</div>
                <div v-if="movieDetail.videos && movieDetail.videos.results">
                    <iframe v-if="movieDetail.videos.results[0]" class="mt-5" :key="movieDetail.videos.results[0].key" width="640" height="360" :src="youtube(movieDetail.videos.results[0].key)" frameborder="0" allow="fullscreen">
                    </iframe>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {movieApi} from "../utils/axios";
import {mapMutations} from "vuex";

export default {
    data(){
        return{
            movieDetail:{},
        }
    },
    async mounted(){
        //lifycycle
        this.SET_LOADING(true);
        // 어떻게 넘어왔는지 확인할래
        console.log(this.$route.params.id);
        const {id} = this.$route.params;
        const {data} = await movieApi.movieDetail(id);
        this.movieDetail = data;
        this.SET_LOADING(false);
    },
    methods:{
        ...mapMutations(["SET_LOADING"]),
        image(img){
            return `https://image.tmdb.org/t/p/original/${img}`;
        },
        youtube(src){
            return `https://www.youtube.com/embed/${src}`;
        }
    }
}
</script>

<style>

</style>