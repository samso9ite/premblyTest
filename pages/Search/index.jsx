import SearchFilter from "@/components/SearchFilter"
import { useSelector } from "react-redux"

const Search = () => {
    const data = useSelector(state => state.search.records)
   
    return(
        <>
        <div className="container">
            <h2 className="text-center mt-5">Search Component</h2>
            <SearchFilter records={data} />
           <table className="table table-striped mt-5">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Gender</th>
                    <th>Ip Address</th>
                </tr>
                </thead>
                <tbody>
                {data && data?.map((user) => (
                    <tr>
                        <td>{user.first_name} { user.last_name}</td>
                        <td>{user.email}</td>
                        <td>{user.gender}</td>
                        <td>{user.ip_address}</td>
                    </tr>
                ))
                   
                }
                </tbody>
            </table>   
            </div>     
        </>
    )
}

export default Search