import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "../../Components/Loader";
import { Helmet } from "react-helmet";

const Container = styled.div`
    height: calc(100vh - 50px);
    width: 100%;
    position: relative;
    padding: 50px;
`;

const BackDrop = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${props => props.bgImg});
    background-size: cover;
    background-position: center center;
    filter:blur(3px);
    opacity:0.5;
`;

const Content = styled.div`
    display:flex;
    width: 100%;
    height: 100%;
    position:relative;
    z-index: 1;
`;

const Cover = styled.div`
    width: 30%;
    height: 100%;
    background-image: url(${props => props.bgImg});
    background-position: center center;
    background-size: cover;
    border-radius:5px;
`;

const Data = styled.div`
    width:70%;
    margin-left:10px;
    border-radius:5px;
`;

const Title = styled.h3`
    font-size: 32px;
    margin-bottom: 10px;
`;

const ItemContainer = styled.div`
    margin: 10px 0px 20px;
`;

const Item = styled.span``;

const Divider = styled.span`
    margin: 0 10px;
`;

const Overview = styled.p`
    font-size:12px;
    opacity:0.7;
    line-height:1.5;
    width:50%;
`;

const DetailPresenter = ({
    result,
    error,
    loading
}) => loading ? (
    <>
    <Helmet>
        <title>Loading... | HALFLIX</title>
    </Helmet>
    <Loader/>
    </>
    ) : (
    <Container>
        <Helmet>
        <title>{result.title ? result.title : result.name} | HALFLIX</title>
        </Helmet>
        <BackDrop bgImg={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}/>
        <Content>
            <Cover bgImg={result.poster_path ? 
                `https://image.tmdb.org/t/p/original${result.poster_path}` : 
                require("../../assets/no-poster-available.jpg")}/>
            <Data>
                <Title>{result.title ? result.title : result.name}</Title>
                <ItemContainer>
                    <Item>
                        {result.release_date ? 
                        String(result.release_date).replace("-", ".").substring(0, 7) : 
                        String(result.first_air_date).replace("-", ".").substring(0, 7)}
                    </Item>
                    <Divider>❘</Divider>
                    <Item>
                        {result.runtime ? result.runtime : `${String(result.episode_run_time)}分`}
                    </Item>
                    <Divider>❘</Divider>
                    <Item>
                        {result.genres && 
                        result.genres.map((genre, index) => 
                        index === result.genres.length -1 ? 
                        genre.name : 
                        `${genre.name}/ `)}
                    </Item>
                </ItemContainer>
                <Overview>
                    {result.overview}
                </Overview>
            </Data>
        </Content>
    </Container>
    );

DetailPresenter.propTypes = {
    result: PropTypes.object,
    error: PropTypes.string,
    loading: PropTypes.bool
}

export default DetailPresenter;