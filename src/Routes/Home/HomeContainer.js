import React, { useEffect, useState } from "react";
import HomePresenter from "./HomePresenter";
import {moviesApi} from "../../api";

const HomeContainer = () => {
    // state = {
    //     nowPlaying: null,
    //     upComing: null,
    //     popular: null
    // }
    const [nowPlaying, setNowPlaying] = useState(null);
    const [upComing, setUpComing] = useState(null);
    const [popular, setPopular] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchDate = async () => {
            try {
                const {data:{results: nowPlaying}} = await moviesApi.nowPlaying();
                const {data:{results: upComing}} = await moviesApi.upComing();
                const {data:{results: popular}} = await moviesApi.popular();
                setNowPlaying(nowPlaying);
                setUpComing(upComing);
                setPopular(popular);
            } catch (error) {
                setError("映画を見つかりませんでした。");
            } finally {
                setLoading(false);
            }
        };
        fetchDate();
    },[]);
    return (
        <HomePresenter 
            nowPlaying={nowPlaying} 
            upComing={upComing} 
            popular={popular}
            error={error}
            loading={loading} 
        />
    );
};
export default HomeContainer;