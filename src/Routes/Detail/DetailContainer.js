import React, { useState } from "react";
import DeatailPresenter from "./DetailPresenter";

const DetailContainer = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [result, setResult] = useState(null);
    return (
        <DeatailPresenter
            error={error}
            loading={loading}
            result={result}
            />
    );
};
export default DetailContainer;