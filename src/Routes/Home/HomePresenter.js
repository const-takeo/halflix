import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "../../Components/Loader";
import Message from "../../Components/Message";
import Poster from "../../Components/Poster";
import Helmet from "react-helmet";


const Container = styled.div`
    padding: 20px
`;

const HomePresenter = ({
    nowPlaying,
    upComing,
    popular,
    error,
    loading
}) => (
    <>
        <Helmet>
            <title>Movies | HALFLIX</title>
        </Helmet>
        {loading ? <Loader/> : (
        <Container>
            {nowPlaying && nowPlaying.length > 0 && (
                <Section title="Now Playing">
                    {nowPlaying.map(movie => (
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
                </Section>
            )}
            {popular && popular.length > 0 && (
                <Section title="Popular Movies">
                    {popular.map(movie => (
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
                </Section>
            )}
            {upComing && upComing.length > 0 && (
                <Section title="Upcoming Movies">
                    {upComing.map(movie => (
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
                </Section>
            )}
            {error && <Message color="#d63031" text={error} />}
        </Container>
        )}
    </>
);

HomePresenter.propTypes = {
    nowPlaying: PropTypes.array,
    upComing: PropTypes.array,
    popular: PropTypes.array,
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired
}

export default HomePresenter;