import FetchData from "../FetchData";
import PosRes from "./PosRes";
import ErrorFetch from "./ErrorFetch";
import NullData from "./NullData";

const Result = () => {

    const { data,error,useNull } = FetchData('http://localhost:8000/post');

    return (
        <div>
            {data && <PosRes val={data} />}
            {error && <ErrorFetch err={error} />}
            {useNull && <NullData/>}
        </div>
    )
}
 
export default Result;