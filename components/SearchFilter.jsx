import { useState } from "react"
import { useDispatch } from "react-redux"
import { searchActions } from "@/store/search-slice"

const SearchFilter = (props) => {
    const [record, setRecord] = useState(props.records)
    const dispatch = useDispatch()

    // This function triggers on every query input by the user, capturing the query parameter in a variable
    const queryChangeHandler = (event) => {
        let searchQuery = event.target.value
        filterData(searchQuery)
    }

    // This function performs the filtering of the record based on the user query and then replacing the store data
    const filterData = (query) => {

        const filteredData = record.filter((item) => 
            Object.values(item).some(value => 
                typeof value === 'string' && value.toLowerCase().includes(query.toLowerCase()) // This gets an array of values for each
                // object and then checking if the values contain the search query
            )
        )
        // This calls the updateRecord reducer to replace the record with the filtered data.
        dispatch(searchActions.updateRecord(filteredData))
    }

    return(
    <>
        <input type="text" className="form-control" placeholder="Search..." onChange={queryChangeHandler} />
    </>
    )
}

export default SearchFilter