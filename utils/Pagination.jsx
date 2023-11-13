import {useEffect, useState} from 'react'
import PaginationControl from './PaginationControl';
import apiRequest from '../APIs/ApiRequest';

const Pagination = (props) => {
    const { data, children} = props
    const [ currentPageData, setCurrentPageData] = useState([])
    const [ totalPages, setTotalPages] = useState(0)
    const [currentPage, setCurrentPage] = useState(0)
    useEffect(() => {
        if (data){
            const totalPages = data.totalPages
            const itemsPerPage = data.count
            const currentPage = data.page
            const startIndex = (currentPage - 1) * itemsPerPage;
            const endIndex = startIndex + itemsPerPage;
            const currentPageData = data.results;
            setCurrentPageData((prevData) =>currentPageData)
            setTotalPages((prevData) =>totalPages)
            setCurrentPage((prevData) => currentPage)
        }
       
    }, [data])
    

    const pageChangeHandler = async (pageNumber) => {
        const data = await apiRequest.quotes(pageNumber)
        props.changeData(data)
    }
   
    return(
        <>
            {children(currentPageData)}
            <PaginationControl
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange = {pageChangeHandler}
            />
        </>
    )
}

export default Pagination