import apiRequest from "../APIs/ApiRequest";

const PaginationControl = (props) => {
 const onPageChange = (pageNumber) => {
    apiRequest.quotes(pageNumber)
 }

 const renderPageButtons = () => {
    const totalPages = props.totalPages;
    const currentPage = props.currentPage || 1;
    const visiblePageCount = 20; // You can adjust this value based on how many page buttons you want to show

    if (totalPages <= visiblePageCount) {
      // If there are fewer pages than the visible page count, show all buttons
      return Array.from({ length: totalPages }).map((_, index) => (
        <li className={`page-item ${index + 1 === currentPage ? 'active' : ''}`} key={index}>
          <button onClick={() => onPageChange(index + 1)}>
            {index + 1}
          </button>
        </li>
      ));
    } else {
      // If there are more pages than the visible page count, show ellipsis
      const pageButtons = [];
      const leftEllipsis = currentPage > Math.floor(visiblePageCount / 2) + 1;
      console.log(leftEllipsis);
      const rightEllipsis = currentPage < totalPages - Math.floor(visiblePageCount / 2);
      console.log(rightEllipsis);

      for (let i = 1; i <= totalPages; i++) {
        if (i === 1 || i === totalPages || (i >= currentPage - Math.floor(visiblePageCount / 2) && 
        i <= currentPage + Math.floor(visiblePageCount / 2))) {
          pageButtons.push(
            <li className={`page-item ${i === currentPage ? 'active' : ''}`} key={i}>
              <button onClick={() => onPageChange(i)}>
                {i}
              </button>
            </li>
          );
        } else if ((i === currentPage - Math.floor(visiblePageCount / 2) - 1 &&
         !leftEllipsis) || (i === currentPage + Math.floor(visiblePageCount / 2) + 1 && !rightEllipsis)) {
          pageButtons.push(<li key={i}><span>...</span></li>);
        }
      }

      return pageButtons;
    }
  };

    return(
        <nav>
            <ul className="pagination">
            {renderPageButtons()}
            </ul>
        </nav>
    )
}

export default PaginationControl    