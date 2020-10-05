import React, { useState } from "react";
import SearchPresenter from "./SearchPresenter";

const SearchContainer = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [movieResults, setMovieResults] = useState(null);
    const [tvResults, setTvResults] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    return (
        <SearchPresenter 
            error={error}
            loading={loading}
            movieResults={movieResults}
            tvResults={tvResults}
            searchTerm={searchTerm}
            />
    );
};
export default SearchContainer;