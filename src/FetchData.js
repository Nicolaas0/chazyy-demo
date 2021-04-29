import { useState } from "react";

const FetchData = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(url)
            .then((res) => {
                return res.json;
            })
            .then((data) => {
                setData(data);
            })
    }, [url]);
    return { data };
}
 
export default FetchData;