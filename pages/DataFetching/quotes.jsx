import { useState } from "react"
import apiRequest from "../../APIs/ApiRequest"
import useApiCallOnMount from "../../Hooks/useApiCallOnMount"
import ApiStateHandler from "../../utils/ApiStateHandler"
import Pagination from "../../utils/Pagination"

const Quotes = () => {
    const [queryData, setQueryData] = useState(null)
    const[loading, data, error] = useApiCallOnMount(() => apiRequest.quotes('1'))
    // console.log(data);
    // setQueryData(data)
    console.log(queryData);
    return (
       
        <>
          <h2 className="text-center">Quotes</h2> 
            <ApiStateHandler loading={loading} error={error}>
                <ul>
                    {data &&  <Pagination data={data}>
                        {(currentPageData) =>
                            currentPageData.map((item) => (
                                <li key={item._id} >{item.content}<b>({item.author})</b></li>
                                )
                            )
                        
                        }
                    </Pagination>
                    }
                </ul>
             </ApiStateHandler>  
            
          
        </>
    )
}

export default Quotes