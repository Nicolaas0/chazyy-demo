import { useState } from "react";

const FetchData = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        const abort = new AbortController();

        fetch({url, signal: abort.signal})
            .then((res) => {
                if (!res.ok) {
                    throw Error('Error fetching data');
                }
                return res.json;
            })
            .then((data) => {
                setData(data);
                setLoading(false);
                setError(null);
            })
            .catch(() => {
                if (err.name === 'AbortError') {
                    console.log('Fetch Abort');
                }
                setLoading(false);
                setError(err.message);
            })
        
        return () => abort.abort();
    }, [url]);
    return { data, loading, error };
}
 
export default FetchData;