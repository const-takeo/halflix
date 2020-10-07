import React, { useEffect, useState } from "react";
import { moviesApi, tvApi } from "../../api";
import SearchPresenter from "./SearchPresenter";

const SearchContainer = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [movieResults, setMovieResults] = useState(null);
    const [tvResults, setTvResults] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        if (searchTerm !== "") {
            searchByTerm();
        }
    }
    const searchByTerm = async () => {
        try {
            setLoading(true);
            const {data:{results : tvResults}} = await tvApi.search(searchTerm);
            const {data:{results : movieResults}} = await moviesApi.search(searchTerm);
            setTvResults(tvResults);
            setMovieResults(movieResults);
        } catch (error) {
            setError(`${searchTerm}の検索結果がございませんでした。`);
        } finally {
            setLoading(false); 
        }
    }

    const updateTerm = (e) => {
        const {target:{value}} = e;
        setSearchTerm(value);
    };

    return (
        <SearchPresenter 
            error={error}
            loading={loading}
            movieResults={movieResults}
            tvResults={tvResults}
            searchTerm={searchTerm}
            handleSubmit={handleSubmit}
            updateTerm={updateTerm}
            />
    );
};
export default SearchContainer;