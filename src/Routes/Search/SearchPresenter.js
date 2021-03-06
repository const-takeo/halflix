import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "../../Components/Loader";
import Section from "../../Components/Section";
import Message from "../../Components/Message";
import Poster from "../../Components/Poster";
import Helmet from "react-helmet";

const Container = styled.div`
    padding: 20px;
`;

const Form = styled.form`
    margin-bottom:50px;
    width: 100%;
`;

const Input = styled.input`
    all:unset;
    font-size:28px;
    width: 100%;
`;



const SearchPresenter = ({
    error,
    loading,
    movieResults,
    tvResults,
    searchTerm,
    handleSubmit,
    updateTerm
}) => (
    <Container>
        <Helmet>
            <title>Search | HALFLIX</title>
        </Helmet>
        <Form onSubmit={handleSubmit}>
            <Input placeholder="What are u looking for ?" value={searchTerm} onChange={updateTerm}/>
        </Form>
        {loading ? <Loader/> : 
            (
                <>
                    {
                        movieResults && 
                        movieResults.length > 0 && 
                        (<Section title="Movie Results">
                            {movieResults.map(
                            movie => (
                                <Poster 
                                    key={movie.id} 
                                    id={movie.id} 
                                    isMovie={true} 
                                    title={movie.title} 
                                    imageURL={movie.poster_path} 
                                    rating={movie.vote_average}
                                    year={movie.release_date.substring(0,4)}
                                />
                            ))}
                        </Section>)
                    }
                    {
                        tvResults && 
                        tvResults.length > 0 && 
                        (<Section title="TV Results">
                            {tvResults.map(
                            show => (
                                <Poster
                                    key={show.id} 
                                    id={show.id} 
                                    isMovie={false} 
                                    title={show.name} 
                                    imageURL={show.poster_path} 
                                    rating={show.vote_average}
                                    year={show.first_air_date && show.first_air_date.substring(0,4)}
                                />
                            ))}
                        </Section>)
                    }
                    {error && <Message color="#d63031" text={error} />}
                    {movieResults && 
                        tvResults && 
                        movieResults.length === 0 && 
                        tvResults.length === 0 && 
                        <Message text={`${searchTerm}の検索結果がございませんでした。`} color="#a5b1c2" />}
                </>
            )}
    </Container>);

SearchPresenter.propTypes = {
    movieResults: PropTypes.array,
    tvResults: PropTypes.array,
    searchTerm: PropTypes.string,
    error: PropTypes.string,
    handleSubmit: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    updateTerm: PropTypes.func.isRequired
}

export default SearchPresenter;