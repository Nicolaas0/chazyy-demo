import FetchData from "../FetchData";
import PosRes from "./PosRes";
import ErrorFetch from "./ErrorFetch";
import NullData from "./NullData";
import Loading from "./Loading";
import firebase from '../Firebase'

const Result = () => { 
    // const ref = firebase.database().ref('Demo/');
    const { data, error, useNull, loading } = FetchData(`Demo`);

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