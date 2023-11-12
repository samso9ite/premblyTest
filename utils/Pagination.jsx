import {useState} from 'react'
import PaginationControl from './PaginationControl';

const Pagination = (props) => {
    const {data, children} = props
    console.log(data);
    // Calc pages total number
    const totalPages = data.totalPages
    const itemsPerPage = data.count
    const currentPage = data.page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentPageData = data.results.slice(startIndex, endIndex);
    console.log(totalPages);

    // const handlePageChange = (newPage) => {
    //     setCurrentPage(newPage);
    // };
  
    return(
        <>
            {children(currentPageData)}
            <PaginationControl
                currentPage={currentPage}
                totalPages={totalPages}
                // onPageChange={handlePageChange}
            />
        </>
    )
}

export default Pagination