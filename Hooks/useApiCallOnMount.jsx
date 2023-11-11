import { useState, useEffect } from "react";

const apiStatus = {
    loading: 'loading',
    complete: 'complete',
    errored: 'errored'
}

const useApiCallOnMount = (service) => {
    const [status, setStatus] = useState(apiStatus.loading);
    const [data, setData] = useState(null);
    useEffect ( () => {
        service()
        .then((data) =>{
            setData(data);
            setStatus(apiStatus.complete)
        })
        .catch(() => {
            setStatus(apiStatus.errored)
        })
    }, []);

    return [status ===apiStatus.loading, data, status === apiStatus.errored];
}

export default useApiCallOnMount;