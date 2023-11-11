

const generalRequest = async (url, method, formData) => {
    try{
        if(method == 'get'){
            let data = await fetch(url)
            data = await data.json()
            console.log(data);
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

 const apiRequest = {
    quotes:() => generalRequest('https://quotable.io/quotes?page=1', 'get'),
    covid:() => generalRequest('https://covid19.mathdro.id/api', 'get'),
    users:() => generalRequest('https://randomuser.me/api/', 'get')
}



export default apiRequest