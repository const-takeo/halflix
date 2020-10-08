import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { moviesApi, tvApi } from "../../api";
import DetailPresenter from "./DetailPresenter";

const DetailContainer = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [result, setResult] = useState(null);
    // const [isMovie, setIsMovie] = useState(false);
    const {id} = useParams();
    const parsedId = parseInt(id);
    const history = useHistory();
    const {location:{pathname}} = history;
    const isMovie = pathname.includes("/movie/");
    useEffect(()=>{
        if(isNaN(parsedId)) {
            return history.push("/");
        }
        const fetchData = async () => {
            let results = null;
            try {
                if(isMovie) {
                    ({data : results} = await moviesApi.movieDetail(parsedId));
                } else {
                    ({data : results} = await tvApi.showDetail(parsedId));
                }
            } catch (error) {
                setError("探す物が見つかりませんでした。");
            } finally {
                setResult(results);
                setLoading(false);
            }
        }
        fetchData();
    },[])
    return (
        <DetailPresenter
        error={error}
        loading={loading}
        result={result}
        />
        );
};
export default DetailContainer;

