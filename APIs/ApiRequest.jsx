
// This is implemented to ensure DRY principle for API Calls. 
// It accepts 2-3 argument depending on the request method
const generalRequest = async (url, method, formData) => {
    try{
        if(method == 'get'){
            let data = await fetch(url)
            data = await data.json()
            return data;
            
        }else{
            const data = await fetch(url, {method:method, formData})
            return data
        }
          
    }catch(error){
        if(error.response && error.response.data){
            let error = error.response.data
        }
        return error
    }
};

// This is an object where all our services are being called.
const apiRequest = {
    quotes:(pageNumber) => generalRequest(`https://quotable.io/quotes?page=${pageNumber}`, 'get'),
    covid:() => generalRequest('https://covid19.mathdro.id/api', 'get'),
    users:() => generalRequest('https://randomuser.me/api/', 'get')
}



export default apiRequest