import FetchData from "../FetchData";
import PosRes from "./PosRes";
import ErrorFetch from "./ErrorFetch";
import NullData from "./NullData";
import Loading from "./Loading";

const Result = () => {

    const { data, error, useNull, loading } = FetchData('Post');

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