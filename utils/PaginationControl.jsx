
const PaginationControl = (props) => {
    const res = Array.from(props.totalPages)
    console.log(res);
    console.log(props.totalPages);
    return(
        <nav>
            <ul className='pagination justify-content-end'>
                {/* Render pagination buttons here */}
                
                {Array.from({ length: props.totalPages }).map((_, index) => (
                    <li className='page-item' key={index}>
                        <button onClick={() => onPageChange(index + 1)}>
                            {index + 1}
                        </button>
                    </li>
                    ))
                }
            </ul>
        </nav>
    )
}

export default PaginationControl