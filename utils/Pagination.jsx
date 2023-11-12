import {useState} from 'react'
import PaginationControl from './PaginationControl';
import apiRequest from '../APIs/ApiRequest';

const Pagination = (props) => {
    const {data, children} = props
    // Calc pages total number
    const totalPages = data.totalPages
    const itemsPerPage = data.count
    const currentPage = data.page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentPageData = data.results.slice(startIndex, endIndex);

    const pageChangeHandler = (pageNumber) => {
        console.log(pageNumber);
        apiRequest.quotes(pageNumber)
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