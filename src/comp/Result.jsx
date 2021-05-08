import FetchData from "../FetchData";
import PosRes from "./PosRes";
import ErrorFetch from "./ErrorFetch";

const Result = () => {

    const { data,error } = FetchData('http://localhost:8000/post');

    return (
        <div>
            {data && <PosRes val={data} />}
            {error && <ErrorFetch err={error} />}
        </div>
    )
}
 
export default Result;