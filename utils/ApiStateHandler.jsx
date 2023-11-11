const ApiStateHandler = ({loading, error, children}) => {
    console.log(loading);
    if(error){
        return "Api request isn't successfull, please try again later"
    }
    return loading ? 'loading .... ' : children
}

export default ApiStateHandler;