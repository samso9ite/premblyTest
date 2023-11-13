
const PaginationControl = (props) => {

 

 const renderPageButtons = () => {
    const active = {
        backGroundColor:'red'
    }
    const totalPages = props.totalPages;
    const currentPage = props.currentPage || 1;
    const visiblePageCount = 20; 

    if (totalPages <= visiblePageCount) {
      // If there are fewer pages than the visible page count, show all buttons
      return Array.from({ length: totalPages }).map((_, index) => (
        <li  key={index}>
          <button onClick={() => onPageChange(index + 1)}>
            {index + 1}
          </button>
        </li>
      ));
    } else {
      // If there are more pages than the visible page count, show ellipsis
      const pageButtons = [];
     
      for (let i = 1; i <= totalPages; i++) {
        if (i === 1 || i === totalPages || (i >= currentPage - Math.floor(visiblePageCount / 2) && 
        i <= currentPage + Math.floor(visiblePageCount / 2))) {
          pageButtons.push(
            <li className={`page-item ${i === currentPage ? 'active' : ''}`} key={i}>
              <button className="btn btn-primary" style={{borderRadius:'0'}} onClick={() => props.onPageChange(i)}>
                {i}
              </button>
            </li>
          );
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