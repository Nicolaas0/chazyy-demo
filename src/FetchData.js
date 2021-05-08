import { useEffect, useState } from "react";

const FetchData = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {

        const abortCont = new AbortController();
        
            fetch(url,{signal:abortCont.signal})
            .then((res) => {
                if (!res.ok) {
                    throw Error('Error Fetching Data');
                }
                return res.json();
            })
            .then((data) => {
                setData(data);
                console.log('Data ready!');
                setError(null);
            })
                .catch((err) => {
                    if (err.name === 'AbortError') {
                        console.log('Fetch Abort');
                    } else {
                        setError(err.message)
                    }
                })
    return () => abortCont.abort();
    });
    return {data,error};
}
 
export default FetchData;