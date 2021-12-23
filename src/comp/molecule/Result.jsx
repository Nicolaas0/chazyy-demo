import FetchData from "../../FetchData";
import PosRes from "../molecule/PosRes";
import ErrorFetch from "../ErrorFetch";
import Loading from "./Loading";

const Result = () => { 
    const { data, error, loading } = FetchData('Demo');

    return (
        <div>
            {data && <PosRes val={data} />}
            {error && <ErrorFetch err={error} />}
            {loading && <Loading/>}
        </div>
    )
}
 
export default Result;