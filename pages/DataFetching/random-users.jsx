import apiRequest from "@/APIs/ApiRequest"
import useApiCallOnMount from "@/Hooks/useApiCallOnMount"
import ApiStateHandler from "@/utils/ApiStateHandler"

const RandomUsers = () => {
    const [loading, data, error] =  useApiCallOnMount(apiRequest.users)
    return (
       
       <>
            <h2 className="text-center mt-5">Profile Details</h2>
            <ApiStateHandler loading={loading} error={error}>
                {data && data.results.map((user) => (
                    <div class="card">
                        <div class="card-body">
                            <img src={user.picture.large} className=""/>
                            <h4 class="card-title">{user.name.title} {user.name.first} {user.name.last}</h4>
                            <p class="card-text">{user.cell}</p>
                            <a class="card-link">Gender: {user.gender}</a>
                            <a class="card-link">Country: {user.location.country}</a>
                            <a class="card-link">Postcode: {user.location.postcode}</a>
                            <a class="card-link">State:{user.location.state}</a>
                        </div>
                    </div>
                ))
                }
            </ApiStateHandler>
        </>
    )
}

export default RandomUsers