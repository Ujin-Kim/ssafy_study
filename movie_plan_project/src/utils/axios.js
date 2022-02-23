import axios from 'axios';

const request = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params:{
        api_key:"f95b98191527fba949d4062d3415017b",
        language: "ko-KR"
    }
})

console.log(request);

export const movieApi = {
    nowPlaying: () => request.get("movie/now_playing"),
    popular: () => request.get("movie/popular"),
    upComing: () => request.get("movie/upcoming"),

    movieDetail: (id) => request.get(`movie/${id}`, {
        params: {append_to_response : "videos"},
    }),

    search: (keyword) => request.get(`search/movie/`, {
        params: {
            query:keyword,
        }
    })
}