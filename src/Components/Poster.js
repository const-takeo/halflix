import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div``;

const ImageContainer = styled.div``;

const Image = styled.div``;

const Rating = styled.span``;

const Title = styled.span``;

const Year = styled.span``;

const Poster = ({id, imageURL, title, rating, year, isMovie = false}) => (
    <Link to={isMovie ? `movie/${id}` : `show/${id}`}>
        <Container>
            <ImageContainer>
                <Image bgURL={imageURL} />
                <Rating>
                    <span role="img" aria-label="rating">{"⭐️".repeat(Math.floor(rating*0.5))}</span>
                    {" "}{Math.floor(rating*0.5)}/5
                </Rating>
            </ImageContainer>
            <Title>{title}</Title>
            <Year>{year}</Year>
        </Container>
    </Link>
);

Poster.propTypes = {
    id: PropTypes.number.isRequired,
    imageURL: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    rating: PropTypes.number,
    year: PropTypes.string,
    isMovie: PropTypes.bool
}

export default Poster;