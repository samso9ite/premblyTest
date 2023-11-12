import apiRequest from "../../APIs/ApiRequest"
import useApiCallOnMount from "../../Hooks/useApiCallOnMount"

const CovidStats = () => {
    const {loading, data, error} = useApiCallOnMount(apiRequest.covid)
    console.log(data);
    return(
        <>

        </>
    )
}

export default CovidStats