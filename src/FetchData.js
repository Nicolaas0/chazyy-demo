import { useEffect, useState } from "react";

const FetchData = (url) => {
    const [data, setData] = useState(null);

    useEffect(() => {

        fetch(url)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setData(data);
                console.log('Data ready!');
            })
    }, [url]);
    return { data};
}
 
export default FetchData;