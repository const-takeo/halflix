import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const SearchPresenter = ({
    error,
    loading,
    movieResults,
    tvResults,
    searchTerm,
    handleSubmit
}) => null;

SearchPresenter.propTypes = {
    movieResults: PropTypes.array,
    tvResults: PropTypes.array,
    searchTerm: PropTypes.string,
    error: PropTypes.string,
    handleSubmit: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired
}

export default SearchPresenter;