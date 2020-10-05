import axios from "axios";

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params:{
        "api_key":"d4ccd4f00c0a2c7c876bd4a32e58cf76",
        "language":"ja-JP",
    }
});

export const moviesApi = {
    nowPlaying: () => api.get("movie/now_playing", {
        params: {
            region:"jp"
        }
    }),
    upComing: () => api.get("movie/upcoming", {
        params: {
            region:"jp"
        }
    }),
    popular: () => api.get("movie/popular"),
    movieDetail: (id) => api.get(`movie/${id}`, {
        params:{
            append_to_response: "videos"
        }
    }),
    search: (term) => api.get("search/movie", {
        params:{
            query: encodeURIComponent(term),
            region: "jp"
        }
    })
}

const tvApi = {
    topRated: () => api.get("tv/top_rated"),
    popular: () => api.get("tv/popular"),
    airingToday: () => api.get("tv/airing_today"),
    showDetail: (id) => api.get(`${id}`, {
        params:{
            append_to_response: "videos"
        }
    }),
    search: (term) => api.get("search/tv", {
        params:{
            query: encodeURIComponent(term),
            region: "jp"
        }
    })
}