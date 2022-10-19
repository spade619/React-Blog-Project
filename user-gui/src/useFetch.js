import {useState, useEffect} from 'react';

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortControl = new AbortController();


        setTimeout(() =>{
        fetch(url, {signal: AbortController.signal})
        .then(res => {
           if(!res.ok){
            throw Error('couldnt get the data');
           }
         return res.json();
        })
        .then(data => {
         setData(data);
         setIsPending(false);
         setError(null);
        })
        .catch(err => {
            if (err.name ==='AbortError') {
                console.log('fetch request aborted');
            } else {
                setIsPending(false);
                setError(err.message);
            }
           
        })
    }, 1000);
    return() => abortControl.abort();
    }, [url]);
    
    return {data, isPending, error}
}

export default useFetch;