import { useState } from "react"
import { useDispatch } from "react-redux"
import { searchActions } from "@/store/search-slice"

const SearchFilter = (props) => {
    const [record, setRecord] = useState(props.records)
    const dispatch = useDispatch()

    const queryChangeHandler = (event) => {
        let searchQuery = event.target.value
        filterData(searchQuery)
    }
    const filterData = (query) => {
        const filteredData = record.filter((item) => 
            Object.values(item).some(value =>
                typeof value === 'string' && value.toLowerCase().includes(query.toLowerCase())
            )
        )
        dispatch(searchActions.updateRecord(filteredData))
    }

    return(
    <>
        <input type="text" className="form-control" placeholder="Search..." onChange={queryChangeHandler} />
    </>
    )
}

export default SearchFilter