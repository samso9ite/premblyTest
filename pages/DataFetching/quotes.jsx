import apiRequest from "@/APIs/ApiRequest"
import useApiCallOnMount from "@/Hooks/useApiCallOnMount"
import ApiStateHandler from "@/utils/ApiStateHandler"

const Quotes = () => {
    const[loading, data, error] = useApiCallOnMount(apiRequest.quotes)
    return (
       
        <>
          <h2 className="text-center">Quotes</h2> 
            <ApiStateHandler loading={loading} error={error}>
                <ul>
                    {
                        data?.results.map((quote) => (
                            <li key={quote._id} >{quote.content}<b>({quote.author})</b></li>
                            )
                        )
                    }
                </ul>
             </ApiStateHandler>  
            
          
        </>
    )
}

export default Quotes