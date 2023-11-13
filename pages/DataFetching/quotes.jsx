import { useState, useEffect } from "react"
import apiRequest from "../../APIs/ApiRequest"
import useApiCallOnMount from "../../Hooks/useApiCallOnMount"
import ApiStateHandler from "../../utils/ApiStateHandler"
import Pagination from "../../utils/Pagination"

const Quotes = () => {
    const [queryData, setQueryData] = useState(null)
    const[loading, data, error] = useApiCallOnMount(() => apiRequest.quotes('1'))
    useEffect(() => {
        // Update the state only if data is available
        if (data) {
          setQueryData(data);
        }
      },[data]);
    
    const changeData = (data) => {
        setQueryData(data)
    }
   
    return (
       
        <>
          <h2 className="text-center">Quotes</h2> 
            <ApiStateHandler loading={loading} error={error}>
                <ul>
                    {queryData &&  <Pagination data={queryData} changeData={changeData}>
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