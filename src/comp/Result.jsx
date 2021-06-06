import FetchData from "../FetchData";
import PosRes from "./PosRes";
import ErrorFetch from "./ErrorFetch";
import NullData from "./NullData";
import Loading from "./Loading";

const Result = () => {

    const { data,error,useNull, loading } = FetchData('http://localhost:8000/post');

    return (
        <div>
            {data && <PosRes val={data} />}
            {error && <ErrorFetch err={error} />}
            {useNull && <NullData/>}
            {loading && <Loading/>}
        </div>
    )
}
 
export default Result;