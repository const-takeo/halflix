import axios from "axios";

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params:{
        "api_key":"d4ccd4f00c0a2c7c876bd4a32e58cf76",
        "language":"en-US",
        "timezone":"Asia/Tokyo"
    }
});

export const moviesApi = {
    nowPlaying: () => api.get("movie/now_playing", {
        params: {
            "region":"JP",
            append_to_response: "images",
            include_image_language: "JP"
        }
    }),
    upComing: () => api.get("movie/upcoming", {
        params: {
            region:"JP"
        }
    }),
    popular: () => api.get("movie/popular", {
        params:{
            append_to_response: "images",
            include_image_language: "jp",
        }
    }),
    movieDetail: (id) => api.get(`movie/${id}`, {
        params:{
            region:"JP",
            append_to_response: "videos",
        }
    }),
    search: (term) => api.get("search/movie", {
        params:{
            query: term,
            region: "JP"
        }
    })
}

export const tvApi = {
    topRated: () => api.get("tv/top_rated"),
    popular: () => api.get("tv/popular"),
    airingToday: () => api.get("tv/airing_today"),
    showDetail: (id) => api.get(`tv/${id}`, {
        params:{
            append_to_response: "videos"
        }
    }),
    search: (term) => api.get("search/tv", {
        params:{
            query: term,
            region: "JP"
        }
    })
}