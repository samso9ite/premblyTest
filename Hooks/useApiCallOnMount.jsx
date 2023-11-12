import { useState, useEffect } from "react";

const apiStatus = {
    loading: 'loading',
    complete: 'complete',
    errored: 'errored'
}

// This is a custom hook that can be reused when a request has to be made on component mount.
// This hook returns the status of the api and also the api response data.
const useApiCallOnMount = (service) => {
    console.log(service);
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

    return [status === apiStatus.loading, data, status === apiStatus.errored];
}

export default useApiCallOnMount;